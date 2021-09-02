import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  const url = image && image.url;

  return (
    <article className='product'>
      <h4>{name}</h4>
      <img src={url || defaultImage} alt={name} />
      <p>{price}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default name",
  image: defaultImage,
  price: 100.0,
};

export default Product;
