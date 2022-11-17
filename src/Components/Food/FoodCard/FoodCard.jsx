import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import "./FoodCard.css";
import { foodBasket } from '../../../context/FoodBasketProvider';


const FoodCard = ({ obj }) => {
  const { addFoodToBasket } = useContext(foodBasket);
    return (
        <div className="product__item">
        <div className="product__img">
          <img src={obj.img1} alt="product-img" className="w-50" />
        </div>
    
        <div className="product__content">
          <h5><Link to = {`/foods/${obj.id}`}>
           {obj.title}</Link>
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product__price">${obj.price}</span>
            <button className="addTOCart__btn" onClick={() => addFoodToBasket(obj)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
}

export default FoodCard