import { Link } from 'react-router';
import c from './ui.module.scss';

const Health = () => {
  return (
    <div className={c.container}>
      <div className={c.header}>
        <span className={c.title}>Журнал о здоровье</span>

        <>
          <Link to="/health-magazine" className={c.button}>
            <img src="/arrow-right-black.svg" />
          </Link>
        </>
      </div>

      <div className={c.grid}>
        <div className={c.block}>
          <div className={c.wrapper}>
            <img src="/lotos.png" />
          </div>
          <span className={c.title}>
            Интимное омоложение фракционным лазером СО2
          </span>
          <span className={c.desc}>
            Интимное омоложение СО2-лазером показано пациенткам любого возраста
            при наличии показаний.
          </span>
          <img src="/health-mask.png" className={c.bg} alt="" />
        </div>

        <div className={c.block}>
          <div className={c.wrapper}>
            <img src="/laser.png" />
          </div>
          <span className={c.title}>
            Хронический простатит и ЭУВТ—Терапия ударно-волновым методом
          </span>
          <span className={c.desc}>
            Терапия ударно-волновым методом — это современный и эффективный
            подход в лечении хронических заболеваний.
          </span>
          <img src="/health-mask.png" className={c.bg} alt="" />
        </div>

        <div className={c.block}>
          <div className={c.wrapper}>
            <img src="/doctor.png" />
          </div>
          <span className={c.title}>
            Доктор Хан Умар Хаят – пионер ударно-волновой терапии в РТ
          </span>
          <span className={c.desc}>
            Хан Умар Хаят – главный врач клиники "МедХан" первым в Республике
            Татарстан начал внедрение ударно-волновой терапии (УВТ) для лечения
            урологических заболеваний.
          </span>
          <img src="/health-mask.png" className={c.bg} alt="" />
        </div>

        <div className={c.block}>
          <div className={c.wrapper}>
            <img src="/hand.png" />
          </div>
          <span className={c.title}>
            Эффективные операции для мужского здоровья в клинике «МедХан»
          </span>
          <span className={c.desc}>
            Лечение урологических заболеваний - широкий спектр хирургических
            операций, направленных на восстановление здоровья мужчин. Онлайн
            запись к специалисту
          </span>
          <img src="/health-mask.png" className={c.bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Health;
