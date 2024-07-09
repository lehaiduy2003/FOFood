export type User = {
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  image?: string;
  address?: string;
  role: "admin" | "user" | "guest" | "restaurantOwner";
  status?: boolean;
};
