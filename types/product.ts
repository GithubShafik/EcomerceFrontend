import { ReactNode } from "react";

export interface Product {
  productName: any;
  company: any;
  category: any;
  [x: number]: any;
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
}
