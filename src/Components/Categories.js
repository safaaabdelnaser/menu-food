import React from "react";

const Categories = ({ filterCategories, categories }) => {
  return (
    <>
      <div className="btn-container">
       
        {categories.map((cat,index) => {
          return (
            <button
              className="btn filter-btn"
              key={index}
              onClick={() => filterCategories(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
