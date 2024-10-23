export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discountPercentage: number;
  taxes: number;
  quantity: number;
  imageUrl: string;
}
