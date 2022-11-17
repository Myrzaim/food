import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const foodContext = createContext(); // облако

const API = "http://localhost:8000/foods";

const INIT_STATE = {
  foods: null,
  foodDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        food: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, foodDetails: action.payload };
    default:
      return prevState;
  }
}

const FoodContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();

  // create food
  async function addFood(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // read food
  async function readFood() {
    console.log("reading food");
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }

  // read one Food
  async function readOneFood(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  // Edit Food
  async function editFood(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readFood();
  }

  // DeleteFood
  async function deleteFood(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readFood();
      navigate("/foods");
    } catch (error) {
      return error;
    }
  }

  let cloud = {
    addFood,
    readFood,
    readOneFood,
    editFood,
    deleteFood,
    pageTotalCount: state.pageTotalCount,
    foodsArr: state.food,
    foodDetails: state.foodDetails,
  };

  return (
    <foodContext.Provider value={cloud}>{props.children}</foodContext.Provider>
  );
};

export default FoodContextProvider;
