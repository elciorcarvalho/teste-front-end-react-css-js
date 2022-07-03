import { IoArrowForward } from "react-icons/io5";
import styles from "./MainProducts.module.scss";

import menu from "./products.json";
import Card from "./Card";

export default function MainProducts() {
  return (
    <article className={styles.article_pizzas}>
      <div className={styles.article_pizzas__header}>
        <h2 className={styles.article_pizzas__title}>Recheios</h2>
        <a href="#home" className={styles.article_pizzas__link}>
          Escolha a massa <IoArrowForward />
        </a>
      </div>
      <section className={styles.article_pizzas__wrapper}>
        {menu.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
    </article>
  );
}
