export interface Doctor {
  id: string;
  full_name: string;
  experience_years: number;
  consultation_cost: number;
  category: string;
  profile_treatment: string;
  work_experience: string;
  education: string;
  image_url: string;
  online_booking_link: string;
}
export interface DoctorResponse {
  data: Doctor[];
  pagination: {
    total: number;
  };
}
