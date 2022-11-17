import React, {useState, useContext} from 'react';
import { Button, TextField } from "@mui/material";
import { userContext } from '../../context/AuthContextProviders';
import "./Auth.css";
import { useNavigate,useParams } from 'react-router-dom';




const UpdateUser = () => {

    const {currentUser, updateUser } = useContext(userContext);

    const [inpVal, setInpVal] = useState(currentUser);
    const { id } = useParams();

    
    function handleChange(e) {
        let obj = {
          ...inpVal,
          [e.target.name]: e.target.value,
        };
        
        setInpVal(obj);
    }

    const navigate = useNavigate();

  
    function handleAdd(e) {
        e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
        if (
            !inpVal.name.trim() ||
            !inpVal.age.trim() ||
            !inpVal.pass.trim() ||
            !inpVal.confPass.trim()
        ) {
            alert("Заполните все поля!");
            return;
        }

        updateUser(id, inpVal);
        navigate("/");
    }
    return (<>
        <h2 id="add-title">Edit user</h2>
        <form   id="form-add" onSubmit={(e) => handleAdd(e)}>
        <TextField
          className="outlined-basic food__cat"
          label="Name"
          variant="outlined"
          name = 'name'
          value={inpVal.name}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic food__cat"
          label="Age"
          variant="outlined"  
          name = 'age'
          value={inpVal.age}
          onChange={(e) => handleChange(e)}
            />
            <TextField
          className="outlined-basic food__cat"
          label="Password"
          variant="outlined"
          name = 'pass'
          value={inpVal.pass}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className="outlined-basic food__cat"
          label="Confirm Password"
          variant="outlined"  
          name = 'confPass'
          value={inpVal.confPass}
          onChange={(e) => handleChange(e)}
        />
            <div className='d-flex justify-content-center'>
        <Button className='add__btn' variant="contained" type='submit'>
         Save
                </Button></div>
      </form>
      </> )
}

export default UpdateUser;