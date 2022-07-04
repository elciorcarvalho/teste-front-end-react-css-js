import styles from './Itens.module.scss';
import Item from './Item';
// models
import products from "services/products.json";
import drinks from "services/drinks.json";
// type
type Product = typeof products[0];
type Drink = typeof drinks[0];

interface Props {
  handleAddToCart: (addedItem: Product | Drink) => void;
}

export default function Itens({ handleAddToCart }: Props) {
  return (
    <div className={styles.itens}>
      {drinks.map((item) => (
        <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}