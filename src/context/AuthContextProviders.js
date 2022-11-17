import axios from "axios";
import React, { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const API = "http://localhost:8000/users";

export const userContext = createContext();

const AuthContextProviders = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // create user
  async function addUser(newUser) {
    try {
      const data = await axios.get(API);
      if (data.data.some((item) => item.name === newUser.name)) {
        alert("Пользователь с таким именем уже существует!!");
        return;
      } else {
        axios.post(API, newUser);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // Login user

  async function loginUser(user) {
    try {
      const data = await axios.get(API);
      let cc = null;
      if (
        data.data.some((item) => {
          if (item.name === user.name && item.pass == user.pass) {
            cc = item;
            return true;
          }
        })
      ) {
        setCurrentUser(cc);
        navigate("/");
      } else {
        alert("Неправильные данные");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // LogOut user

  async function logOutUser() {
    setCurrentUser(null);
    navigate("/");
  }

  // Delete User

  async function deleteUser() {
    try {
      let id = currentUser.id;
      await axios.delete(`${API}/${id}`);
      setCurrentUser(null);
      navigate("/");
    } catch (error) {
      return error;
    }
  }
  //  Update User
  async function updateUser(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    setCurrentUser(editedObj);
  }

  let cloud = {
    addUser,
    loginUser,
    currentUser,
    logOutUser,
    deleteUser,
    updateUser,
  };
  return <userContext.Provider value={cloud}>{children}</userContext.Provider>;
};

export default AuthContextProviders;
