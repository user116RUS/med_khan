import c from './ui.module.scss';

const Main = () => {
  return (
    <div className={c.container}>
      <div className={c.geo}>
        <img src="/geolocation.svg" alt="" className={c.logo} />

        <span className={c.text}>
          Набережные Челны, 52-й комплекс, 20А
          <br /> Район Автозаводский
        </span>
      </div>

      <div className={c.below} />
      <div className={c.green} />

      <div className={c.bg}>
        <span className={c.ceil}>
          Гинекология
          <br />
          высшего класса
        </span>

        <span className={c.text}>
          Лазерное интимное
          <br />
          омоложение
          <br />
          <br /> Оперативная гинекология
        </span>

        <button className={c.button}>
          Узнать больше
          <img src="/arrow-right.svg" className={c.arrow} alt="" />
        </button>

        <img src="/woman.svg" className={c.woman} alt="" />
        <img src="/woman-bg.svg" alt="" className={c.womanBg} />
        <img src="/tuman.svg" className={c.tuman} alt="" />
      </div>
    </div>
  );
};

export default Main;
