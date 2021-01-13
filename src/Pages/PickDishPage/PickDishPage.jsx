import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import { getDishAction } from "../../actions/dish-actions";

const PickDishPage = () => {
  // Redux state
  const dispatch = useDispatch();
  const randomDishState = useSelector((state) => state.dishGet);

  // We need to destructure dish so we now if we already got them before
  const { dish } = randomDishState;

  useEffect(() => {
    // If we already have a dish no need to get another one again :).
    if (!dish) {
      dispatch(getDishAction());
    }
  }, [dispatch, dish]);

  return <section></section>;
};

export default PickDishPage;
