import { IoArrowForward } from "react-icons/io5";
import styles from "./MainProducts.module.scss";

import menu from './products.json';
import Card from './Card';

export default function MainProducts() {
  return (
    <section className={styles.section_pizzas}>
      <div className={styles.section_pizzas__header}>
        <h2 className={styles.section_pizzas__title}>Recheios</h2>
        <p className={styles.section_pizzas__link}>
          Escolha a massa <IoArrowForward />
        </p>
      </div>
      {menu.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </section>
  );
}
