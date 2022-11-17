import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes.js";
import Footer from "./Components/Footer/Footer";
import FoodContextProvider from "./context/FoodContextProvider";
import FoodBasketProvider from "./context/FoodBasketProvider";
import AuthContextProviders from "./context/AuthContextProviders";
import CommentContextProvider from './context/CommentContextProvider';

const App = () => {
  return (
    <>
      <CommentContextProvider>
      <AuthContextProviders>
      <FoodBasketProvider>
      <FoodContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
        </FoodContextProvider>
        </FoodBasketProvider>
        </AuthContextProviders>
        </CommentContextProvider>
    </>
  );
};

export default App;
