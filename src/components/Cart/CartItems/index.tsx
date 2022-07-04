// Styles
import styles from "./CartItems.module.scss";
import { IoRemove, IoAdd } from "react-icons/io5";
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
import ItemCart from "services/ItemCart";
import classNames from "classnames";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  item: ItemCart;
  addToCart: (addedItem: Product | Drink | ItemCart) => void;
  removeFromCart: (id: string) => void;
}

export default function CartItems({item, addToCart, removeFromCart}: Props) {
  return (
    <div className={styles.cartItem}>
      <div
        className={styles.cartItem__image}
        style={{
          backgroundImage: `url('${item.image.src}')`,
        }}
      ></div>
      <article className={styles.cartItem__info}>
        <h2 className={styles.cartItem__title}>{item.title}</h2>
        <h3 className={styles.cartItem__price}>
          <div className={styles["cartItem__price--value"]}>
            Preço: R$ {item.price.toFixed(2)}
          </div>
          <div className={styles["cartItem__price--total"]}>
            Total: R$ {(item.price * item.amount).toFixed(2)}
          </div>
        </h3>
        <div className={styles.cartItem__amount}>
          <h3 className={styles["cartItem__amount--title"]}>Quantidade:</h3>
          <button
            className={classNames(
              styles.cartItem__btn,
              styles["cartItem__btn--remove"]
            )}
            onClick={() => removeFromCart(item.id)}
          >
            <IoRemove className={styles["cartItem__btn--icon"]} />
          </button>
          <div className={styles["cartItem__amount--value"]}>{item.amount}</div>
          <button
            className={classNames(
              styles.cartItem__btn,
              styles["cartItem__btn--add"]
            )}
            onClick={() => addToCart(item)}
          >
            <IoAdd className={styles["cartItem__btn--icon"]} />
          </button>
        </div>
      </article>
    </div>
  );
}
