import c from './ui.module.scss'

const Research = () => {

    return (
        <div className={c.container}>
            <div className={c.header}>
                <span className={c.title}>Комплексные обследования</span>

                <button className={c.button}>Все обследования <img src='/arrow-right-black.svg' /></button>
            </div>

            <div className={c.grid}>
                <div className={c.block}>
                    <span className={c.title}>Годовые программы прикрепления</span>

                    <img src="/fyp.svg" alt="" />

                    <button className={c.button}>Выбрать</button>
                </div>
                <div className={c.block}>
                    <span className={c.title}>Программы обследования</span>

                    <img src="/case.svg" alt="" />

                    <button className={c.button}>Выбрать</button>
                </div>
                <div className={c.block}>
                    <span className={c.title}>Улучшение качества жизни</span>

                    <img src="/graph.svg" alt="" />

                    <button className={c.button}>Выбрать</button>
                </div>
                <div className={c.block}>
                    <span className={c.title}>Планирование семьи</span>

                    <img src="/babyface.svg" alt="" />

                    <button className={c.button}>Выбрать</button>
                </div>
            </div>
        </div>
    )
}

export default Research