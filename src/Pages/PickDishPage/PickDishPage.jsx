import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import { getDishAction } from "../../actions/dish-actions";
// Components
import { Display } from "../../Components";
import ContentGrid from "./ContentGrid/ContentGrid";

const PickDishPage = () => {
  // Redux state
  const dispatch = useDispatch();
  const randomDishState = useSelector((state) => state.dishGet);

  // We need to destructure dish so we know if we already got it before
  const { dish } = randomDishState;

  useEffect(() => {
    // If we already have a dish no need to get another one again :).
    if (!dish) {
      dispatch(getDishAction());
    }
  }, [dispatch, dish]);

  return (
    <section>
      <Display
        {...randomDishState}
        render={() => <ContentGrid dish={dish} />}
      />
    </section>
  );
};

export default PickDishPage;
