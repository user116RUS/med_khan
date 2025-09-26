import { useCheckUps } from '../../../../../hooks/useCheckUps';
import { formatExpiredDate } from '../../../../../utils/dateUtils';
import c from './ui.module.scss';
import { CheckUpFirst } from './CheckUpTypes/CheckUpFirst';
import { CheckUpSeconde } from './CheckUpTypes/CheckUpSeconde';
import { CheckUpThird } from './CheckUpTypes/CheckUpThird';
import { CheckUp } from '../../../../Interface/CheckUps.interface';

// Моковые данные для CheckUp (fallback если API недоступен)
const mockCheckUps: CheckUp[] = [
  {
    id: 1,
    name: 'Общий анализ крови',
    description: 'Полный анализ крови с лейкоцитарной формулой',
    original_price: 1500,
    discounted_price: 1200,
    gender: 'general',
    checkup_type: 'FIRST',
    expired_at: '2025-12-31T23:59:59',
    discount_percentage: 20
  },
  {
    id: 2,
    name: 'CHECK UP',
    description: 'Боль в спине Расширенный',
    original_price: 7200,
    discounted_price: 6000,
    gender: 'general',
    checkup_type: 'SECONDARY',
    expired_at: '2025-03-05T23:59:59',
    discount_percentage: 15
  },
  {
    id: 3,
    name: 'CHECK UP',
    description: 'Репродуктивность',
    original_price: 7200,
    discounted_price: 6000,
    gender: 'male',
    checkup_type: 'THIRD',
    expired_at: '2025-03-05T23:59:59',
    discount_percentage: 15
  },
  {
    id: 4,
    name: 'CHECK UP',
    description: 'Здоровый желудок',
    original_price: 7200,
    discounted_price: 6000,
    gender: 'general',
    checkup_type: 'THIRD',
    expired_at: '2025-03-05T23:59:59',
    discount_percentage: 15
  }
];

interface CheckUpCardProps {
  selectedGender?: string;
}

export const CheckUpCard = ({ selectedGender = 'all' }: CheckUpCardProps) => {
  const { data, isLoading, error } = useCheckUps();

  // Показываем загрузку
  if (isLoading) {
    return <div>Загрузка акций...</div>;
  }

  // Показываем ошибку
  if (error) {
    return <div>Ошибка загрузки акций</div>;
  }

  // Используем данные из API или fallback на моковые данные
  const checkUpData = data?.data || mockCheckUps;
  
  // Фильтруем данные по полу
  const filteredData = selectedGender === 'all' 
    ? checkUpData 
    : checkUpData.filter(item => item.gender === selectedGender);
  
  // Ограничиваем количество карточек до 8 (1 большая + 3 маленькие + 4 дополнительных)
  const limitedData = filteredData.slice(0, 8);
  
  // Рандомно распределяем типы карточек и форматируем даты
  const redistributedData = limitedData.map((item, index) => {
    let checkupType = 'FIRST';
    
    if (index === 0) {
      // Первая карточка - главная
      checkupType = 'FIRST';
    } else if (index === 1) {
      // Вторая карточка - средняя
      checkupType = 'SECONDARY';
    } else {
      // Остальные карточки - маленькие
      checkupType = 'THIRD';
    }
    
    return {
      ...item,
      checkup_type: checkupType,
      expired_at: formatExpiredDate(item.expired_at)
    };
  });
  
  // Разделяем карточки по новым типам
  const mainCard = redistributedData.find(item => item.checkup_type === 'FIRST');
  const secondaryCard = redistributedData.find(item => item.checkup_type === 'SECONDARY');
  const thirdCards = redistributedData.filter(item => item.checkup_type === 'THIRD');
  
  // Разделяем дополнительные карточки на ряды по 2
  const additionalCards = thirdCards.slice(2); // Берем карточки с 3-й позиции
  const additionalRows = [];
  for (let i = 0; i < additionalCards.length; i += 2) {
    additionalRows.push(additionalCards.slice(i, i + 2));
  }

  // Если нет данных, показываем заглушку
  if (!limitedData.length) {
    return <div>Нет доступных акций</div>;
  }

  return (
    <>
      <div className={c.grid}>
        {mainCard && (
          <div className={c.mainCard}>
            <CheckUpFirst {...mainCard} />
          </div>
        )}
        
        <div className={c.rightCards}>
          {secondaryCard && (
            <CheckUpSeconde key={secondaryCard.id} {...secondaryCard} />
          )}
          
          {thirdCards.length > 0 && (
            <div className={c.smallCardsGrid}>
              {thirdCards.slice(0, 2).map((item) => (
                <CheckUpThird key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Дополнительные ряды карточек */}
      {additionalRows.map((row, rowIndex) => (
        <div key={rowIndex} className={c.additionalRow}>
          {row.map((item) => (
            <CheckUpThird key={item.id} {...item} />
          ))}
        </div>
      ))}
    </>
  );
};
