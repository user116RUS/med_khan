import c from './ui.module.scss';

import { FilterDoctors } from './FilteredDoctors';
import { useState } from 'react';

const SpecialistList = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ'.split('');
  return (
    <div className={c.container}>
      <div className={c.header}>
        <span className={c.title}>Команда специалистов</span>

        <div className={c.options}>
          <div className={c.wrapper}>
            Пол
            <img src="/arrow-bottom.svg" alt="" />
          </div>

          <div className={c.wrapper}>
            Специализация
            <img src="/arrow-bottom.svg" alt="" />
          </div>

          <div className={c.wrapper2}>
            <img src="/loop.svg" alt="" />
            <input
              placeholder="Поиск по названию услуги"
              onChange={(e) => setSearchTerm(e.target.value)}
              className={c.input}
            />
          </div>
        </div>
      </div>

      <div className={c.filters}>
        <div className={c.filter}>
          Уролог <img src="/x.svg" alt="x" />
        </div>

        <div className={c.alpha}>
          {alphabet.map((letter) => (
            <button
              key={letter}
              className={`${c.letterBtn} ${
                selectedLetter === letter ? c.active : ''
              }`}
              onClick={() =>
                setSelectedLetter(selectedLetter === letter ? null : letter)
              }
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div className={c.doctorList}>
        <FilterDoctors letter={selectedLetter ?? ''} />
      </div>
    </div>
  );
};

export default SpecialistList;
