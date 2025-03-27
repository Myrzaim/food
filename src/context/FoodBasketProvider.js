import React, { createContext, useReducer } from "react";

export const foodBasket = createContext();

function getCountFoodsBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  return basket ? basket.foods.length : 0;
}

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: getCountFoodsBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      console.log("get basket");
      return { ...prevState, basket: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...prevState, basketCount: action.payload };
    default:
      return prevState;
  }
}

const FoodBasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addFoodToBasket(foodObj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      basket = {
        foods: [],
        totalPrice: 0,
      };
    }

    let newFood = {
      item: foodObj,
      count: 1,
      subPrice: foodObj.price,
    };

  
    // Хранение дубликатов
    let filterBasket = basket.foods.filter((elem) => {
      return elem.item.id === foodObj.id;
    });

    if (filterBasket.length > 0) {
      basket.foods = basket.foods.filter((elem) => {
        return elem.item.id !== foodObj.id;
      });
    } else {
      basket.foods.push(newFood);
    }
    

    basket.totalPrice = calcTotalPrice(basket.foods);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.foods.length,
    });
  }

  function getBasket() {
    console.log("get basket1");
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        foods: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  function changeFoodCount(id, count) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.foods = basket.foods.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });

    basket.totalPrice = calcTotalPrice(basket.foods);
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  function calcTotalPrice(foods) {
    let total = 0;
    foods.map((item) => {
      total += item.subPrice;
    });
    return total;
  }

  //   delete products in basket

  function deleteBasketFood(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.foods = basket.foods.filter((elem) => {
      return elem.item.id !== id;
    });
    basket.totalPrice = calcTotalPrice(basket.foods);
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.foods.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  function deleteBasketAllFood() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.foods = [];
    basket.totalPrice = 0;
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.foods.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addFoodToBasket,
    getBasket,
    changeFoodCount,
    deleteBasketFood,
    deleteBasketAllFood,
    foodsInBasket: state.basket,
    basketCount: state.basketCount,
  };
  return <foodBasket.Provider value={cloud}>{children}</foodBasket.Provider>;
};

export default FoodBasketProvider;
