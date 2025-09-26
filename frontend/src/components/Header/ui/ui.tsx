import { Link } from 'react-router';
import c from './ui.module.scss';
import Storm from '../Storm/ui/ui';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={c.container}>
      <Link to="/">
        <img src="/logo.svg" className={c.logo} alt="" />
      </Link>

      <span className={c.phone}>+7 (901) 143-34-34</span>

      <nav className={c.nav}>
        <Link to="/services" className={c.elem}>
          Услуги
        </Link>
        <Link to="/stock" className={c.elem}>
          Акции
        </Link>
        <Link to="/specialists" className={c.elem}>
          Специалисты
        </Link>
        <Link to="/reviews" className={c.elem}>
          Отзывы
        </Link>
        <Link to="/contacts" className={c.elem}>
          Контакты
        </Link>
        <Link to="/health-magazine" className={c.elem}>
          Журнал о здоровье
        </Link>
      </nav>

      <button className={c.button}>Записаться</button>

      <img className={c.icon} src="/original-whatsapp.svg" alt="" />
      <img className={c.icon} src="/original-phone.svg" alt="" />

      <div onClick={() => setOpen((prev) => !prev)} className={c.burger}>
        <div className={c.stick1} />
        <div className={c.stick2} />
        <div className={c.click}></div>
      </div>

      <Storm setOpen={setOpen} isOpen={isOpen} />
    </div>
  );
};

export default Header;
