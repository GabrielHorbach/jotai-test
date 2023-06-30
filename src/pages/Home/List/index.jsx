import { PRODUCTS } from "../../../data/products";
import { Item } from "./Item";
import styles from "./styles.module.css";

export function List() {
  return (
    <div className={styles["products-list"]}>
      {PRODUCTS.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
}
