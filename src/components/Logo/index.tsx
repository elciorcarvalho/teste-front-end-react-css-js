import styles from './Logo.module.scss';

export default function Logo() {
    return (
      <div className={styles.logo}>
        <img
          className={styles.logo__png}
          src='assets/logos/logo-pizza.png'
          alt='Logo pizza'
        />
      </div>
    );
}