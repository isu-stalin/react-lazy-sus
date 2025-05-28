import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Products from "../../components/products/Products";

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div id="home">
      <h2>Home</h2>
      <Products data={data?.products}/>
    </div>
  );
};

export default Home;
