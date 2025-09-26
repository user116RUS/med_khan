FROM node:18-alpine AS builder

WORKDIR /app

# Копируем package файлы
COPY package*.json ./

# Устанавливаем зависимости и явно устанавливаем TypeScript если нужно
RUN npm install && \
    npm list typescript || npm install --save-dev typescript

# Копируем исходный код
COPY . .

# Проверяем наличие TypeScript
RUN npx tsc --version

# Запускаем сборку
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]