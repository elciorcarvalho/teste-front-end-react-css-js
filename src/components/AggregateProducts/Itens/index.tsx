import styles from './Itens.module.scss';
import drinks from './drinks.json';
import Item from './Item';

export default function Itens() {
    return (
      <div className={styles.itens}>
        {drinks.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    );
}