import React, { useState } from "react";

const ProductBox = () => {
  const [products] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const handleAddProduct = (product) => {
    setSelectedProducts((prevSelected) => [...prevSelected, product]);
    setTotal((prevTotal) => prevTotal + product.price);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button
            onClick={() => handleAddProduct(product)}
            style={{ marginLeft: "10px" }}
          >
            Add
          </button>
        </div>
      ))}
      <hr />
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default ProductBox;
