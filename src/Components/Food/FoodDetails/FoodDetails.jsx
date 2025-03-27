
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { userContext } from "../../../context/AuthContextProviders";
import { commentContext } from "../../../context/CommentContextProvider";
import { foodBasket } from "../../../context/FoodBasketProvider";
import { foodContext } from "../../../context/FoodContextProvider";
import './FoodDetails.css'

const FoodDetails = () => {
    const { readOneFood, foodDetails, deleteFood } = useContext(foodContext);
    const { addFoodToBasket } = useContext(foodBasket);
    const [tab, setTab] = useState("desc");
    const { id } = useParams();

    const { addComment,comm,readComment } = useContext(commentContext);
    const { currentUser } = useContext(userContext);
    const [text, setText] = useState("");

    function handleAdd(e) {
        if (!text.trim()) {
            alert("Заполните все поля!");
            return;
        }
        let commentObj = {
            user: currentUser.name,
            text,
            foodId: id
        };
        
        addComment(commentObj);
        comm.push(commentObj);
        setText("");
    }

    useEffect(() => {
    readComment(id);
    }, []);
    


    

    useEffect(() => {
         readOneFood(id);
    }, [id]);

    let obj = foodDetails;
  return (
       <>
    {obj ? <Container className="detail__container">
           <Row>
              

              <Col lg="4" md="4">
                  <div className="product__main-img">
                      <img src={obj.img1} alt="" className="w-100" />
                  </div>
              </Col>

              <Col lg="6" md="6">
                  <div className="single__product-content">
                      <h2 className="product__title mb-3">{obj.title}</h2>
                      <p className="product__price">
                          {" "}
                          Price: <span>${obj.price}</span>
                      </p>
                      <p className="category mb-5">
                          Category: <span>{obj.category}</span>
                      </p>
                  
                      <button className="addTOCart__btn" onClick={() => addFoodToBasket(obj)}>
                      <i class="ri-shopping-cart-2-line"></i>
                              </button>
                            
                          <Link to = {`/edit/${obj.id}`}>
                          <button className="addTOCart__btn">
                          <i class="ri-edit-2-line"></i>
                              </button>
                              </Link>
                      <button className="addTOCart__btn" onClick={()=>deleteFood(obj.id)}>
                      <i class="ri-delete-bin-line"></i>
                      </button>
                  </div>
              </Col>

              <Col lg="12">
                  <div className="tabs d-flex align-items-center gap-5 py-3">
                      <h6
                          className={` ${tab === "desc" ? "tab__active" : ""}`}
                          onClick={() => setTab("desc")}
                      >
                          Description
                      </h6>
                      <h6
                          className={` ${tab === "rev" ? "tab__active" : ""}`}
                          onClick={() => setTab("rev")}
                      >
                          Review
                      </h6>
                  </div>

                  {tab === "desc" ? (
                      <div className="tab__content">
                          <p>{obj.description}</p>
                      </div>
                  ) : (
                              <div className="tab__form mb-3">
                                  {comm.length > 0 ? comm.map((comment) => (
                                      <div className="review pt-5">
                                      <p className="user__name mb-0">{comment.user}</p>
                              <p className="feedback__text">{comment.text}</p>
                                      </div>))
                                      :""}
                                  {currentUser?
                                  <div className="newsletter">
              <input type="email" placeholder='enter your comment'  value={text}
              onChange={(e) => setText(e.target.value)} />
              <span onClick={(e)=>handleAdd(e)}><i className="ri-send-plane-line"></i></span>
                                      </div>
                                      :"Войдите чтобы оставить коментарий!"}
                
                      </div>
                  )}
              </Col>
          </Row>
    </Container>
    :"Нет данных!!!"}    
    </>
  );
};

export default FoodDetails;