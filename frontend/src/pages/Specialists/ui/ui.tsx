import CurrentPath from '../../../components/CurrentPath/ui/ui';
import SpecialistList from '../components/SpecialistList/ui/ui';
import c from './ui.module.scss';

const Specialists = () => {
  return (
    <div className={c.container}>
      <CurrentPath />
      <SpecialistList />
    </div>
  );
};

export default Specialists;
