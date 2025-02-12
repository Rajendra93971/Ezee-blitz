import React from "react";
import { useSelector } from "react-redux";
import Price from "../extra/Price";
function CartNumbers() {
	const {cartNumbers} =useSelector((state)=>state.carts)
	const items = [
		{ title: "Subtotal", price: cartNumbers.subtotal },
		{ title: "Shipping", price: cartNumbers.shipping },
		{ title: "tax", price: cartNumbers.tax },
		{ title: "Total (INR)", price: cartNumbers.total },
	];
	return (
		<div id="cart-numbers">
			<ul className="list-group mb-3">
				{items.map((item,index) => {
					return (
						<li className="list-group-item d-flex justify-content-between" key={index}>
							<span>{item.title}</span>
							<span className="text-muted"><Price value={item.price} decimals={2}/></span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default CartNumbers;
