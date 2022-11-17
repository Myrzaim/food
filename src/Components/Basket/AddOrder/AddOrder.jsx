import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { turContext } from "../../Context/TurContextProvider";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from "react-router-dom";
import "./AddOrder.css";
import { turBasket } from "../../Context/TurBasketProvider";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


const AddOrder = () => {
    const { addOrders } = useContext(turContext);
    const { deleteBasketAllTur } = useContext(turBasket);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [adres, setAdres] = useState("");

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const { price } = useParams();




    function handleAdd(e) {
        e.preventDefault(); 
        if (
            !name.trim() ||
            !surname.trim() ||
            !phone.trim() ||
            !adres.trim()
        ) {
            alert("Заполните все поля!");
            return;
        }
        let obj = {
            name,
            surname,
            phone,
            adres,
            price:price
        }
        addOrders(obj);
        handleOpen();
        deleteBasketAllTur();
        setName("");
        setSurname("");
        setPhone("");
        setAdres("");
    }

    return (
        <>
          <h2 id="add-title">Оформления тура</h2>
            <form id="form-add" onSubmit={(e) => handleAdd(e)}>
          <Button variant="outlined" color="primary" style={{ fontWeight: "bold"}}>Общая сумма тура: { price}</Button>
            <TextField
              className="outlined-basic"
              label="Имя"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
                />
            <TextField
              className="outlined-basic"
              label="Фамилия"
              variant="outlined"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <TextField
              className="outlined-basic"
              label="Номер телефона"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              className="outlined-basic"
              label="Адрес"
              variant="outlined"
              value={adres}
              onChange={(e) => setAdres(e.target.value)}
                    
            />
            <Button variant="contained" type="submit">
              Оформить
            </Button>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Вы успешно оформились!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Наши специалисты свяжутся с Вами в ближайшее время!
                    </Typography>
                    <Button onClick={()=> {navigate(`/`)}}>ок</Button>
                </Box>
            </Modal>
        </>
      );
    };
    

export default AddOrder;