import React, { useEffect, useContext } from "react";
import {
    Button,
    Container,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
  import "./Basket.css";
import { useNavigate } from "react-router-dom";
import { foodBasket } from "../../context/FoodBasketProvider";

const Basket = () => {
    const {
        foodsInBasket,
        getBasket,
        changeFoodCount,
        deleteBasketFood,
    } = useContext(foodBasket);
  
    useEffect(() => {
        console.log("reeead");
        getBasket();
    }, []);

    const navigate = useNavigate();

    // foodsInBasket = [];
    console.log(foodsInBasket);

     return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3">Mои Заказы</Typography>
        {foodsInBasket ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>category</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>title</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Фото</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Цена</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Кол-во</TableCell>
                                         <TableCell sx={{ fontWeight: "bold" }}>Общая сумма</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {foodsInBasket.foods.map((elem) => (
                    <TableRow key={elem.item.id}>
                    <TableCell>{elem.item.category}</TableCell>
                    <TableCell>{elem.item.title}</TableCell>
                    <TableCell>
                      <img src={elem.item.img1} alt="apple" width={40} />
                    </TableCell>
                    <TableCell>{elem.item.price}</TableCell>
                    <TableCell>
                      <input
                        min="1"
                        type="number"
                        style={{ width: "40px" }}
                        value={elem.count}
                        onChange={(e) =>
                          changeFoodCount(elem.item.id, Number(e.target.value))
                        }
                      />
                    </TableCell>
                          <TableCell>{elem.subPrice}</TableCell>
                          <TableCell onClick={() => deleteBasketFood(elem.item.id)}>
                      DELETE
                    </TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button className="addTOCart__btn" variant="contained" sx={{ margin: "20px auto" }}>
              Цена {Number(foodsInBasket.totalPrice)}
                      </Button>
              <Button className="addTOCart__btn"  variant="contained" sx={{ margin: "20px auto 20px 25px" }}
                onClick={() => navigate(`/addorder/${foodsInBasket.totalPrice}`)}>
              Оформить заказ
                          </Button>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </>
  );
}
export default Basket;
