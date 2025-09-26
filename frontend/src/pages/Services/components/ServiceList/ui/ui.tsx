import { Link } from 'react-router';
import c from './ui.module.scss';

const ServiceList = () => {
  return (
    <div className={c.container}>
      <div className={c.header}>
        <span className={c.title}>Услуги</span>

        <div className={c.wrapper}>
          <img src="/loop.svg" alt="" />
          <input placeholder="Поиск по названию услуги" className={c.input} />
        </div>
      </div>

      <div className={c.grid}>
        <div className={c.block}>
          <div className={c.body}>
            <span className={c.text}>Диагностика</span>
            <img src="/green-arrow.png" className={c.link} alt="" />
          </div>

          <img src="/diagnos.png" className={c.bg} alt="" />
          <img src="/mask-group.png" className={c.green} alt="" />
        </div>

        <div className={c.block}>
          <div className={c.body}>
            <span className={c.text}>Общая медицина</span>
            <img src="/green-arrow.png" className={c.link} alt="" />
          </div>

          <img src="/vitamins.png" className={c.bg} alt="" />
          <img src="/mask-group.png" className={c.green} alt="" />
        </div>

        <Link to="/services/recovery-medicine" className={c.block}>
          <div className={c.body}>
            <span className={c.text}>
              Восстановительная
              <br />
              медицина
            </span>
            <img src="/green-arrow.png" className={c.link} alt="" />
          </div>

          <img src="/plusses.png" className={c.bg} alt="" />
          <img src="/mask-group.png" className={c.green} alt="" />
        </Link>

        <div className={c.block}>
          <div className={c.body}>
            <span className={c.text}>Лицо и тело</span>
            <img src="/green-arrow.png" className={c.link} alt="" />
          </div>

          <img src="/girl-smile.png" className={c.bg} alt="" />
          <img src="/mask-group.png" className={c.green} alt="" />
        </div>

        <div className={c.block}>
          <div className={c.body}>
            <span className={c.text}>Медицина для детей</span>
            <img src="/green-arrow.png" className={c.link} alt="" />
          </div>

          <img src="/baby-smile.png" className={c.bg} alt="" />
          <img src="/mask-group.png" className={c.green} alt="" />
        </div>

        <div className={c.block}>
          <div className={c.body}>
            <span className={c.text}>Хирургия</span>
            <img src="/green-arrow.png" className={c.link} alt="" />
          </div>

          <img src="/wow-nozhnycy.png" className={c.bg} alt="" />
          <img src="/mask-group.png" className={c.green} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
