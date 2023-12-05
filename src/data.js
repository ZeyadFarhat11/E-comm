import product1 from "./assets/img/products/product-1.png";
import product2 from "./assets/img/products/product-2.png";
import product3 from "./assets/img/products/product-3.png";
import product4 from "./assets/img/products/product-4.png";
import product5 from "./assets/img/products/product-5.png";
import product6 from "./assets/img/products/product-6.png";
import product7 from "./assets/img/products/product-7.png";
import product8 from "./assets/img/products/product-8.png";
import product9 from "./assets/img/products/product-9.png";

export const products = [
  {
    id: 1,
    title: "Nike Air Max 270 React",
    rating: 3.6,
    price: 245,
    img: product1,
    imgs: [product6, product4, product5],
    discount: 15,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    label: "HOT",
    reviews: [],
    reviewsCount: 3,
    description:
      "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.\nair max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.\nair max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
    active: true,
  },
  {
    id: 2,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product2,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
  {
    id: 3,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product3,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
  {
    id: 4,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product4,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
  {
    id: 5,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product5,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
  {
    id: 6,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product6,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
  {
    id: 7,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product7,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
  {
    id: 8,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product8,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
  {
    id: 9,
    title: "Nike Air Max 270 React",
    rating: 4.5,
    price: 324.69,
    img: product9,
    discount: 30,
    brand: "Nike",
    category: "Shoes",
    freeShipping: false,
    colors: ["red", "green", "blue"],
    sizes: ["SM", "MD", "LG"],
    available: 25,
    reviews: [],
    description: "Greet Product",
    active: true,
  },
];

export const addresses = [
  {
    id: 1,
    firstName: "Zeyad",
    lastName: "Farhat",
    phone: "01091815750",
    email: "zeyad@gmail.com",
    address1: "Damitta - Snania",
    address2: "",
    zipCode: "794811",
    defaultAddress: true,
  },
  {
    id: 2,
    firstName: "Mahmoud",
    lastName: "Oraby",
    phone: "01089895467",
    email: "mahmoud@gmail.com",
    address1: "Damitta - 3nania - 4564",
    zipCode: "794811",
    address2: "",
  },
];

export const orders = [
  {
    id: 1,
    address: {
      firstName: "zeyad",
      lastName: "Farhat",
      email: "zeyad@gmail.com",
      address1: "Damitta - Snania",
    },
    date: "2023/08/22 - 06:32",
    status: "pending", // pending || processing || shipped || delivered || canceled,
    products: [
      {
        id: 124,
        title: "Adidas New Hope",
        quantity: 2,
        price: "280.00",
        image:
          "http://127.0.0.1:8000/media/uploads/images_product/11_NPkZXEE.png",
      },
      {
        id: 135,
        title: "Nike Hermanoi",
        quantity: 1,
        price: "360.00",
        image:
          "http://127.0.0.1:8000/media/uploads/images_product/3_SydcW7F.png",
      },
    ],
    total_cost: "920.00",
    payment: {
      type: "Visa", // Visa || Creditcard
      name: "ZEYAD ROSHDY FARHAT",
      lastDigits: "2546",
    },
  },
  {
    id: 2,
    address: {
      firstName: "Zeyad",
      lastName: "Farhat",
      email: "zeyad@gmail.com",
      address1: "Damitta - Snania",
    },
    date: "2023/08/21 - 04:39",
    status: "shipped", // pending || processing || shipped || delivered || canceled,
    products: [
      {
        id: 135,
        title: "Nike Hermanoi",
        quantity: 1,
        price: "360.00",
        image:
          "http://127.0.0.1:8000/media/uploads/images_product/3_SydcW7F.png",
      },
      {
        id: 124,
        title: "Adidas New Hope",
        quantity: 2,
        price: "280.00",
        image:
          "http://127.0.0.1:8000/media/uploads/images_product/11_NPkZXEE.png",
      },
    ],
    total_cost: "920.00",
    payment: {
      type: "Creditcard", // Visa || Creditcard
      name: "ZEYAD ROSHDY FARHAT",
      lastDigits: "9487",
    },
  },
];
