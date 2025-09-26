import c from './ui.module.scss'

const Form = () => {

    return (
        <div className={c.container}>
            <div className={c.first}>
                <span className={c.title}>Нужна дополнительная информация?</span>

                <span className={c.desc}>Не нашли ответ на свой вопрос? Оставьте заявку и наши специалисты проконсультируют Вас. </span>

                <span className={c.write}>Или напишите нам в чат:</span>

                <div className={c.links}>
                    <div className={c.wrapper}><img src='/white-mail.png' /></div>
                    <div className={c.wrapper}><img src='/white-telegram.png' /></div>
                    <div className={c.wrapper}><img src='/white-whatsapp.png' /></div>
                </div>
            </div>

            <form className={c.second}>
                <input type="text" placeholder='Как вас зовут?' className={c.input} />
                <input type="text" placeholder='Ваш номер телефона' className={[c.input, c.input2].join(' ')} />
                <span className={c.desc}>нажимая на кнопку, вы соглашаетесь с условиями обработки данных в соответствии с <span className={c.highlight}>политикой конфиденциальности</span></span>
                <button className={c.button}>Оставить заявку</button>
                <img src="/form-mask-group.png" alt="" />
            </form>
        </div>
    )
}

export default Form