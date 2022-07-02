import { IoStar } from "react-icons/io5";

import ButtonAdd from "components/ButtonAdd";
import styles from "./Card.module.scss";
import menu from "../products.json";

type Props = typeof menu[0];

export default function Card(prod: Props) {
  const { title, rating, ingredients, price, promocaoDoDia, image } = prod;

  return (
    <div className={styles.card}>
      <div
        style={{
          backgroundImage: `url('${image.src}')`,
        }}
        className={styles.card__image}
      ></div>
      <div className={styles.card__description}>
        <div className={styles.card__rating}>
          <IoStar className={styles["card__rating--icon"]} />
          {rating.toString()}
        </div>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__ingredients}>
          {ingredients.substring(0, 50) + "..."}
        </div>
        <div className={styles.card__shop}>
          <div className={styles.card__price}>R$ {price.toFixed(2)}</div>
          <ButtonAdd isPrimary={true} />
        </div>
      </div>
    </div>
  );
}
