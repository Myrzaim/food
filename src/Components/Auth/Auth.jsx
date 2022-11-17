import React, { useContext,useState } from 'react';
import "./Auth.css";
import { Button, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { userContext } from '../../context/AuthContextProviders';


const Auth = () => {
  const { loginUser } = useContext(userContext);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handleAdd(e) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (
      !name.trim() ||
      !pass.trim()
    ) {
      alert("Заполните все поля!");
      return;
      }

    let obj = {
      name,
      pass

    };
    loginUser(obj);
    setName("");
    setPass("");
  }



  return (
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
      label="Password"
      variant="outlined"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
 
      
    />
        <div className='d-flex justify-content-center'>
    <Button className='add__btn' variant="contained" type='submit'>
      Login
            </Button>
          </div>
          <p className='regist'>не зарегистрированы?</p>
      <div className='d-flex justify-content-center'>

        <Link to = '/signin'>
    <Button className='add__btn' variant="contained" >
      Sign In
          </Button>
          </Link>
            </div>
  </form>
  )
}

export default Auth;