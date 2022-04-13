import React, { useState } from "react";
import "./Assets/Css/App.css";
import { Product } from "./Components/Product";
import NumberFormat from "react-number-format";

import uzum from "./Assets/Images/uzum.jfif";
import anor from "./Assets/Images/anor.jfif";
import gilos from "./Assets/Images/gilos.jpg";
import nok from "./Assets/Images/nok.jpeg";
import olma from "./Assets/Images/olma.jpg";
import orik from "./Assets/Images/orik.jpg";
import shaftoli from "./Assets/Images/shaftoli.jpg";
import banan from "./Assets/Images/banan.jpg";
import limon from "./Assets/Images/limon.jpg";
import malina from "./Assets/Images/malina.jpg";
import mandarin from "./Assets/Images/mandarin.jpg";
import smarodina from "./Assets/Images/smarodina.png";
import xurmo from "./Assets/Images/xurmo.jfif";
import anjir from "./Assets/Images/Anjir.jpg";
import bexi from "./Assets/Images/bexi.jpg";

const Data = [
  { id: 1, name: "Uzum", price: 6, img: uzum, x: 0 },
  { id: 2, name: "Anor", price: 20, img: anor, x: 0 },
  { id: 3, name: "Gilos", price: 9, img: gilos, x: 0 },
  { id: 4, name: "Nok", price: 17, img: nok, x: 0 },
  { id: 5, name: "Olma", price: 4, img: olma, x: 0 },
  { id: 6, name: "O'rik", price: 7, img: orik, x: 0 },
  { id: 7, name: "Shaftoli", price: 7, img: shaftoli, x: 0 },
  { id: 8, name: "banan", price: 16, img: banan, x: 0 },
  { id: 9, name: "limon", price: 13, img: limon, x: 0 },
  { id: 10, name: "malina", price: 21, img: malina, x: 0 },
  { id: 11, name: "mandarin", price: 14, img: mandarin, x: 0 },
  { id: 12, name: "smarodina", price: 16, img: smarodina, x: 0 },
  { id: 13, name: "xurmo", price: 11, img: xurmo, x: 0 },
  { id: 14, name: "Anjir", price: 10, img: anjir, x: 0 },
  { id: 15, name: "Bexi", price: 10, img: bexi, x: 0 },
];

function App() {
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  return (
    <div id="App">
      <input
        id="search"
        type="text"
        placeholder="Shaftoli..."
        autoComplete="off"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div id="contener-products">
        <Product Data={Data} setPrice={setPrice} search={search} />
      </div>
      <NumberFormat
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        value={price}
        id="price-format"
      />
    </div>
  );
}

export default App;
