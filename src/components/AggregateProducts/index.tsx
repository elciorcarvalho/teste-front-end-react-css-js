import styles from "./AggregateProducts.module.scss";
import Itens from "./Itens";
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  handleAddToCart: (addedItem: Product | Drink) => void
}

export default function CarouselProducts({ handleAddToCart }: Props) {
  return (
    <section className={styles.section_drinks}>
      <div className={styles.section_drinks__header}>
        <h3 className={styles.section_drinks__title}>
          Destilados &amp; Drinks
        </h3>
        <a className={styles.section_drinks__link} href="#void">
          <p className={styles["section_drinks__link--text"]}>Ver todos</p>
        </a>
      </div>
      <Itens handleAddToCart={handleAddToCart} />
    </section>
  );
}
