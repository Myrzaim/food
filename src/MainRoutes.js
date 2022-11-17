import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import FoodList from "./Components/Food/FoodList/FoodList";
import AddFood from "./Components/Admin/AddFood/AddFood";
import FoodDetails from "./Components/Food/FoodDetails/FoodDetails";
import EditFood from "./Components/Admin/EditFood/EditFood";
import Basket from "./Components/Basket/Basket";
import Auth from "./Components/Auth/Auth";
import Signin from "./Components/Auth/Signin";
import Users from "./Components/Auth/Users";
import UpdateUser from "./Components/Auth/UpdateUser";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/users" element={<Users />} />
      <Route path="/update/:id" element={<UpdateUser />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/foods" element={<FoodList />} />
      <Route path="/addfood" element={<AddFood />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/edit/:id" element={<EditFood />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
};

export default MainRoutes;
