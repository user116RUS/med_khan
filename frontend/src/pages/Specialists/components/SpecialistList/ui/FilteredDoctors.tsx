import { useDoctors } from '../../../../../hooks/useDoctors';
import c from './ui.module.scss';
import { Link } from 'react-router';
import { AllDoctors } from './AllDoctors';
export const FilterDoctors = ({ letter }: { letter: string }) => {
  const { data, isLoading, error } = useDoctors();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading doctors</div>;
  if (!data?.data?.length) return <div>No doctors found</div>;
  return (
    <>
      {letter ? (
        data.data
          .filter((d) => d.full_name.startsWith(letter))
          .map((d) => (
            <div key={d.id} className={c.doctorCard}>
              <div className={c.doctorPhoto}>
                <Link to={`/specialist-page/${d.id}`}>
                  <img src={d.image_url} alt={d.full_name} />
                </Link>
                <p className={c.doctorExperience}>
                  Стаж {d.work_experience} лет
                </p>
              </div>

              <div className={c.doctorInfo}>
                <div className={c.textInfo}>
                  <h3 className={c.doctorName}>{d.full_name}</h3>
                  <p className={c.doctorSpecialization}>
                    {d.profile_treatment}
                  </p>
                </div>
                <div className={c.btnWrapper}>
                  <button
                    onClick={() => window.open(d.online_booking_link, '_blank')}
                    className={c.doctorBtn}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          ))
      ) : (
        <AllDoctors />
      )}
    </>
  );
};
