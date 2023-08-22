import "./App.css";
import Header from "./components/Layout/Header";
import ExplanationSection from "./components/Layout/ExplanationSection";
import Lists from "./components/Layout/Lists";
import { productsData } from "./data/data.js";
import Product from "./components/Layout/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Layout/Cart";
import ProductPopup from "./components/Layout/ProductPopup";
export default App;

const calcSum = function (arr) {
  return arr.reduce((acc, item) => (acc += item.amount * item.price), 0);
};

function App() {
  const [order, setOrder] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    if (order.length > 0) {
      setTotalSum(calcSum(order));
    }
  }, [order]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Header handleOpenCart={handleOpenCart} order={order} />
      <ExplanationSection />
      <Lists>
        {productsData.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            description={item.description}
            price={Number(item.price)}
            order={order}
            setOrder={setOrder}
          />
        ))}
      </Lists>
      <Cart isOpen={isCartOpen} closeCart={handleCloseCart} totalSum={totalSum}>
        {order.length > 0 ? (
          order.map((item) => (
            <ProductPopup
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              amount={item.amount}
              order={order}
              setOrder={setOrder}
            />
          ))
        ) : (
          <div style={{ fontSize: "2rem" }}>Корзина пуста</div>
        )}
      </Cart>
    </>
  );
}
