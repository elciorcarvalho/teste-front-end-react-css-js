import { useState } from "react";
import classNames from "classnames";
import itens from "services/itensMenu.json";
import styles from "./Nav.module.scss";

type IItem = typeof itens[0];

export default function Nav() {
  const [lista, setLista] = useState(itens);
  const [activeId, setActiveId] = useState(1);

  function handleChangeLabel(opcao: IItem) {
    const valida = lista.filter((n) => n.id === opcao.id)[0]
    if (opcao.id === valida.id) return setActiveId(opcao.id);
    return null;
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__lista}>
        {lista.map((item) => (
          <li
            key={item.id}
            className={classNames({
              [styles.nav__item]: true,
              [styles["nav__item--active"]]: item.id === activeId
            })}
            onClick={() => handleChangeLabel(item)}
          >
            {item.rotulo}
          </li>
        ))}
      </ul>
    </nav>
  );
}
