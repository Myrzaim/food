import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col} from "reactstrap";
import foodCategoryImg01 from '../../../images/images/hamburger.png';
import foodCategoryImg02 from "../../../images/images/pizza.png";
import foodCategoryImg03 from "../../../images/images/bread.png";
import "../../Home/Home.css";
import { TextField } from "@mui/material";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { foodContext } from '../../../context/FoodContextProvider';
import FoodCard from '../FoodCard/FoodCard';
import Pagination from '@mui/material/Pagination';



const FoodList = () => {
  const { foodsArr, readFood, pageTotalCount  } = useContext(foodContext);
  const [searchValue, setSearchValue] = useState("");
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const location = useLocation();
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (location.pathname === "/foods") {
        setParamsSearch({
        q: searchValue,
  }); 
  }
}, [searchValue]);

    useEffect(() => {
      if (category === "all") {
        setParamsSearch({
          q: paramsSearch.get("q") || "",
          _page: page,
          _limit: 4,
        });
      } else {
        setParamsSearch({
          q: paramsSearch.get("q") || "",
          category:category,
          _page: page,
          _limit: 4,
        });
      }
    }, [paramsSearch, category, page]);
  
  useEffect(() => {
    readFood();
  }, [paramsSearch, category, page]);


  function changeCategory(e) {
    document.getElementById("category1").classList.remove("foodBtnActive");
    document.getElementById("category2").classList.remove("foodBtnActive");
    document.getElementById("category3").classList.remove("foodBtnActive");
    document.getElementById("category4").classList.remove("foodBtnActive");
    const elem = document.getElementById(e.target.id);
    elem.classList.add("foodBtnActive");
    setCategory(e.target.value);
  }
  


    return (
      <Container>
        <Row>
          <Col lg='2'>
            <div className="food__category search__inp">    
            <TextField  placeholder="Поиск…" 
        inputProps={{ "aria-label": "search" }}
                onChange={(e) => setSearchValue(e.target.value)}></TextField>
            </div>
          </Col>
    <Col lg="8">
      <div className="food__category d-flex align-items-center justify-content-center gap-4">
        <button className='all__btn foodBtnActive' onClick={changeCategory} id='category1' value="all">
          All
        </button>
              <button className='d-flex align-items-center gap-2' id='category2'
              onClick={changeCategory} value="Burger">
          <img src={foodCategoryImg01} alt="" />
          Burger
        </button>

              <button className='d-flex align-items-center gap-2' id='category3'
              onClick={changeCategory} value="Pizza">
          <img src={foodCategoryImg02} alt="" />
          Pizza
        </button>

              <button className='d-flex align-items-center gap-2' id='category4'
              onClick={changeCategory} value="Bread">
          <img src={foodCategoryImg03} alt="" />
          Bread
                        </button>
                      
      </div>
        </Col>
                <Col lg='2'>
                    
            <div className="food__category d-flex align-items-center justify-content-center gap-4">     
             <Link to = '/addfood'>
         <button className='d-flex align-items-end gap-2'>
           <i class="ri-add-box-line"></i>
                     AddFood
                </button>
                </Link> 
                        </div> 
          </Col>
          { foodsArr ? foodsArr.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <FoodCard obj={item} />
              </Col>
        )) : null}
        </Row>
        <Pagination 
          color='standard'
          className='paginationBttns'
          count={+pageTotalCount}
          value={1}
          page={+page}
          onChange={(e,value) => setPage(value)}
        />
        
            </Container>
  )
}

export default FoodList