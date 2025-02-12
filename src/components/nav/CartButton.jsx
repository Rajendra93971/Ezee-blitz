import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function CartButton() {
	const nav = useNavigate();
	const handleCartClick = () => {
		nav("/cart");
	};
	const {cartItems:items} = useSelector((state)=>state.carts);
	const bgColorName = items.length === 0 ? "none" : "white";
	return (
		<button
			onClick={handleCartClick}
			type="button"
			className="btn btn-outline-success d-md-block mt-3 mt-lg-0"
		>
			<i className="bi bi-cart3"></i>
			<span className="mx-2">Checkout</span>
			<span className={`badge text-success bg-${bgColorName}`}>
				{items.length}
			</span>
		</button>
	);
}

export default CartButton;
