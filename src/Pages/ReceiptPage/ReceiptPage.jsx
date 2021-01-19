import React, { useEffect } from "react";
// Redux
import { useSelector } from "react-redux";

const ReceiptPage = ({ history }) => {
  // Redux state
  const { dish } = useSelector((state) => state.dishGet); // We need dish to check for redirect.
  const { drinks } = useSelector((state) => state.drinksStore); // We need drinks to check for redirect.
  const order = useSelector((state) => state.order);

  // If user haven't selected a drink yet shouldn't be able to access this route
  useEffect(() => {
    if (!dish) {
      history.push("/pick-dish");
    }
    if (drinks.length === 0) {
      history.push("/pick-drink");
    }
    if (!order.date || !order.email) {
      history.push("/order");
    }
  }, [history, dish, drinks, order]);
  return (
    <section>
      <h1>Receipt Page</h1>
    </section>
  );
};

export default ReceiptPage;
