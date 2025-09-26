import CurrentPath from '../../../components/CurrentPath/ui/ui'
import Specialists from '../../MainPage/components/Specialists/ui/ui'
import Research from '../../Services/components/Research/ui/ui'
import MedicineList from '../components/MedicineList/ui/ui'
import c from './ui.module.scss'

const RecoveryMedicine = () => {

    return (
        <div className={c.container}>
            <CurrentPath />
            <MedicineList />
            <Research />
            <Specialists />
        </div>
    )
}

export default RecoveryMedicine