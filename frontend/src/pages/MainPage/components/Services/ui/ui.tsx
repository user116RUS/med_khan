import c from './ui.module.scss';

const Services = () => {
  return (
    <div className={c.container}>
      <div className={c.header}>
        <span className={c.title}>Популярные услуги</span>

        <span className={c.button}>
          <img src="/green-arrow.svg" className={c.vector} alt="" />
        </span>
      </div>

      <div className={c.grid}>
        <div className={[c.elem1, c.elem].join(' ')}>
          <span className={c.title}>Урология/Андрология</span>
          <img src="/brokkoli.png" className={c.icon} />
        </div>
        <div className={[c.elem2, c.elem].join(' ')}>
          <span className={c.title}>Гинекология</span>
          <img src="/romashka.svg" className={c.icon} />
        </div>
        <div className={[c.elem3, c.elem].join(' ')}>
          <span className={c.title}>Эндоскопия</span>
          <img src="/neuro.png" className={c.icon} />
        </div>
        <div className={[c.elem4, c.elem].join(' ')}>
          <span className={c.title}>Гастроэнтерология</span>
          <img src="/zhelud.png" className={c.icon} />
        </div>
        <div className={[c.elem5, c.elem].join(' ')}>
          <span className={c.title}>Хирургия</span>
          <img src="/nozh.png" className={c.icon} />
        </div>
        <div className={[c.elem6, c.elem].join(' ')}>
          <span className={c.title}>Травматология</span>
          <img src="/ponchik.png" className={c.icon} />
        </div>
        <div className={c.elem7}>
          <span className={c.title}>
            <div className={c.mal}>CHECK UP</div>
            Комплексное обследование
          </span>

          <span className={c.absFake}>
            Удобное и эффективное решение для заботы о здоровье
          </span>

          <div className={c.buttons}>
            <button className={c.first}>Получить консультацию</button>
            <button className={c.second}>Подробнее</button>
          </div>

          <img src="/dnk.png" className={c.iconDnk} alt="" />
          <img src="/dnk-mask.png" className={c.mask} alt="" />

          <span className={c.abs}>
            Удобное и эффективное решение для заботы о здоровье
          </span>
        </div>
      </div>

      <div className={c.buttonsFake}>
        <button className={c.first}>Получить консультацию</button>
        <button className={c.second}>Подробнее</button>
      </div>
    </div>
  );
};

export default Services;
