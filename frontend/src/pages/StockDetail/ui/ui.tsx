import { useParams } from 'react-router';
import { useCheckUps } from '../../../hooks/useCheckUps';
import { formatExpiredDate } from '../../../utils/dateUtils';
import c from './ui.module.scss';

const StockDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useCheckUps();

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  const stock = data?.data?.find(item => item.id === parseInt(id || '0'));

  if (!stock) return <div>Акция не найдена</div>;

  const mockDetails = {
    consultation: [
      'Консультация врача невролога первичная',
      'Консультация врача невролога повторная'
    ],
    laboratory: [
      'Клинический анализ крови с лейкоцитарной формулой',
      'Общий анализ мочи',
      'Глюкоза',
      'Биохимия крови',
      'Забор венозной крови'
    ],
    ultrasound: [
      'УЗИ органов брюшной полости',
      'УЗИ почек'
    ],
    therapy: [
      'Ударно-волновая терапия (3 сеанса)'
    ]
  };

  return (
    <div className={c.container}>
      {/* Хлебные крошки */}
      <div className={c.breadcrumbs}>
        <span>Главная</span> / <span>Акции</span> / <span>CHECK UP «{stock.description}»</span>
      </div>

      {/* Поиск */}
      <div className={c.search}>
        <img src="/loop.svg" alt="" />
        <input placeholder="Поиск по названию услуги" />
      </div>

      {/* Основной баннер */}
      <div className={c.banner}>
        <div className={c.bannerContent}>
          <div className={c.bannerInfo}>
            <h1 className={c.bannerTitle}>CHECK UP «{stock.description}»</h1>
            <div className={c.prices}>
              <span className={c.discountedPrice}>{stock.discounted_price.toLocaleString()} ₽</span>
              <span className={c.originalPrice}>{stock.original_price.toLocaleString()} ₽</span>
            </div>
            <button className={c.bookButton}>
              Записаться на приём
              <img src="/arrow-right-black.svg" alt="" />
            </button>
          </div>
          <div className={c.bannerImage}>
            <img src="/girl.png" alt="" />
          </div>
        </div>
        <div className={c.expiryDate}>до {formatExpiredDate(stock.expired_at)}</div>
      </div>

      {/* Об акции */}
      <section className={c.aboutSection}>
        <h2 className={c.sectionTitle}>Об акции</h2>
        <div className={c.cardsGrid}>
          <div className={c.card}>
            <div className={c.cardNumber}>01</div>
            <h3 className={c.cardTitle}>Консультация</h3>
            <ul className={c.cardList}>
              {mockDetails.consultation.map((item, index) => (
                <li key={index}>+ {item}</li>
              ))}
            </ul>
          </div>

          <div className={c.card}>
            <div className={c.cardNumber}>02</div>
            <h3 className={c.cardTitle}>Лабораторная диагностика</h3>
            <ul className={c.cardList}>
              {mockDetails.laboratory.map((item, index) => (
                <li key={index}>+ {item}</li>
              ))}
            </ul>
          </div>

          <div className={c.card}>
            <div className={c.cardNumber}>03</div>
            <h3 className={c.cardTitle}>Ультразвуковая диагностика</h3>
            <ul className={c.cardList}>
              {mockDetails.ultrasound.map((item, index) => (
                <li key={index}>+ {item}</li>
              ))}
            </ul>
          </div>

          <div className={c.card}>
            <div className={c.cardNumber}>04</div>
            <h3 className={c.cardTitle}>Ударно-волновая терапия (3 сеанса)</h3>
            <ul className={c.cardList}>
              {mockDetails.therapy.map((item, index) => (
                <li key={index}>+ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Как получить скидку */}
      <section className={c.discountSection}>
        <h2 className={c.sectionTitle}>Как получить скидку?</h2>
        <div className={c.discountContent}>
          <div className={c.discountLeft}>
            <div className={c.discountItem}>
              <img src="/original-phone.svg" alt="" />
              <span>Позвонить нам по номеру <strong>+7 (901) 143-34-34</strong></span>
            </div>
            <div className={c.discountItem}>
              <img src="/pen.svg" alt="" />
              <span>Записаться онлайн, <a href="#">заполнив анкету</a></span>
            </div>
            <div className={c.discountItem}>
              <img src="/smiley.svg" alt="" />
              <span>Сообщить администратору на ресепшен, что вы хотите воспользоваться акцией</span>
            </div>
          </div>
          
          <div className={c.discountRight}>
            <h3 className={c.formTitle}>Заполните анкету первичного приёма</h3>
            <button className={c.formButton}>Перейти к заполнению</button>
            <img src="/form-illustration.png" alt="" className={c.formImage} />
          </div>
        </div>
      </section>

      {/* Врачи, участвующие в акции */}
      <section className={c.doctorsSection}>
        <h2 className={c.sectionTitle}>Врачи, участвующие в акции</h2>
        <div className={c.doctorsList}>
          <div className={c.doctorCard}>
            <div className={c.doctorWrapper}>
              <img src="/first-spec.png" alt="Нудельман Наталия Федоровна" className={c.doctorImage} />
              <span className={c.priceBadge}>Услуги от 1500 ₽</span>
            </div>
            <span className={c.doctorName}>
              Нудельман
              <br />
              Наталия Федоровна
            </span>
            <span className={c.doctorSpecialty}>Врач-невролог</span>
          </div>

          <div className={c.doctorCard}>
            <div className={c.doctorWrapper}>
              <img src="/second-spec.png" alt="Хан Умар Хаят" className={c.doctorImage} />
              <span className={c.priceBadge}>Услуги от 1500 ₽</span>
            </div>
            <span className={c.doctorName}>
              Хан
              <br />
              Умар Хаят
            </span>
            <span className={c.doctorSpecialty}>Андролог, главный врач, уролог</span>
          </div>

          <div className={c.doctorCard}>
            <div className={c.doctorWrapper}>
              <img src="/third-spec.png" alt="Хан Тюльпан Тимергалиевна" className={c.doctorImage} />
              <span className={c.priceBadge}>Услуги от 1500 ₽</span>
            </div>
            <span className={c.doctorName}>
              Хан
              <br />
              Тюльпан Тимергалиевна
            </span>
            <span className={c.doctorSpecialty}>
              Акушер-гинеколог, врач УЗИ,
              <br />
              генеральный директор, гинеколог
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StockDetail;
