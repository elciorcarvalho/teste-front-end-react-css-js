import "normalize.css";
import React, { useState } from "react";
// Components
import Header from "components/Header";
import Main from "components/Main";
import Cart from "components/Cart";
// Styles
import styles from "./Home.module.scss";
// models
import drinks from "services/drinks.json";
import products from "services/products.json";
import ItemCart from "services/ItemCart";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

export default function Home() {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartCache")
      ? (JSON.parse(localStorage.getItem("cartCache") || "") as ItemCart[])
      : ([] as ItemCart[])
  );
  const [openCart, setOpenCart] = useState(false);

  function getTotalItems(items: ItemCart[]): number {
    return items.reduce((ack, item) => ack + item.amount, 0);
  }

  function handleAddToCart(addedItem: Product | Drink | ItemCart): void {
    setCartItems((cartItems) => {
      const isItemInCart = cartItems.find((item) => item.id === addedItem.id);

      if (isItemInCart) {
        const updateCart = cartItems.map((item) =>
          item.id === addedItem.id
            ? {
                ...item,
                amount: item.amount + 1,
                price: addedItem.promocaoDoDia ? item.price - (item.price * 0.2) : item.price,
              }
            : item
        );
        buildCache(updateCart);
        return updateCart;
      }

      const updateCart = [
        ...cartItems,
        {
          ...addedItem,
          amount: 1,
          price: addedItem.promocaoDoDia
            ? addedItem.price - addedItem.price * 0.2
            : addedItem.price,
        },
      ];
      buildCache(updateCart);

      return updateCart;
    });
  }

  function handleRemoveFromCart(id: string): void {
    setCartItems((cartItems) =>
      cartItems.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            const updateCart = ack;
            buildCache(updateCart);
            return updateCart;
          }
          const updateCart = [...ack, { ...item, amount: item.amount - 1 }];
          buildCache(updateCart);
          return updateCart;
        } else {
          const updateCart = [...ack, item];
          buildCache(updateCart);
          return updateCart;
        }
      }, [] as ItemCart[])
    );
  }

  function buildCache(cartItems: ItemCart[]): void {
    localStorage.clear();
    localStorage.setItem("cartCache", JSON.stringify(cartItems));
  }

  return (
    <div className={styles.home}>
      <Header
        cartItems={cartItems}
        totalItems={getTotalItems}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <Cart
        itemsCart={cartItems}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <Main handleAddToCart={handleAddToCart} />
    </div>
  );
}
