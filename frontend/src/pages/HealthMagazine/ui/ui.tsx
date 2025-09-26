import CurrentPath from '../../../components/CurrentPath/ui/ui';
import Health from '../../MainPage/components/Health/ui/ui';
import Banner from '../components/Banner/ui/ui';
import c from './ui.module.scss';

const HealthMagazine = () => {
  return (
    <div className={c.container}>
      <CurrentPath />
      <Health />
      <Banner />
    </div>
  );
};

export default HealthMagazine;
