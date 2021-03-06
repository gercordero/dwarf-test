import React, { useEffect } from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import ContentGrid from "./ContentGrid/ContentGrid";

const OrderPage = ({ history }) => {
  // Redux state
  const { dish } = useSelector((state) => state.dishGet); // We need dish to check for redirect.
  const { drinks } = useSelector((state) => state.drinksStore); // We need drinks to check for redirect.

  // If user haven't selected a drink yet shouldn't be able to access this route
  useEffect(() => {
    if (!dish) {
      history.push("/pick-dish");
    }
    if (drinks.length === 0) {
      history.push("/pick-drink");
    }
  }, [history, dish, drinks]);

  return (
    <section>
      <ContentGrid />
    </section>
  );
};

export default OrderPage;
