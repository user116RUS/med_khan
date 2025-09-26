import Footer from '../../Footer/ui/ui'
import Header from '../../Header/ui/ui'
import Router from '../../Router/ui/ui'
import c from './Container.module.scss'

const Container = () => {

    return (
        <div className={c.container}>
            <Header />
            <Router />
            <Footer />
        </div>
    )
}

export default Container