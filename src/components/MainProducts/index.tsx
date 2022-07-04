import { IoArrowForward } from "react-icons/io5";
import styles from "./MainProducts.module.scss";

import Card from "./Card";
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  handleAddToCart: (addedItem: Product | Drink) => void;
}

export default function MainProducts({ handleAddToCart }: Props) {
  return (
    <article className={styles.article_pizzas}>
      <div className={styles.article_pizzas__header}>
        <h2 className={styles.article_pizzas__title}>Recheios</h2>
        <a href="#home" className={styles.article_pizzas__link}>
          Escolha a massa <IoArrowForward />
        </a>
      </div>
      <section className={styles.article_pizzas__wrapper}>
        {products.map((item) => (
          <Card
            key={item.id}
            handleAddToCart={handleAddToCart}
            item= {item}
          />
        ))}
      </section>
    </article>
  );
}
