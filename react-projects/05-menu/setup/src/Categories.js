import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((cat, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
