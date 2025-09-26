export interface Sale {
  id: number;
  name: string;
  description: string;
  original_price: number;
  discounted_price: number;
  gender: 'men' | 'women' | 'general';
  sale_type: 'main' | 'secondary' | 'third';
  expired_at: string;
  discount_percentage: number;
  image?: string;
}

export interface SaleResponse {
  data: Sale[];
  pagination: {
    total: number;
  };
}
