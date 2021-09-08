import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const calculateMostExpensiveItem = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price > total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const mostExpensiveItem = useMemo(
    () => calculateMostExpensiveItem(products),
    [products]
  );

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => incrementCounter()}>
        click me
      </button>
      <h3 style={{ marginTop: "3rem" }}>
        Most expensive : ${mostExpensiveItem}
      </h3>
      <BigList products={products} />
    </>
  );
};

const BigList = ({ products }) => {
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
};

const SingleProduct = ({ fields }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  console.count("single item");

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;
