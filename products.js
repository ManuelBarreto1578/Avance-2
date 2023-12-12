const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "Big Mac",
    price: 6.90,
    image: "Aseets/images/BigMac.jpg",
    stock: 50,
  },
  {
    id: 2,
    name: "Doble Cuarto de libra con queso",
    price: 7.90,
    image: "Aseets/images/DobleCuarto.jpg",
    stock: 50,
  },
  {
    id: 3,
    name: "McNuggets 6 Unidades",
    price: 5.90,
    image: "Aseets/images/mcnuggets.jpg",
    stock: 50,
  },
  {
    id: 4,
    name: "McFlurry Oreo",
    price: 4.90,
    image: "Aseets/images/McFlurry Oreo.png",
    stock: 50,
  },
  {
    id: 5,
    name: "Pollo Crujiente 3 piezas",
    price: 9.90,
    image: "Aseets/images/PolloCrujiente3Piezas.jpg",
    stock: 50,
  },
  {
    id: 6,
    name: "Coca-Cola 12oz",
    price: 3.90,
    image: "Aseets/images/Coca-Cola 12oz.jpg",
    stock: 50,
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.use("/", express.static("fe"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
