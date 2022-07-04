import classNames from "classnames";
import { IoAdd } from "react-icons/io5";
import styles from "./ButtonAdd.module.scss";
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  isPrimary: boolean;
  item: Product | Drink;
  handleAddToCart: (addedItem: Product | Drink) => void;
}

export default function ButtonAdd({ isPrimary, item, handleAddToCart }: Props) {
  const Primary = isPrimary;
  const promocao = item.promocaoDoDia;

  return (
    <div
      className={classNames({
        [styles.btnAdd]: true,
        [styles["btnAdd--secondary"]]: !promocao && !Primary,
        [styles["btnAdd--promo"]]: promocao,
      })}
      onClick={() => handleAddToCart(item)}
    >
      <IoAdd
        className={classNames({
          [styles.btnAdd__icon]: true,
          [styles["btnAdd__icon--secondary"]]: !promocao && !Primary,
          [styles["btnAdd__icon--promo"]]: promocao,
        })}
      />
    </div>
  );
}
