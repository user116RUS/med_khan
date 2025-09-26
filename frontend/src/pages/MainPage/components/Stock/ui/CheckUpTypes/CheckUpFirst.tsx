import { Link } from 'react-router';
import c from './Styles/First.module.scss';

import { CheckUp } from '../../../../../../Interface/CheckUps.interface';

type CheckUpFirstType = CheckUp;

export const CheckUpFirst = ({
  id,
  discount_percentage,
  discounted_price,
  expired_at,
  gender,
  name,
  original_price,
}: CheckUpFirstType) => {
  return (
    <Link to={`/stock/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
            <div className={c.checkUpInfo}>
              <span className={c.checkUpTitle}>CHECK UP</span>
              <span className={c.checkUpName}>{name}</span>
            </div>
          </div>
        </div>
        <div className={c.rightImage}>
          <img src="/girl.png" alt="Девушка" className={c.girl} />
          <img src="/girl-bg.png" alt="Фон" className={c.bgGirl} />
        </div>
      </div>
    </Link>
  );
};
