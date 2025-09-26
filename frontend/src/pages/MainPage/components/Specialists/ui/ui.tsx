import c from './ui.module.scss';
import { Link } from 'react-router';
const Specialists = () => {
  return (
    <div className={c.container}>
      <div className={c.header}>
        <span className={c.title}>Команда специалистов</span>

        <div className={c.button}>
          <Link to="/specialists" className={c.link}>
            <img src="/arrow-right-black.svg" alt="" />
          </Link>
        </div>
      </div>

      <div className={c.list}>
        <div className={c.elem}>
          <div className={c.wrapper}>
            <img src="/first-spec.png" className={c.img} />
            <span className={c.modal}>Услуги от 1500 ₽</span>
          </div>
          <span className={c.title}>
            Нудельман <br />
            Наталия Федоровна
          </span>

          <span className={c.desc}>Врач-невролог</span>
        </div>

        <div className={c.elem}>
          <div className={c.wrapper}>
            <img src="/second-spec.png" className={c.img} />
            <span className={c.modal}>Услуги от 1500 ₽</span>
          </div>
          <span className={c.title}>
            Хан
            <br />
            Умар Хаят
          </span>

          <span className={c.desc}>Андролог, главный врач, уролог</span>
        </div>

        <div className={c.elem}>
          <div className={c.wrapper}>
            <img src="/third-spec.png" className={c.img} />
            <span className={c.modal}>Услуги от 1500 ₽</span>
          </div>
          <span className={c.title}>
            Хан
            <br />
            Тюльпан Тимергалиевна{' '}
          </span>

          <span className={c.desc}>
            Акушер-гинеколог, врач УЗИ,
            <br />
            генеральный директор, гинеколог
          </span>
        </div>

        <div className={c.elem}>
          <div className={c.wrapper}>
            <img src="/fourth-spec.png" className={c.img} />
            <span className={c.modal}>Услуги от 1500 ₽</span>
          </div>
          <span className={c.title}>
            Башарова
            <br />
            Альбина Шарипзяновна{' '}
          </span>

          <span className={c.desc}>
            Терапевт, главный специалист
            <br />в сфере медицины
          </span>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
