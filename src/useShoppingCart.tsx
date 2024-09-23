import { useState, useEffect, useCallback } from 'react';

const useShoppingCart = (initialItems = []) => {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating an API call to load initial cart data
    setTimeout(() => {
      setItems(initialItems);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [items]);

  const calculateTotal = () => {
    const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  const addItem = useCallback((newItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...newItem, quantity: 1 }];
    });
  }, []);

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(itemId);
    } else {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setItems([]);
  };

  return {
    items,
    total,
    isLoading,
    error,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
};

export default useShoppingCart;