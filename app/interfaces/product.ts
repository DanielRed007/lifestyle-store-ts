export interface IProduct {
  _id: string;
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
