import c from './Styles/Main.module.scss';
import { Sale } from '../../../../../../Interface/Sale.interface';

type SaleMainType = Sale;

export const SaleMain = ({
  discount_percentage,
  discounted_price,
  expired_at,
  gender,
  name,
  original_price,
  image,
}: SaleMainType) => {
  return (
    <>
      <div className={c.card}>
        <div className={c.leftContent}>
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
              <span className={c.currentPrice}>{discounted_price} ₽</span>
              <span className={c.originalPrice}>{original_price} ₽</span>
            </div>
            <div className={c.saleInfo}>
              <span className={c.saleTitle}>АКЦИЯ</span>
              <span className={c.saleName}>{name}</span>
            </div>
          </div>
        </div>
        <div className={c.rightImage}>
          <img src={image || "/girl.png"} alt="Акция" className={c.saleImage} />
          <img src="/girl-bg.png" alt="Фон" className={c.bgImage} />
        </div>
      </div>
    </>
  );
};
