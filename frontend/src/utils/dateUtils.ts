// Функция для форматирования даты
export const formatExpiredDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('ru-RU', { month: 'long' });
    return `${day} ${month}`;
  } catch (error) {
    // Если не удалось распарсить дату, возвращаем оригинальную строку
    return dateString;
  }
};
