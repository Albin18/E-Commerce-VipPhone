import { Product } from "../models/product";

export const productJSON : Product[] = [

  {
    id: "producto-01",
    title: "Tablet",
    imagen: "/assets/image/Producto1.jpeg",
    categoria: {
      tipo: "tablet",

    },
    price: 54
  },
  {
    id:"producto-02",
    title:"TelefonoTomi",
    imagen: "/assets/image/Producto2.jpeg",
    categoria:{
      tipo:"telefono",

    },
    price:152.99
  },
  {
    id: "producto-03",
    title: "TelefonoRen",
    imagen: "/assets/image/Producto3.jpeg",
    categoria: {
      tipo: "Telefono",

    },
    price: 75
  },
  {
    id: "producto-04",
    title: "TelefonoVip",
    imagen: "/assets/image/Producto4.jpeg",
    categoria: {
      tipo: "Telefono",

    },
    price: 99
  },
  {
    id: "producto-05",
    title: "TelefonoGame",
    imagen: "/assets/image/Producto5.jpeg",
    categoria: {
      tipo: "Telefono",

    },
    price: 129
  },
  {
    id: "producto-06",
    title: "TelefonoGame",
    imagen: "/assets/image/Producto6.jpeg",
    categoria: {
      tipo: "Telefono",

    },
    price: 210
  },
]
