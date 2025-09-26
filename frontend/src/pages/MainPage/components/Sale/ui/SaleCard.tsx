import c from './ui.module.scss';
import { SaleMain } from './SaleTypes/SaleMain';
import { SaleSecondary } from './SaleTypes/SaleSecondary';
import { SaleThird } from './SaleTypes/SaleThird';
import { Sale } from '../../../../Interface/Sale.interface';

// Максимальное количество карточек акций (1 большая + 3 маленькие)
const MAX_SALES_COUNT = 4;

// Моковые данные для акций
const mockSales: Sale[] = [
  {
    id: 1,
    name: 'Боль в спине Расширенный',
    description: 'Комплексное обследование позвоночника',
    original_price: 7200,
    discounted_price: 6000,
    gender: 'general',
    sale_type: 'main',
    expired_at: '5 марта',
    discount_percentage: 15,
    image: '/girl.png'
  },
  {
    id: 2,
    name: 'Женское здоровье (Пакет S)',
    description: 'Базовое обследование для женщин',
    original_price: 7200,
    discounted_price: 6000,
    gender: 'women',
    sale_type: 'secondary',
    expired_at: '5 марта',
    discount_percentage: 15
  },
  {
    id: 3,
    name: 'Репродуктивность',
    description: 'Обследование репродуктивной системы',
    original_price: 7200,
    discounted_price: 6000,
    gender: 'men',
    sale_type: 'secondary',
    expired_at: '5 марта',
    discount_percentage: 15
  },
  {
    id: 4,
    name: 'Здоровый желудок',
    description: 'Гастроэнтерологическое обследование',
    original_price: 7200,
    discounted_price: 6000,
    gender: 'general',
    sale_type: 'third',
    expired_at: '5 марта',
    discount_percentage: 15
  }
];

export const SaleCard = () => {
  // Ограничиваем количество карточек до 4 (1 большая + 3 маленькие)
  const limitedSales = mockSales.slice(0, MAX_SALES_COUNT);
  
  // Разделяем карточки на главную, среднюю и маленькие
  const mainCard = limitedSales.find(item => item.sale_type === 'main');
  const secondaryCard = limitedSales.find(item => item.sale_type === 'secondary');
  const thirdCards = limitedSales.filter(item => item.sale_type === 'third');

  // Если нет данных, показываем заглушку
  if (!limitedSales.length) {
    return <div>Нет доступных акций</div>;
  }

  return (
    <>
      <div className={c.grid}>
        {mainCard && (
          <div className={c.mainCard}>
            <SaleMain {...mainCard} />
          </div>
        )}
        
        <div className={c.rightCards}>
          {secondaryCard && (
            <SaleSecondary key={secondaryCard.id} {...secondaryCard} />
          )}
          
          {thirdCards.length > 0 && (
            <div className={c.smallCardsGrid}>
              {thirdCards.map((item) => (
                <SaleThird key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
