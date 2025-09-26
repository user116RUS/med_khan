import axios from 'axios';
import { CheckUpResponse } from '../Interface/CheckUps.interface';
import { Doctor, DoctorResponse } from '../Interface/Doctor.interface';

export const fetchDoctors = async (): Promise<DoctorResponse> => {
  const res = await axios.get<DoctorResponse>('/api/v1/doctors/');
  return res.data;
};

export const fetchDoctor = async (id: string): Promise<DoctorResponse> => {
  const res = await axios.get<DoctorResponse>(`/api/specialists/${id}`);
  return res.data;
};

export const fetchCheckUps = async (): Promise<CheckUpResponse> => {
  const res = await axios.get<CheckUpResponse>('/api/v1/checkups/');
  return res.data;
};
