import c from './ui.module.scss';
import { Link } from 'react-router';

const News = () => {
  return (
    <div className={c.container}>
      <div className={c.main}>
        <div className={c.part}>
          <span className={c.headerTitle}>СМИ о нас</span>
        </div>
        <img className={c.button} src="/arrow-right-black.svg" />
      </div>

      <div className={c.list}>
        <Link 
          to="https://www.республика21век.рф/2025/05/21/медхан-клиника-мирового-уровня/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className={c.block}>
            <span className={c.title}>Название статьи</span>
            <span className={c.url}>республика21век.рф/2025/05/21/...</span>

            <div className={c.wrapper}>
              <img src="/bo.svg" />
            </div>
          </div>
        </Link>
        <Link 
          to="https://chelny-izvest.ru/news/world/peredovye-evropeyskie-tekhnologii-lecheniya-adenomy-prostaty-v-klinike-medkhan?ysclid=mfco3w8duw955679168" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className={c.block}>
            <span className={c.title}>Название статьи</span>
            <span className={c.url}>chelny-izvest.ru/news/world/...</span>

            <div className={c.wrapper}>
              <img src="/chi.svg" />
            </div>
          </div>
        </Link>
        <Link 
          to="https://dzen.ru/a/ZYFtETWFWyL6zt-0?ysclid=mfco5b6k7p885209405" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className={c.block}>
            <span className={c.title}>Название статьи</span>
            <span className={c.url}>dzen.ru/a/ZYFtETWFWyL6zt-0</span>

            <div className={c.wrapper}>
              <img src="/dzen.svg" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default News;
