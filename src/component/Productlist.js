import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
  import {setproduct} from "../Redux/action/action";
  import "../index.css"


 const Productlist = () => {

    const products = useSelector((state) => state.productreducers.products);



      const dispatch = useDispatch()
   
    const facthproduct = async() => {
        const responce = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=> {
            console.log(err)
        })
        // console.log(responce.data)
        dispatch(setproduct(responce.data))
    }
       


    useEffect(() => {
        facthproduct();
    },[]);

  return (
  <>
      <div> 
      {
          products.map((item) => 
          <div className="wrapper" key={item.id}>
                 <div className="product-img">
                   <img src={item.image} alt="Big logo" height="350" width="300"/>
                 </div>
               <div className="product-info">
                    <div className="product-text">
                        <h1>{item.title}</h1>
                        <p> {item.description}</p>
                    </div>
                        <div className="product-price-btn">
                        <h2>Price : {item.price} $</h2>
                        <button type="button">buy now</button> 
                    </div>
                </div>
          </div>
         
   
           
          )
      }
      </div>
  </>
  )
}

export default Productlist;


