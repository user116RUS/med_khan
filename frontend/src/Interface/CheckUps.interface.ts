export interface CheckUp {
  id: number;
  name: string;
  description: string;
  original_price: number;
  discounted_price: number;
  gender: string;
  checkup_type: string;
  expired_at: string;
  discount_percentage: number;
}
export interface CheckUpResponse {
  data: CheckUp[];
  pagination: {
    total: number;
  };
}
