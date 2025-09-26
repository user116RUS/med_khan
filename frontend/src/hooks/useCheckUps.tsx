import { useQuery } from '@tanstack/react-query';
import { fetchCheckUps } from '../api/api';
import { CheckUpResponse } from '../Interface/CheckUps.interface';

export function useCheckUps() {
  return useQuery<CheckUpResponse>({
    queryKey: ['checkups'],
    queryFn: fetchCheckUps,
    staleTime: 1000 * 60,
  });
}
