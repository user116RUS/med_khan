#!/bin/bash

# Скрипт для запуска бэкенда Medkhan2.0

echo "🚀 Запуск бэкенда Medkhan2.0..."

# Переходим в директорию проекта
cd "$(dirname "$0")"

# Добавляем uv в PATH
export PATH="$HOME/.local/bin:$PATH"

# Проверяем, что uv установлен
if ! command -v uv &> /dev/null; then
    echo "❌ uv не найден. Устанавливаем..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.local/bin:$PATH"
fi

# Проверяем, что MySQL запущен
if ! pgrep -x "mysqld" > /dev/null; then
    echo "⚠️  MySQL не запущен. Запускаем..."
    brew services start mysql
    sleep 2
fi

# Проверяем, что Redis запущен
if ! pgrep -x "redis-server" > /dev/null; then
    echo "⚠️  Redis не запущен. Запускаем..."
    brew services start redis
    sleep 2
fi

# Синхронизируем зависимости
echo "📦 Синхронизация зависимостей..."
uv sync

# Запускаем сервер
echo "🌐 Запуск сервера на http://localhost:8000"
echo "📚 API документация: http://localhost:8000/docs"
echo "🛑 Для остановки нажмите Ctrl+C"
echo ""

uv run python -m Medkhan
