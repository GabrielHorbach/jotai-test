import { PRODUCTS } from "../../../data/products";
import { ItemCart } from "./ItemCart";
import styles from "./styles.module.css";

export function ListCart() {
  return (
    <div className={styles["list-cart"]}>
      <h1>Cart items</h1>

      {PRODUCTS.map((product) => (
        <ItemCart product={product} key={product.id} />
      ))}
    </div>
  );
}
