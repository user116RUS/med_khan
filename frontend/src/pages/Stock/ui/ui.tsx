import { useState } from 'react';
import CurrentPath from '../../../components/CurrentPath/ui/ui';
import Form from '../components/Form/ui/ui';
import GenderFilter from '../../../components/GenderFilter/ui/ui';
import c from './ui.module.scss';
import { CheckUpCard } from '../../MainPage/components/Stock/ui/CheckUpCard';

const Stock = () => {
  const [selectedGender, setSelectedGender] = useState('all');

  const handleGenderFilterChange = (gender: string) => {
    setSelectedGender(gender);
    // Здесь можно добавить логику фильтрации карточек
    console.log('Selected gender:', gender);
  };

  return (
    <div className={c.container}>
      <CurrentPath />
      
      <div className={c.content}>
        <div className={c.header}>
          <h1 className={c.title}>Акции</h1>
          
          <div className={c.filters}>
            <div className={c.filterGroup}>
              <span className={c.filterLabel}>Пол</span>
              <GenderFilter onFilterChange={handleGenderFilterChange} />
            </div>
          </div>
        </div>
        
        <CheckUpCard selectedGender={selectedGender} />
        
        <div className={c.loadMore}>
          <button className={c.loadMoreButton}>Показать ещё</button>
        </div>
      </div>
      
      <Form />
    </div>
  );
};

export default Stock;
