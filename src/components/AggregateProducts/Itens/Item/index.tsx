import styles from "./Item.module.scss";
import ButtonAdd from "components/ButtonAdd";
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
import classNames from "classnames";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  item: Drink;
  handleAddToCart: (addedItem: Product | Drink) => void;
}

export default function Item({ item, handleAddToCart }: Props) {
  const { title, price, detail, image, promocaoDoDia } = item;

  return (
    <div className={styles.item}>
      <div
        className={classNames([
          {
            [styles.item__image]: true,
            [styles["item__image--promo"]]: promocaoDoDia,
          },
        ])}
        style={{
          backgroundImage: `url('${image.src}')`,
        }}
      >
        {promocaoDoDia && <div className={styles.item__promoTag}>-20%</div>}
        <ButtonAdd
          isPrimary={false}
          item={item}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__price}>
          {promocaoDoDia ? (
            <>
              <span className={styles["item__price--promo"]}>
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
        <div className={styles.item__title}>
          {title.length > 30 ? title.substring(0, 30) + "..." : title}
        </div>
        <div className={styles.item__details}>
          {detail.length > 26 ? detail.substring(0, 26) + "..." : detail}
        </div>
      </div>
    </div>
  );
}
