import c from './Styles/Third.module.scss';
import { Sale } from '../../../../../../Interface/Sale.interface';

type SaleThirdType = Sale;

export const SaleThird = ({
  discount_percentage,
  discounted_price,
  expired_at,
  gender,
  name,
  original_price,
}: SaleThirdType) => {
  return (
    <>
      <div className={c.card}>
        <div className={c.topInfo}>
          <div className={c.genderIcon}>
            <img
              src={
                gender === 'general'
                  ? '/gender-gray.svg'
                  : gender === 'women'
                  ? '/girl-gender.svg'
                  : '/boy-gender.svg'
              }
              alt="gender"
            />
          </div>
          <div className={c.infoTags}>
            <span className={c.dateTag}>до {expired_at}</span>
            <span className={c.discountTag}>-{discount_percentage}%</span>
          </div>
        </div>
        <div className={c.middleContent}>
          <div className={c.prices}>
            {discounted_price && (
              <span className={c.currentPrice}>{discounted_price} ₽</span>
            )}
            <span className={c.originalPrice}>{original_price} ₽</span>
          </div>
          <div className={c.saleInfo}>
            <span className={c.saleTitle}>АКЦИЯ</span>
            <span className={c.saleName}>{name}</span>
          </div>
        </div>
      </div>
    </>
  );
};
