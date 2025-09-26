import { useQuery } from '@tanstack/react-query';
import { fetchDoctor } from '../api/api';
import { DoctorResponse } from '../Interface/Doctor.interface';

export function useDoctor(id: string) {
  return useQuery<DoctorResponse>({
    queryKey: ['specialist', id],
    queryFn: () => fetchDoctor(id),
    enabled: !!id, // не запрашиваем пока id нет
    staleTime: 1000 * 60 * 5,
  });
}
