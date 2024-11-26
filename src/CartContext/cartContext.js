import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [perfumeDetails, setPerfumeDetails] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fragrancebackend-api.vercel.app/api/perfume/get-perfume"
        );
        setPerfumeDetails(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (existingProduct) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }
      return updatedCart;
    });
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const updateQuantity = (id, change) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === id);
      if (itemToRemove) {
        setTotal(
          (prevTotal) => prevTotal - itemToRemove.price * itemToRemove.quantity
        );
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        perfumeDetails,
        handleAddToCart,
        cartItems,
        updateQuantity,
        removeFromCart,
        calculateTotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
