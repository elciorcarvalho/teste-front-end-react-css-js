import { IoStar } from "react-icons/io5";

import ButtonAdd from "components/ButtonAdd";
import styles from "./Card.module.scss";
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
import classNames from "classnames";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];
interface Props {
  handleAddToCart: (addedItem: Product | Drink) => void;
  item: Product;
}

export default function Card({ handleAddToCart, item }: Props) {
  const { title, rating, detail, price, promocaoDoDia, image } = item;

  return (
    <div
      className={classNames({
        [styles.card]: true,
        [styles.card__promoStyle]: promocaoDoDia,
      })}
    >
      <div
        style={{
          backgroundImage: `url('${image.src}')`,
        }}
        className={styles.card__image}
      ></div>
      <div className={styles.card__description}>
        {promocaoDoDia && <div className={styles.card__promoTag}>-20%</div>}
        <div className={styles.card__rating}>
          <IoStar className={styles["card__rating--icon"]} />
          {rating.toString()}
        </div>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__ingredients}>
          {detail.substring(0, 50) + "..."}
        </div>
        <div className={styles.card__shop}>
          <div className={styles.card__price}>
            {promocaoDoDia ? (
              <>
                <span className={styles["card__price--promo"]}>
                  R$ {price.toFixed(2)}
                </span>
                <span>R$ {(price - price * 0.2).toFixed(2)}</span>
              </>
            ) : (
              <>
                <span>R$ {price.toFixed(2)}</span>
              </>
            )}
          </div>
          <ButtonAdd
            isPrimary={true}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}
