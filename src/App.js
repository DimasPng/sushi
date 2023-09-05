import "./App.css";
import Header from "./components/Layout/Header";
import ExplanationSection from "./components/Layout/ExplanationSection";
import Lists from "./components/Layout/Lists";
import Product from "./components/Layout/Product";
import { useEffect, useMemo, useReducer } from "react";
import Cart from "./components/Layout/Cart";
import ProductPopup from "./components/Layout/ProductPopup";
import { getMeals } from "./api.ts";
import { ORDER, TOTAL_SUM, MEALS, ISCARTOPEN, reducer, init } from "./reducer";

export default App;

const calcSum = function (arr) {
  console.log("render calcSum in App");
  return arr
    .reduce((acc, item) => (acc += item.amount * item.price), 0)
    .toFixed(2);
};

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    {
      order: [],
      totalSum: 0,
      meals: [],
      isCartOpen: false,
    },
    init,
  );

  useEffect(() => {
    (async () => {
      const meals = await getMeals();
      dispatch({ type: MEALS, payload: meals });
    })();
  }, []);

  const totalSumMemoized = useMemo(() => calcSum(state.order), [state.order]);

  useEffect(() => {
    if (state.order.length > 0) {
      dispatch({ type: TOTAL_SUM, payload: totalSumMemoized });
    }
  }, [state.order, totalSumMemoized]);

  const handleOpenCart = () => {
    dispatch({ type: ISCARTOPEN, payload: !state.isCartOpen });
  };

  return (
    <>
      <Header handleOpenCart={handleOpenCart} order={state.order} />
      <ExplanationSection />
      <Lists>
        {state.meals.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            description={item.description}
            price={Number(item.price)}
            order={state.order}
            setOrder={(newOrder) =>
              dispatch({ type: ORDER, payload: newOrder })
            }
          />
        ))}
      </Lists>
      <Cart
        isOpen={state.isCartOpen}
        closeCart={handleOpenCart}
        totalSum={state.totalSum}
      >
        {state.order.length > 0 ? (
          state.order.map((item) => (
            <ProductPopup
              key={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              amount={item.amount}
              order={state.order}
              setOrder={(newOrder) =>
                dispatch({ type: ORDER, payload: newOrder })
              }
            />
          ))
        ) : (
          <div style={{ fontSize: "2rem" }}>Корзина пуста</div>
        )}
      </Cart>
    </>
  );
}
