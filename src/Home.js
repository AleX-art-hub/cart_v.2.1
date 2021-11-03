import React from "react";
import Itemcard from "./Itemcard.js";
import productData from "./data";

const Home = () => {
  return (
    <>
      <h1 className="text-center mt-3">Все товары</h1>
      <selection className="py-4 container">
        <div className="row justify-content-center">
          {productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </selection>
    </>
  );
};

export default Home;
