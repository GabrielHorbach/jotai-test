import styles from "./styles.module.css";

export function Item(props) {
  const { product } = props;

  return (
    <div className={styles["product-card"]}>
      <div className={styles.top}>
        <img
          src="https://codingyaar.com/wp-content/uploads/chair-image.jpg"
          alt=""
        />
        <h4>{product.name}</h4>
      </div>
      <div className={styles.bottom}>
        <span>${product.price}</span>
        <button>+</button>
      </div>
    </div>
  );
}
