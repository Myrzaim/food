import React, {useState, useContext} from 'react';
import { Button, TextField } from "@mui/material";
import { userContext } from '../../context/AuthContextProviders';
import "./Auth.css";
import { Link, useNavigate } from 'react-router-dom';




const Signin = () => {

    const { addUser } = useContext(userContext);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  
  const navigate = useNavigate();
  
  function handleAdd(e) {
    console.log("creating");
      e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
      if (
        !name.trim() ||
        !age.trim() ||
        !pass.trim() ||
        !confPass.trim()
      ) {
        alert("Заполните все поля!");
        return;
        }

    if (pass != confPass) {
            alert('Пароли должны быть одинаковые');
            return
     }
      let obj = {
        name,
        age,
        pass,
        confPass
      };
    addUser(obj);
    navigate("/auth");
      setName("");
      setAge(0);
      setPass("");
      setConfPass("");
    }

    return (<>
        <h2 id="add-title">Регистрация</h2>
        <form   id="form-add" onSubmit={(e) => handleAdd(e)}>
        <TextField
          className="outlined-basic food__cat"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className="outlined-basic food__cat"
          label="Age"
          variant="outlined"  
          value={age}
          onChange={(e) => setAge(e.target.value)}
            />
            <TextField
          className="outlined-basic food__cat"
          label="Password"
          variant="outlined"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <TextField
          className="outlined-basic food__cat"
          label="Confirm Password"
          variant="outlined"  
          value={confPass}
          onChange={(e) => setConfPass(e.target.value)}
        />
        <div className='d-flex justify-content-center'> 
        <Button className='add__btn' variant="contained" type='submit'>
            Registration
            </Button></div>
           
      </form>
      </> )
}

export default Signin