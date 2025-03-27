import React, { useContext, useState } from 'react';
import { Button, TextField } from "@mui/material";
import { foodContext } from "../../../context/FoodContextProvider";
import { useNavigate } from 'react-router-dom';
import "./AddFood.css";


const AddFood = () => {
  const { addFood } = useContext(foodContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [img1, setImg1] = useState("");

  const navigate = useNavigate();

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !category.trim() ||
      !title.trim() ||
      !description.trim() ||
      !price.trim() ||
      !img1.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let obj = {
      category,
      title,
      description,
      price: +price,
      img1
    };
    
    addFood(obj);
    navigate("/foods");
    setCategory("");
    setTitle("");
    setDescription("");
    setPrice(0);
    setImg1("");
  }
    return (
        <>
          <h2 id="add-title">Add food</h2>
          
          <form   id="form-add" onSubmit={(e) => handleAdd(e)}>
            <TextField
              className="outlined-basic food__cat"
              label="Категория"
              variant="outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
              className="outlined-basic food__cat"
              label="Название"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              className="outlined-basic food__cat"
              label="Описание"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              type="number"
              className="outlined-basic food__cat"
              label="Цена"
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              className="outlined-basic food__cat"
              label="Фото 1"
              variant="outlined"
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
            />
                <div className='d-flex justify-content-center'>
            <Button className='add__btn' variant="contained" type="submit">
              Добавить
                    </Button>
                    </div>
          </form>
        </>
      );
}

export default AddFood