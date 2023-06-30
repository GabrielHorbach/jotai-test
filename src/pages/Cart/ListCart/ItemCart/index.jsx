import styles from "./styles.module.css";

export function ItemCart(props) {
  const { product } = props;

  return (
    <div className={styles["item-cart"]}>
      <div className={styles.left}>
        <img
          src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
          alt=""
        />
        <p className={styles["item-name"]}>{product.name}</p>
      </div>
      <div className={styles.right}>
        <p className={styles["item-price"]}>${product.price}</p>
        <button>Remove</button>
      </div>
    </div>
  );
}
