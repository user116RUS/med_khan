import { useRef } from 'react';
import c from './ui.module.scss';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router';
import './ui.transition.scss';

interface StormProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Storm: React.FC<StormProps> = ({ isOpen, setOpen }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      classNames="storm"
      in={isOpen}
      nodeRef={containerRef}
      timeout={200}
    >
      <div ref={containerRef} className={c.container}>
        <div className={c.top}>
          <div className={c.wrapper}>
            <img src="/loop.svg" alt="" />
            <input placeholder="Поиск по названию услуги" className={c.input} />
          </div>
          <div>
            <div
              onClick={() => setOpen((prev: boolean) => !prev)}
              className={c.close}
            >
              X
            </div>
          </div>
        </div>

        <nav className={c.nav}>
          <Link
            to="/services"
            onClick={() => setOpen((prev: boolean) => !prev)}
            className={c.elem}
          >
            Услуги
          </Link>
          <Link
            to="/stock"
            onClick={() => setOpen((prev: boolean) => !prev)}
            className={c.elem}
          >
            Акции
          </Link>
          <Link
            to="/specialists"
            onClick={() => setOpen((prev: boolean) => !prev)}
            className={c.elem}
          >
            Специалисты
          </Link>
          <Link
            to="/reviews"
            onClick={() => setOpen((prev: boolean) => !prev)}
            className={c.elem}
          >
            Отзывы
          </Link>
          <Link
            to="/contacts"
            onClick={() => setOpen((prev: boolean) => !prev)}
            className={c.elem}
          >
            Контакты
          </Link>
        </nav>

        <span className={c.phone}>+7 (901) 143-34-34</span>

        <span className={c.title}>Часы работы</span>

        <span className={c.desc}>
          <span className={c.wow}>Пн-Пт</span> с 7:00 до 19:00{' '}
        </span>
        <span className={c.desc}>
          <span className={c.wow}>Сб</span> с 8:00 до 16:00{' '}
        </span>
        <span className={c.desc}>
          <span className={c.wow}>Вс</span> с 8:00 до 14:00
        </span>
      </div>
    </CSSTransition>
  );
};

export default Storm;
