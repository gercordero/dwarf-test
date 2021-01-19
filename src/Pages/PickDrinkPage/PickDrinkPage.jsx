import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import { getDrinksAction } from "../../actions/drinks-actions";
// Components
import { Display } from "../../Components";
import ContentGrid from "./ContentGrid/ContentGrid";

const PickDrinkPage = ({ history }) => {
  // Redux state
  const dispatch = useDispatch();
  const drinksState = useSelector((state) => state.drinksGet);
  const { drinks: storedDrinks } = useSelector((state) => state.drinksStore);
  const { dish } = useSelector((state) => state.dishGet); // We need dish to check for redirect.

  // We need to destructure drinks so we know if we already got them before
  const { drinks } = drinksState;

  // If we don't have any stored drinks that means that user haven't selected any drink yet.
  // So we disable the "continue" button.
  const disableButton = storedDrinks ? !(storedDrinks.length > 0) : true;

  // Redirect if necesary
  useEffect(() => {
    if (!dish) {
      history.push("/pick-dish");
    }
  }, [history, dish]);

  useEffect(() => {
    // If we already have a drinks no need to get them again :).
    if (!drinks) {
      dispatch(getDrinksAction());
    }
  }, [dispatch, drinks]);

  return (
    <section>
      <Display
        {...drinksState}
        render={() => (
          <ContentGrid drinks={drinks} disableButton={disableButton} />
        )}
      />
    </section>
  );
};

export default PickDrinkPage;
