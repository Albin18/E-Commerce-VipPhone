import { Product } from "../models/product";

export const productJSON : Product[] = [

  {
    id: "producto-01",
    title: "Tablet",
    imagen: "/assets/image/Producto1.jpeg",
    categoria: {
      tipo: "tablet",
      id: "tablets"
    },
    price: 54.99
  },
  {
    id:"producto-02",
    title:"TelefonoTomi",
    imagen: "/assets/image/Producto2.jpeg",
    categoria:{
      tipo:"telefono",
      id: "telefonos"
    },
    price:152.99
  },
  {
    id: "producto-03",
    title: "TelefonoRen",
    imagen: "/assets/image/Producto3.jpeg",
    categoria: {
      tipo: "Telefono",
      id: "Tablets"
    },
    price: 54.99
  },
  {
    id: "producto-04",
    title: "TelefonoVip",
    imagen: "/assets/image/Producto4.jpeg",
    categoria: {
      tipo: "Telefono",
      id: "Tablets"
    },
    price: 54.99
  },
  {
    id: "producto-05",
    title: "TelefonoGame",
    imagen: "/assets/image/Producto5.jpeg",
    categoria: {
      tipo: "Telefono",
      id: "Tablets"
    },
    price: 54.99
  },

]
