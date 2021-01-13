import React from "react";
// React Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import {
  HomePage,
  PickDishPage,
  PickDrinkPage,
  OrderPage,
  ReceiptPage,
} from "./Pages";
// Components
import { Layout } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/receipt" component={ReceiptPage} />
          <Route path="/order" component={OrderPage} />
          <Route path="/pick-drink" component={PickDrinkPage} />
          <Route path="/pick-dish" component={PickDishPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
