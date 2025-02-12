import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuantity} from "../../features/cart/cartSlice";
import Price from "../extra/Price";
function CartItem(props) {
	const { item } = props;
	const dispatch=useDispatch();
	const handleClick=(qty)=>{
		dispatch(setQuantity({item,qty}));
	}
	return (
		<li className="list-group-item">
			<div className="my-0 d-flex justify-content-between align-items-center">
				<span className="fw-bolder fs-6 me-auto">
					{item.name} (<Price value={item.price}/>)
				</span>
				<div className="btn-group">
					<button className="btn border" onClick={()=>{
						handleClick(-1)
					}}>-</button>
					<button className="btn border" disabled>
					{item.quantity}
					</button>
					<button className="btn border" onClick={()=>{
						handleClick(1)
					}}>+</button>
				</div>
			</div>
			<p className="text-muted mb-0 col-3 w-100 description">
				{item.description}
			</p>
		</li>
	);
}

export default CartItem;
