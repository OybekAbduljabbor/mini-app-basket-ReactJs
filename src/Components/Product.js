import React, { useState, useEffect } from "react";
import "../Assets/Css/Product.css";
import { Ops } from "./Ops";

export function Product({ Data, setPrice, search }) {
  const [data, setData] = useState(Data);

  const filtered = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    let total = 0;
    data.map((item) => {
      let x = item.x === 0 ? 0 : item.x;
      return (total += item.price * x);
    });
    setPrice(total);
  }, [data, setPrice]);

  function hendelDecrement(id) {
    const MyData = [...Data];
    MyData.map((item) => {
      if (item.id === id) {
        item.x = item.x <= 1 ? 0 : item.x - 1;
      }
      return setData(MyData);
    });
  }

  function hendelIncrement(id) {
    const MyData = [...Data];
    MyData.map((item) => {
      if (item.id === id) {
        item.x += 1;
      }
      return setData(MyData);
    });
  }
  return (
    <div>
      {filtered.length === 0 ? (
        <Ops />
      ) : (
        filtered.map((item, index) => {
          return (
            <div id="product" key={index}>
              <figure>
                <img src={item.img} alt="" />
              </figure>

              <div id="product-info">
                <h1>{item.name}</h1>
                <h2>
                  Price{" "}
                  <span>
                    ${+item.x === 0 ? +item.price : +item.price * item.x}
                  </span>
                </h2>
                <div id="product-inc-dec">
                  <button onClick={hendelDecrement.bind(this, item.id)}>
                    -
                  </button>
                  <p>{item.x}</p>
                  <button onClick={hendelIncrement.bind(this, item.id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
