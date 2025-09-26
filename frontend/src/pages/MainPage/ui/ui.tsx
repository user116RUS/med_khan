import Center from '../components/Center/ui/ui';
import Health from '../components/Health/ui/ui';
import Main from '../components/Main/ui/ui';
import Media from '../components/Media/ui/ui';
import News from '../components/News/ui/ui';
import Reviews from '../components/Reviews/ui/ui';
import Services from '../components/Services/ui/ui';
import Specialists from '../components/Specialists/ui/ui';
import Stock from '../components/Stock/ui/ui';
import c from './ui.module.scss';

const MainPage = () => {
  return (
    <div className={c.container}>
      <Main />
      <Services />
      <Stock />
      <Specialists />
      <Center />
      <Reviews />
      <News />
      <Media />
      <Health />
    </div>
  );
};

export default MainPage;
