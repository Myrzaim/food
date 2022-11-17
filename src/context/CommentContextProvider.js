import React, { createContext, useState } from "react";
import axios from "axios";

const API = " http://localhost:8000/comments";

export const commentContext = createContext();


const CommentContextProvider = (props) => {
    const [comment, setComment] = useState(null);
    const [comm, setComm] = useState(null);

  // create comment
  async function addComment(newComment) {
    try {
      await axios.post(API, newComment);
      setComment(newComment);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // read comment
  async function readComment(id) {
    try {
      const data = await axios.get(API);
      const result = data.data.filter((item) => item.foodId === id);
        setComm(result);
      return result;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  let cloud = {
    addComment,
    comm,
    readComment,
  };

  return (
    <commentContext.Provider value={cloud}>
      {props.children}
    </commentContext.Provider>
  );
};

export default CommentContextProvider;
