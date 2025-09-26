FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Устанавливаем права и запускаем сборку
RUN chmod -R 755 /app && \
    npm run build

FROM nginx:stable-alpine

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем nginx конфигурацию
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80  # Измените на 80, так как nginx по умолчанию слушает на 80 порту

CMD ["nginx", "-g", "daemon off;"]