export type Product = {
  id: string;
  name: string;
  category: string;
  minimumOrder: string;
  status: "Active" | "Draft";
};

export const products: Product[] = [
  {
    id: "1",
    name: "Plastic Bag",
    category: "Plastic",
    minimumOrder: "500 units",
    status: "Active",
  },
  {
    id: "2",
    name: "Paper Bag",
    category: "Paper",
    minimumOrder: "300 units",
    status: "Active",
  },
  {
    id: "3",
    name: "Luxury Gift Bag",
    category: "Luxury",
    minimumOrder: "100 units",
    status: "Draft",
  },
];

export type Customer = {
  id: string;
  name: string;
  email: string;
  company: string;
  status: "Active" | "Inactive";
};

export const customers: Customer[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana@bloomboutique.com",
    company: "Bloom Boutique",
    status: "Active",
  },
  {
    id: "2",
    name: "Carlos Mendes",
    email: "carlos@casaverde.com",
    company: "Casa Verde",
    status: "Active",
  },
  {
    id: "3",
    name: "Emily Carter",
    email: "emily@northcoffee.com",
    company: "North Coffee",
    status: "Inactive",
  },
];

export type Order = {
  id: string;
  customer: string;
  product: string;
  quantity: string;
  status: "Pending" | "In Production" | "Completed" | "Shipped";
  amount: string;
};

export const orders: Order[] = [
  {
    id: "1",
    customer: "Bloom Boutique",
    product: "Luxury Paper Bag",
    quantity: "1,000 units",
    status: "In Production",
    amount: "$980",
  },
  {
    id: "2",
    customer: "Casa Verde",
    product: "Eco Paper Bag",
    quantity: "500 units",
    status: "Pending",
    amount: "$420",
  },
  {
    id: "3",
    customer: "North Coffee",
    product: "Custom Plastic Bag",
    quantity: "2,000 units",
    status: "Completed",
    amount: "$1,250",
  },
  {
    id: "4",
    customer: "Luna Beauty",
    product: "Premium Gift Bag",
    quantity: "750 units",
    status: "Shipped",
    amount: "$760",
  },
];
