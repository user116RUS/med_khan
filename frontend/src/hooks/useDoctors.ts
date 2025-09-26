import { useQuery } from '@tanstack/react-query';
import { fetchDoctors } from '../api/api';
import { DoctorResponse } from '../Interface/Doctor.interface';

export function useDoctors() {
  return useQuery<DoctorResponse>({
    queryKey: ['doctors'],
    queryFn: fetchDoctors,
    staleTime: 1000 * 60,
  });
}
