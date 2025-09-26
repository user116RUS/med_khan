import CurrentPath from '../../../components/CurrentPath/ui/ui'
import Specialists from '../../MainPage/components/Specialists/ui/ui'
import Research from '../components/Research/ui/ui'
import ServiceList from '../components/ServiceList/ui/ui'
import c from './ui.module.scss'

const Services = () => {

    return (
        <div className={c.container}>
            <CurrentPath />
            <ServiceList />
            <Research />
            <Specialists />
        </div>
    )
}

export default Services