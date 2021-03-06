// Geting dish from local storage
const dishFromLocalStorage = localStorage.getItem("dish")
  ? JSON.parse(localStorage.getItem("dish"))
  : null;

// Geting drinks from local store
const drinksFromLocalStorage = localStorage.getItem("drinks")
  ? JSON.parse(localStorage.getItem("drinks"))
  : [];

// Geting order data from local store
const orderFromLocalStorage = localStorage.getItem("order")
  ? JSON.parse(localStorage.getItem("order"))
  : { date: null, email: "", peopleAmount: 1 };

// Geting orders from local store
const ordersFromLocalStorage = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : [];

// Initial state
const initialState = {
  dishGet: {
    dish: dishFromLocalStorage,
    status: dishFromLocalStorage ? "SUCCESS" : "LOADING",
  },
  drinksStore: { drinks: drinksFromLocalStorage },
  order: { ...orderFromLocalStorage },
  ordersStore: { orders: ordersFromLocalStorage },
};

export default initialState;
