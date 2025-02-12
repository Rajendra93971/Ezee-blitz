import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart,setCartNumbers } from "../../features/cart/cartSlice";
function ProductButton(props) {
	const {product}=props;
	const{cartItems}=useSelector((state)=>state.carts)
	const isPresentInCart=Boolean(cartItems.find((item)=>item.id===product.id));
	const dispatch=useDispatch();
	const handleAddClick=()=>{
		dispatch(addToCart(product));
	}
	const handleRemoveClick= ()=>{
		dispatch(removeFromCart(product));
	}
	if(!isPresentInCart){
			return (<button className="btn btn-outline-success d-block w-100" onClick={handleAddClick} >
	     	Add To Cart
	</button>)
	}else return (<button className="btn btn-outline-danger d-block w-100" onClick={handleRemoveClick}  >
	   Remove From Cart
</button>)
	}

export default ProductButton;
