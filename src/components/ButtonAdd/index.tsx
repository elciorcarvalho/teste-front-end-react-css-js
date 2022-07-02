import classNames from "classnames";
import { IoAdd } from "react-icons/io5";
import styles from "./ButtonAdd.module.scss";

interface Props {
  isPrimary: boolean
}

export default function ButtonAdd(props: Props) {
  const isPrimary = props.isPrimary;

  return (
    <div
      className={classNames({
        [styles.btnAdd]: true,
        [styles["btnAdd--secondary"]]: !isPrimary,
      })}
    >
      <IoAdd
        className={classNames({
          [styles.btnAdd__icon]: true,
          [styles["btnAdd__icon--secondary"]]: !isPrimary,
        })}
      />
    </div>
  );
}
