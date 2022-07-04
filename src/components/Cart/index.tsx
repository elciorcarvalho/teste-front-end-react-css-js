import CartItems from './CartItems';
// Styles
import styles from './Cart.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
// Models
import products from "services/products.json";
import drinks from "services/drinks.json";
import ItemCart from 'services/ItemCart';
import classNames from 'classnames';
// Type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  itemsCart: ItemCart[];
  addToCart: (addedItem: Product | Drink | ItemCart) => void;
  removeFromCart: (id: string) => void;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Cart({ itemsCart, addToCart, removeFromCart, openCart, setOpenCart }: Props) {
  function calculateTotal(itemsCart: ItemCart[]) {
    return itemsCart.reduce((ack: number, item) => (ack + item.amount * item.price), 0)
  }

  return (
    <aside className={classNames({
      [styles.cart]: true,
      [styles["cart--opened"]]: openCart
    })}>
      <IoCloseOutline className={styles.cart__close} onClick={() => (setOpenCart(!openCart))} />
      <h2 className={styles.cart__title}>Carrinho de compras</h2>
      {itemsCart.length === 0 ? <p>Não existem produtos no carrinho.</p> : null}
      {itemsCart.map((item) => (
        <CartItems
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3 className={styles.cart__total}>
        Total: R$
        {" " + calculateTotal(itemsCart).toFixed(2)}
      </h3>
    </aside>
  );
}
