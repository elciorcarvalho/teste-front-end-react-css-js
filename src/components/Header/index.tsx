
// styles
import styles from "./Header.module.scss";
// components
import Logo from "components/Logo";
// services
import ItemCart from "services/ItemCart";

interface Props {

  cartItems: ItemCart[];
  totalItems: (items: ItemCart[]) => number;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  cartItems,
  totalItems,
  openCart,
  setOpenCart
}: Props) {
  return (
    <header className={styles.header}>
      <a href="#home">
        <Logo />
      </a>
      <div
        className={styles.header__cart}
        onClick={() => setOpenCart(!openCart)}
      >
        <span>pontos: </span>
        <span>{totalItems(cartItems)}</span>
      </div>
    </header>
  );
}
