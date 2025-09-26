import { useParams } from 'react-router';
import c from './SpecialistPage.module.scss';
import { useDoctor } from '../../hooks/useDoctor';

export const DoctorPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useDoctor(id!);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading doctor</div>;
  if (!data) return <div>No doctor found</div>;
  console.log(data);
  return (
    <>
      <div></div>
    </>
  );
};
