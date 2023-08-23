import styles from "./ProductPopup.module.css";

const sum = function (amount, price) {
  console.log("render sum in product popup");
  return parseFloat((amount * price).toFixed(2));
};

const ProductPopup = ({
  title,
  description,
  price,
  amount,
  order,
  setOrder,
}) => {
  const totalSum = sum(amount, price);

  const handleDeleteProduct = () => {
    const newOrder = order.filter((item) => item.title !== title);
    setOrder(newOrder);
  };
  const updateItemQuantity = (quantity) => {
    const updateCard = order.map((item) => {
      if (item.title === title) {
        return { ...item, amount: quantity };
      }
      return item;
    });

    setOrder(updateCard);
  };

  return (
    <div className={styles["product-popup"]}>
      <div className={styles["product-popup__wrapper"]}>
        <div className={styles["product-popup__body"]}>
          <h2 className={styles["product-popup__title"]}>{title}</h2>
          <p className={styles["product-popup__description"]}>{description}</p>
          <p className={styles["product-popup__price"]}>$ {price}</p>
        </div>
        <div className={styles["product-popup__quantity"]}>
          <p className={styles["product-popup__info"]}>
            Количество: {amount}
            <span
              className={styles["product-popup__more"]}
              onClick={() => updateItemQuantity(amount + 1)}
            >
              +
            </span>
            {amount > 1 && (
              <span
                className={styles["product-popup__less"]}
                onClick={() => updateItemQuantity(amount - 1)}
              >
                -
              </span>
            )}
            <br />
            Сумма: {totalSum} $
          </p>
          <button
            onClick={handleDeleteProduct}
            className={styles["product-popup__button"]}
          >
            Убрать из корзины
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductPopup;
