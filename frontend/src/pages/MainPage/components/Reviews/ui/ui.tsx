import c from './ui.module.scss';
import { Link } from 'react-router';
const Reviews = () => {
  return (
    <div className={c.container}>
      <div className={c.reviewButton}>
        <button className={c.green}>Оставить отзыв</button>
      </div>
      
      <div className={c.header}>
        <span className={c.title}>Отзывы</span>

        <div className={c.buttons}>
          <Link rel="stylesheet" to="/reviews" className={c.link}>
            <img className={c.button} src="/arrow-right-black.svg" />
          </Link>
        </div>
      </div>

      <div className={c.section}>
        <span className={c.main}>
          <span className={c.ceil}>85% </span>
          отзывов наших пациентов -<br />
          про качественную поддержку
        </span>

        <div className={c.info}>
          <span className={c.title}>500</span>
          отзывов
          <br />
          на ...
        </div>
      </div>

      <div className={c.list}>
        <div className={c.block}>
          <div className={c.header}>
            <div className={c.wrapper}>
              <img src="/user.svg" />
            </div>

            <div className={c.title}>
              <span className={c.name}>Динар Искаков</span>
              <span className={c.date}>20.11.2024</span>
            </div>
          </div>

          <div className={c.stars}>
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
          </div>

          <span className={c.desc}>
            Лучшее место для обследования, встретили, проверили, дали
            направление после пары процедур, весь отек ушел. Если хотите быть
            здоровыми и прожить долго, это в МедХан...{' '}
          </span>

          <span className={c.more}>Читать полностью &gt;</span>
        </div>
        <div className={c.block}>
          <div className={c.header}>
            <div className={c.wrapper}>
              <img src="/user.svg" />
            </div>

            <div className={c.title}>
              <span className={c.name}>Динар Искаков</span>
              <span className={c.date}>20.11.2024</span>
            </div>
          </div>

          <div className={c.stars}>
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
          </div>

          <span className={c.desc}>
            Лучшее место для обследования, встретили, проверили, дали
            направление после пары процедур, весь отек ушел. Если хотите быть
            здоровыми и прожить долго, это в МедХан...{' '}
          </span>

          <span className={c.more}>Читать полностью &gt;</span>
        </div>
        <div className={c.block}>
          <div className={c.header}>
            <div className={c.wrapper}>
              <img src="/user.svg" />
            </div>

            <div className={c.title}>
              <span className={c.name}>Динар Искаков</span>
              <span className={c.date}>20.11.2024</span>
            </div>
          </div>

          <div className={c.stars}>
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
          </div>

          <span className={c.desc}>
            Лучшее место для обследования, встретили, проверили, дали
            направление после пары процедур, весь отек ушел. Если хотите быть
            здоровыми и прожить долго, это в МедХан...{' '}
          </span>

          <span className={c.more}>Читать полностью &gt;</span>
        </div>

        <div className={c.block}>
          <div className={c.header}>
            <div className={c.wrapper}>
              <img src="/user.svg" />
            </div>

            <div className={c.title}>
              <span className={c.name}>Лия Ильдаровна</span>
              <span className={c.date}>19.11.2024</span>
            </div>
          </div>

          <div className={c.stars}>
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
          </div>

          <span className={c.desc}>
            Была на обследовании, персонал самый лучший, нигде еще такого
            обслуживания не видела. Врачи очень квалифицированные, опытные.
            Теперь только к вам.
          </span>
        </div>

        <div className={c.block}>
          <div className={c.header}>
            <div className={c.wrapper}>
              <img src="/user.svg" />
            </div>

            <div className={c.title}>
              <span className={c.name}>Андрей Бажитов</span>
              <span className={c.date}>15.09.2024</span>
            </div>
          </div>

          <div className={c.stars}>
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
            <img src="/green-star.svg" alt="" />
          </div>

          <span className={c.desc}>
            Умар Хаят Хан - настоящий профессионал своего дела! Он внимателен,
            чуток и очень доступно объясняет все нюансы. Благодаря его
            компетентности и заботе, я быстро...
          </span>

          <span className={c.more}>Читать полностью &gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
