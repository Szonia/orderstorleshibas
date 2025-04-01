export interface User {
  id: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  createdAt: Date;  // Ha biztos vagy benne, hogy Date objektumot használsz
  status: string;
}
