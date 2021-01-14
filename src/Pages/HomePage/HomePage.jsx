import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import { getTopDishesAction } from "../../actions/dish-actions";
// Components
import { Display } from "../../Components";
import ContentGrid from "./ContentGrid/ContentGrid";

const HomePage = () => {
  // Redux state
  const dispatch = useDispatch();
  const topDishesState = useSelector((state) => state.dishesGetTop);

  // We need to destructure dish so we now if we already got them before
  const { dishes } = topDishesState;

  useEffect(() => {
    // If we already have a dish no need to get another one again :).
    if (!dishes) {
      dispatch(getTopDishesAction());
    }
  }, [dispatch, dishes]);

  return (
    <section>
      <Display
        {...topDishesState}
        render={() => <ContentGrid dishes={dishes} />}
      />
    </section>
  );
};

export default HomePage;
