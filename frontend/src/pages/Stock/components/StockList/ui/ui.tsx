import c from './ui.module.scss'

const StockList = () => {

    return (
        <div className={c.container}>
            <div className={c.header}>
                <span className={c.title}>Акции</span>

                <div className={c.wrapper}>
                    Пол
                    <img src="/arrow-bottom.svg" alt="" />
                </div>
            </div>

            <div className={c.grid}>
                <div className={c.main}>
                    <img src="/zh.svg" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>14 730 ₽</span>
                            <span className={c.floor}>16 375 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>«Боль в спине<br />Расширенный»</span>
                        </span>
                    </div>

                    <img src="/girl.png" alt="" className={c.girl} />
                    <img src="/green-gradient.png" className={c.gradient} alt="" />
                </div>

                <div className={[c.elem, c.elem1].join(' ')}>
                    <img src="/boy-gender.svg" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>6 000 ₽</span>
                            <span className={c.floor}>7 200 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>«Женское здоровье» (Пакет S)</span>
                        </span>
                    </div>

                    <img src="/zelenaya-shtuka.png" className={c.gradient} alt="" />
                </div>

                <div className={[c.elem, c.elem1].join(' ')}>
                    <img src="/boy-gender.svg" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>6 000 ₽</span>
                            <span className={c.floor}>7 200 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>«Женское здоровье» (Пакет S)</span>
                        </span>
                    </div>

                    <img src="/zelenaya-shtuka.png" className={c.gradient} alt="" />
                </div>

                <div className={[c.elem, c.elem2].join(' ')}>
                    <img src="/duo-gender.png" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>8 160 ₽</span>
                            <span className={c.floor}>9 070 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>«Репродуктивность»</span>
                        </span>
                    </div>

                </div>

                <div className={[c.elem, c.elem3].join(' ')}>
                    <img src="/duo-gender.png" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>6 000 ₽</span>
                            <span className={c.floor}>7 045 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>«Здоровый желудок»</span>
                        </span>
                    </div>

                </div>

                <div className={[c.elem, c.elem4].join(' ')}>
                    <img src="/duo-gender.png" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>10 300 ₽</span>
                            <span className={c.floor}>11 545 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>Гастрологический «Расширенный» </span>
                        </span>
                    </div>

                </div>

                <div className={[c.elem, c.elem5].join(' ')}>
                    <img src="/duo-gender.png" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>18 900 ₽</span>
                            <span className={c.floor}>20 735 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>Гастрологический «Комплекс» </span>
                        </span>
                    </div>

                </div>

                <div className={[c.elem, c.elem6].join(' ')}>
                    <img src="/duo-gender.png" alt="" />

                    <div className={c.modal}>
                        <span className={c.ceil}>до 5 марта</span>
                        <span className={c.floor}>-15%</span>
                    </div>

                    <div className={c.info}>
                        <div className={c.price}>
                            <span className={c.ceil}>6 500 ₽</span>
                            <span className={c.floor}>7 375 ₽</span>
                        </div>

                        <span className={c.title}>
                            CHECK UP
                            <br />
                            <span className={c.floor}>«Боль в спине»</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className={c.more}>
                Показать еще
            </div>
        </div>
    )
}

export default StockList