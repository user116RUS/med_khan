import { Route, Routes } from 'react-router';
import MainPage from '../../../pages/MainPage/ui/ui';
import Services from '../../../pages/Services/ui/ui';
import RecoveryMedicine from '../../../pages/RecoveryMedicine/ui/ui';
import HealthMagazine from '../../../pages/HealthMagazine/ui/ui';
import Stock from '../../../pages/Stock/ui/ui';
import StockDetail from '../../../pages/StockDetail/ui/ui';
import Specialists from '../../../pages/Specialists/ui/ui';
import Сosmetology from '../../../pages/Сosmetology/ui/ui';
import { DoctorPage } from '../../../pages/SpecialistPage/DoctorPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/specialist-page/:id" element={<DoctorPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/stock/:id" element={<StockDetail />} />
      <Route path="/specialists" element={<Specialists />} />
      <Route path="/health-magazine" element={<HealthMagazine />} />
      <Route
        path="/services/recovery-medicine"
        element={<RecoveryMedicine />}
      />
      <Route
        path="/services/recovery-medicine/cosmetology"
        element={<Сosmetology />}
      />
    </Routes>
  );
};

export default Router;
