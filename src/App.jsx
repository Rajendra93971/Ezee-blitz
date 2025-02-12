import React, { useEffect } from "react";
import NavBar from "./components/nav/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Cart from "./pages/Cart";
import { useDispatch,useSelector } from "react-redux";
import { setCartNumbers } from "./features/cart/cartSlice";
function App() {
	const dispatch=useDispatch();
	const {cartItems}=useSelector((state)=>state.carts);
	useEffect(()=>{
		dispatch(setCartNumbers());
	},[ cartItems])
	return (
		<div className="wrapper bg-dark text-white">
			<NavBar title="Ezee-Cart-Blitz" />
			<div className="container mt-5 py-5 px-3 px-md-5">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/single/:id" element={<Single />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
