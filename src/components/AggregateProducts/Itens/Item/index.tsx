import styles from "./Item.module.scss";
import drinks from "../drinks.json";
import ButtonAdd from "components/ButtonAdd";

type Props = typeof drinks[0];

export default function Item(item: Props) {
  const { title, price, detail, image } = item;

  return (
    <div className={styles.item}>
      <div
        className={styles.item__image}
        style={{
          backgroundImage: `url('${image.src}')`,
        }}
      >
        <ButtonAdd isPrimary={false} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__price}>R$ {price.toFixed(2)}</div>
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
