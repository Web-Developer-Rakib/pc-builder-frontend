export const baseURL = `${process.env.NEXT_APP_BASE_URL}`;
type ProductStatus = "In stock" | "Out of stock";

interface IReview {
  userName: string;
  rating: number;
  reviewText: string;
}

export interface IProduct {
  _id: string;
  image: string;
  productName: string;
  category: string;
  status: ProductStatus;
  price: number;
  description: string;
  keyFeatures: {
    brand: string;
    model: string;
    specification: string;
    port: string;
    type: string;
    resolution: string;
    voltage: string;
    [key: string]: string;
  };
  individualRating: number;
  averageRating: number;
  reviews: IReview[];
}
export interface IProductPageProps {
  product: IProduct;
}
