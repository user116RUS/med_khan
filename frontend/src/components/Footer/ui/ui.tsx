import c from './ui.module.scss';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className={c.container}>
      <div className={c.first}>
        <div className={c.green}>
          <div className={c.left}>
            <img src="/white-logo.png" alt="" />

            <div className={c.mini}>
              <span className={c.ceil}>
                Набережные Челны,
                <br />
                52-й комплекс, 20А
              </span>

              <span className={c.floor}>+7 (901) 143-34-34</span>
            </div>
          </div>

          <div className={c.right}>
            <span className={c.title1}>Пишите нам по любым вопросам</span>

            <div className={c.links}>
              <Link 
                to="mailto:medkhan@mail.ru" 
                style={{ textDecoration: 'none' }}
              >
                <div className={c.wrapper}>
                  <img src="/white-mail.png" />
                </div>
              </Link>
              <Link 
                to="https://t.me/medkhancl" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className={c.wrapper}>
                  <img src="/white-telegram.png" />
                </div>
              </Link>
              <Link 
                to="https://wa.me/79011433434" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className={c.wrapper}>
                  <img src="/white-whatsapp.png" />
                </div>
              </Link>
            </div>
          </div>

          <img src="/footer-bg.png" className={c.bg} alt="" />
        </div>

        <div className={c.info}>
          <div className={c.license}>
            <span className={c.title2}>
              Лицензия на медицинскую деятельность
            </span>

            <span className={c.desc}>проверить лицензию</span>
          </div>

          <div className={c.blocks}>
            <Link 
              to="https://yandex.ru/maps/org/medkhan/191118698491/?ll=52.443789%2C55.749372&z=13" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={c.block}>
                <p className={c.title3}>4.9</p>
                <img className={c.infoImg} src="/yandex.png" alt="" />
              </div>
            </Link>
            <Link 
              to="https://2gis.ru/nabchelny/firm/70000001028935054" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={c.block}>
                <p className={c.title3}>4.7</p>
                <img className={c.infoImg} src="/2gis.png" alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={c.second}>
        <Link 
          to="https://t.me/medkhancl" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className={c.block}>
            <img src="/original-telegram.png" alt="" />
            <span>MedKhan в тг</span>
          </div>
        </Link>
        <Link 
          to="https://vk.com/medkhanc" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className={c.block}>
            <img src="/original-wk.png" alt="" />
            <span>MedKhan в вк</span>
          </div>
        </Link>
        <Link 
          to="mailto:medkhan@mail.ru" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className={c.block}>
            <img src="/original-youtube.png" alt="" />
            <span>medkhan@mail.ru</span>
          </div>
        </Link>
      </div>

      <div className={c.third}>
        <span className={c.ceil}>
          © 2023 - 2025 г. «Медицинский центр МедХан»
        </span>

        <div className={c.floor}>
          <span className={c.bir}>Политика конфиденциальности</span>
          <span className={c.eki}>Реквизиты</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
