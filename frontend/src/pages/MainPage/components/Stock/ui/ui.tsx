import { CheckUpCard } from './CheckUpCard';
import c from './ui.module.scss';
import { Link } from 'react-router';
const Stock = () => {
  return (
    <div className={c.container}>
      <div className={c.header}>
        <span className={c.title}>Акции</span>

        <span className="button">
          <Link to={'/stock'} className={c.link}>
            <img src="/arrow-right-black.svg" className={c.arrow} />
          </Link>
        </span>
      </div>

      <div>
        <CheckUpCard />
      </div>
    </div>
  );
};

export default Stock;
