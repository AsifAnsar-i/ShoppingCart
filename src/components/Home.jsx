import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);
  console.log(product);
  return (
    <div className="flex flex-wrap justify-evenly p-3">
      {loading ? (
        <p className="text-gray-600 text-6xl mt-28">Loading...</p>
      ) : (
        product.map((item) => <SingleProduct item={item} key={item.id} />)
      )}
    </div>
  );
};

export default Home;


