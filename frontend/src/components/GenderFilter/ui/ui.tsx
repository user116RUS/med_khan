import { useState } from 'react';
import c from './ui.module.scss';

interface GenderFilterProps {
  onFilterChange: (selectedGender: string) => void;
}

const GenderFilter = ({ onFilterChange }: GenderFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Все');

  const options = [
    { value: 'all', label: 'Все' },
    { value: 'male', label: 'Мужчина' },
    { value: 'female', label: 'Женщина' },
    { value: 'child', label: 'Ребёнок' }
  ];

  const handleSelect = (value: string, label: string) => {
    setSelectedGender(label);
    setIsOpen(false);
    onFilterChange(value);
  };

  return (
    <div className={c.filterContainer}>
      <div 
        className={c.filterDropdown}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedGender}</span>
        <img 
          src="/arrow-bottom.svg" 
          alt="" 
          className={`${c.arrow} ${isOpen ? c.arrowOpen : ''}`}
        />
      </div>
      
      {isOpen && (
        <div className={c.dropdownMenu}>
          {options.map((option) => (
            <div 
              key={option.value}
              className={c.option}
              onClick={() => handleSelect(option.value, option.label)}
            >
              <div className={`${c.checkbox} ${selectedGender === option.label ? c.checked : ''}`}>
                {selectedGender === option.label && (
                  <div className={c.checkmark}>✓</div>
                )}
              </div>
              <span className={`${c.label} ${selectedGender === option.label ? c.labelSelected : ''}`}>
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenderFilter;
