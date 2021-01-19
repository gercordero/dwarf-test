// Geting dish from local storage
const dishFromLocalStorage = localStorage.getItem("dish")
  ? JSON.parse(localStorage.getItem("dish"))
  : {};

// Geting drinks from local store
const drinksFromLocalStorage = localStorage.getItem("drinks")
  ? JSON.parse(localStorage.getItem("drinks"))
  : [];

// Geting order data from local store
const orderFromLocalStorage = localStorage.getItem("order")
  ? JSON.parse(localStorage.getItem("order"))
  : { date: null, email: "", peopleAmount: 1 };

// Initial state
const initialState = {
  dishStore: { dish: dishFromLocalStorage },
  drinksStore: { drinks: drinksFromLocalStorage },
  order: { ...orderFromLocalStorage },
};

export default initialState;
