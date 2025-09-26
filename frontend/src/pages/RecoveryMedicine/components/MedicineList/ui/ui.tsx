import { Link } from 'react-router'
import c from './ui.module.scss'

const MedicineList = () => {

    return (
        <div className={c.container}>
            <div className={c.header}>
                <span className={c.title}>Восстановительная медицина</span>

                <div className={c.wrapper}>
                    <img src="/loop.svg" alt="" />
                    <input placeholder='Поиск по названию услуги' className={c.input} />
                </div>
            </div>

            <div className={c.grid}>
                <Link to="/services/recovery-medicine/cosmetology" className={c.block}>
                    <span className={c.title}>Косметология</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </Link>
                <div className={c.block}>
                    <span className={c.title}>Физиотерапия</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </div>
                <div className={c.block}>
                    <span className={c.title}>Лучевая<br/>терапия</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </div>
                <div className={c.block}>
                    <span className={c.title}>Процедурный<br/>кабинет</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </div>
                <div className={c.block}>
                    <span className={c.title}>Ударно-волновая<br/>терапия</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </div>
                <div className={c.block}>
                    <span className={c.title}>Лечебный<br/>массаж</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </div>
                <div className={c.block}>
                    <span className={c.title}>Подготовка <br />к беременности</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </div>
                <div className={c.block}>
                    <span className={c.title}>Лечение ЗППП</span>
                    <img src="/green-arrow.png" className={c.link} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MedicineList