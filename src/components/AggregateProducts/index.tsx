import styles from "./AggregateProducts.module.scss";
import Itens from "./Itens";

export default function CarouselProducts() {
  return (
    <section className={styles.section_drinks}>
      <div className={styles.section_drinks__header}>
        <h3 className={styles.section_drinks__title}>
          Destilados &amp; Drinks
        </h3>
        <a
          className={styles.section_drinks__link}
          href="#void"
        >
          <p className={styles["section_drinks__link--text"]}>Ver todos</p>
        </a>
      </div>
      <Itens />
    </section>
  );
}
