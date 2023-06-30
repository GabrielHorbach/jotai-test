import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="/">TheBestShopEver</a>

      <div>
        <a href="/cart">Cart</a>
      </div>
    </header>
  );
}
