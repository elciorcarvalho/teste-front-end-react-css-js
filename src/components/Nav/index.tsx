import { useState } from "react";
import classNames from 'classnames';
import itens from "./itensMenu.json";
import styles from "./Nav.module.scss";

export default function Nav() {
  const [lista, setLista] = useState(itens);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__lista}>
        {lista.map((item) => (
          <li key={item.id} className={styles.nav__item}>
            {item.rotulo}
          </li>
        ))}
        <li className={classNames({
          [styles.nav__item]: true,
          [styles['nav__item--active']]: true
        })}>Teste</li>
      </ul>
    </nav>
  );
}
