import { Link, useLocation } from 'react-router';
import c from './ui.module.scss';

const pathsIdentify: Record<
  string,
  {
    title: string;
    path: string;
  }
> = {
  services: {
    title: 'Услуги',
    path: '/services',
  },
  'recovery-medicine': {
    title: 'Восстановительная медицина',
    path: '/services/recovery-medicine',
  },
  'health-magazine': {
    title: 'Журнал о здоровье',
    path: '/health-magazine',
  },
  stock: {
    title: 'Акции',
    path: '/stock',
  },
  specialists: {
    title: 'Специалисты',
    path: '/specialists',
  },
  cosmetology: {
    title: 'Косметология',
    path: '/services/recovery-medicine/cosmetology',
  },
};

const CurrentPath = () => {
  const { pathname } = useLocation();

  const paths = pathname.split('/').filter((el) => el !== '');

  console.log(paths);

  return (
    <div className={c.container}>
      <Link to="/" className={c.main}>
        Главная
      </Link>
      {paths.map((path) => (
        <div key={path}>
          <span> </span>/
          <Link to={pathsIdentify[path].path} className={c.path}>
            {' '}
            {pathsIdentify[path].title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CurrentPath;
