// data.ts
import { todos } from "@/components/TodoList";

// Define TypeScript interfaces
export interface ProductItem {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: { [key: string]: string };
}

export interface TransactionItem {
  id: number;
  title: string;
  badge: string;
  image: string;
  count: number;
}

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  views: number;
}

// Popular Products data
export const popularProducts: ProductItem[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 29.9,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: { white: "/products/4w.png", pink: "/products/4p.png" },
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 49.9,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: { gray: "/products/6g.png", white: "/products/6w.png" },
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: { gray: "/products/7g.png", pink: "/products/7p.png" },
  },
  {
    id: 8,
    name: "Levi's Classic Denim",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: { blue: "/products/8b.png", green: "/products/8gr.png" },
  },
];

// Latest Transactions data
export const latestTransactions: TransactionItem[] = [
  {
    id: 1,
    title: "Order Payment",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Order Payment",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Order Payment",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Order Payment",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Order Payment",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

// Popular Content data (new addition)
export const popularContent: ContentItem[] = [
  {
    id: 1,
    title: "React Performance Optimization",
    description: "Learn advanced techniques for optimizing React applications.",
    image:
      "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 12500,
  },
  {
    id: 2,
    title: "Next.js 14 New Features",
    description: "Explore the latest features and improvements in Next.js 14.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 9800,
  },
  {
    id: 3,
    title: "TypeScript Best Practices",
    description:
      "Essential TypeScript patterns and best practices for modern development.",
    image:
      "https://images.pexels.com/photos/3559480/pexels-photo-3559480.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 15600,
  },
  {
    id: 4,
    title: "Tailwind CSS Advanced",
    description: "Master advanced Tailwind CSS techniques and customizations.",
    image:
      "https://images.pexels.com/photos/1630368/pexels-photo-1630368.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 8700,
  },
  {
    id: 5,
    title: "State Management in React",
    description: "Comprehensive guide to state management solutions in React.",
    image:
      "https://images.pexels.com/photos/3184417/pexels-photo-3184417.jpeg?auto=compress&cs=tinysrgb&w=800",
    views: 20400,
  },
];

// Todo Items data
export const todoItems: todos[] = [
  { id: "item1", text: "Finish project report" },
  { id: "item2", text: "Prepare for meeting with client" },
  { id: "item3", text: "Review pull requests" },
  { id: "item4", text: "Plan team workshop" },
  { id: "item5", text: "Refactor old components" },
  { id: "item6", text: "Organize design assets" },
  { id: "item7", text: "Update documentation" },
  { id: "item8", text: "Fix bugs in dashboard" },
];
