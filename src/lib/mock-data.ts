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
