export interface User {
  [key: string]: any; // Optional, allows flexible access
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  created_on: string;

  city: string;
}
