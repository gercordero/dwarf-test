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

  // We need to destructure dishes so we know if we already got them before
  const { dishes } = topDishesState;

  useEffect(() => {
    // If we already have a dishes no need to get them again :).
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
