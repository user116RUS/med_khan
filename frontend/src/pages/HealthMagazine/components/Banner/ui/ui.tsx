import c from './ui.module.scss'

const Banner = () => {

    return (
        <div className={c.container}>
            <div className={c.first}>
                <span className={c.title}>Можете связаться с нами<br />удобным для вас способом</span>

                <div className={c.info}>
                    <span className={c.ceil}>Набережные Челны,<br />52-й комплекс, 20А</span>
                    <span className={c.floor}>+7 (901) 143-34-34</span>
                </div>

                <div className={c.links}>
                    <div className={c.wrapper}><img src='/white-mail.png' /></div>
                    <div className={c.wrapper}><img src='/white-telegram.png' /></div>
                    <div className={c.wrapper}><img src='/white-whatsapp.png' /></div>
                </div>
            </div>

            <div className={c.second}>
                <div className={c.info}>
                    <span className={c.title}>Или заполните анкету<br/>первичного приёма</span>

                    <button className={c.button}>Перейти к заполнению</button>
                </div>

                <img src="/olsheu.png" className={c.bg} alt="" />
            </div>

            <img src="/health-mask-group.png" className={c.background} alt="" />
        </div>
    )
}

export default Banner