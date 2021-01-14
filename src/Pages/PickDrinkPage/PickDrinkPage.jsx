import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import { getDrinksAction } from "../../actions/drinks-actions";
// Components
import { Display } from "../../Components";
import ContentGrid from "./ContentGrid/ContentGrid";

const PickDrinkPage = () => {
  // Redux state
  const dispatch = useDispatch();
  const drinksState = useSelector((state) => state.drinksGet);

  // We need to destructure drinks so we know if we already got them before
  const { drinks } = drinksState;

  useEffect(() => {
    // If we already have a drinks no need to get another one again :).
    if (!drinks) {
      dispatch(getDrinksAction());
    }
  }, [dispatch, drinks]);

  return (
    <section>
      <Display
        {...drinksState}
        render={() => <ContentGrid drinks={drinks} />}
      />
    </section>
  );
};

export default PickDrinkPage;
