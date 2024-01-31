import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <div className="flex flex-wrap justify-evenly p-3">
      {product.slice(1, 46).map((item) => (
        <SingleProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Home;
