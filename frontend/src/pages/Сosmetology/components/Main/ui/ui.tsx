import c from './ui.module.scss'

const Main = () => {

    return (
        <div className={c.container}>
            <div className={c.greenhead} />
            <div className={c.sled}></div>
            <div className={c.wrapper}>
                <div className={c.search}>
                    <img src="/loop.svg" alt="" />
                    <input placeholder='Поиск по названиям услуги' type="text" />
                </div>
            </div>
            <div className={c.main}>
                <span className={c.title}>Косметология</span>
                <span className={c.desc}>Все процедуры проводим в клинике: быстро, качественно, надежно</span>

                <div className={c.buttons}>
                    <div className={c.button}>Услуги и цены</div>
                    <div className={c.button}>Специалисты</div>
                </div>
            </div>

            <img src="/sleepy-woman.png" className={c.bg} alt="" />
        </div>
    )
}

export default Main