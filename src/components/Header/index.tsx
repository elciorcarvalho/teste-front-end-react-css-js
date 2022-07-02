import styles from './Header.module.scss';
import Cart from 'components/Cart';
import Logo from 'components/Logo';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Cart />
        </header>
    )
}