import CurrentPath from '../../../components/CurrentPath/ui/ui'
import Research from '../../Services/components/Research/ui/ui'
import Main from '../components/Main/ui/ui'
import c from './ui.module.scss'

const Сosmetology = () => {

    return (
        <div className={c.container}>
            <CurrentPath />
            <Main />
            <Research />
        </div>
    )
}

export default Сosmetology  