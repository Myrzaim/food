import React, { useContext, useState,useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import { foodContext } from "../../../context/FoodContextProvider";
import "./EditFood.css";
import { useNavigate, useParams } from 'react-router-dom';


const EditFood = () => {
  const { editFood,foodDetails, readOneFood } = useContext(foodContext);
  const { id } = useParams();
    useEffect(() => {
        readOneFood(id);
    }, [id]);

    const [inpVal, setInpVal] = useState(foodDetails);

    
    function handleChange(e) {
        let obj = {
          ...inpVal,
          [e.target.name]: e.target.value,
        };
        
        setInpVal(obj);
    }

    const navigate = useNavigate();

    function handleSave(e) {
      e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
      if (
        !inpVal.category.trim() ||
        !inpVal.title.trim() ||
        !inpVal.description.trim() ||
          !inpVal.price ||
        !inpVal.img1.trim()
      ) {
        alert("Заполните все поля!");
        return;
      }
      editFood(id, inpVal);
      navigate("/foods");
    }

 
    return (
        <>
          <h2 id="add-title">Edit food</h2>
            {inpVal ?
                <form id="form-add" onSubmit={(e) => handleSave(e)}>
                    <TextField
                        className="outlined-basic food__cat"
                        label="Категория"
                        variant="outlined"
                        name = 'category'
                        value={inpVal.category}
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        className="outlined-basic food__cat"
                        label="Название"
                        variant="outlined"
                        name = "title"
                        value={inpVal.title}
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        className="outlined-basic food__cat"
                        label="Описание"
                        variant="outlined"
                        name = "description"
                        value={inpVal.description}
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        type="number"
                        className="outlined-basic food__cat"
                        label="Цена"
                        variant="outlined"
                        name = "price"
                        value={inpVal.price}
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        className="outlined-basic food__cat"
                        label="Фото 1"
                        variant="outlined"
                        name = "img1"
                        value={inpVal.img1}
                        onChange={(e) => handleChange(e)}
                    />
                    <div className='d-flex justify-content-center'>
                        <Button className='add__btn' variant="contained" type="submit">
                            Save
                        </Button>
                    </div>
                </form> : null}
        </>
      );
}

export default EditFood;