import React from "react";
import CategorySelector from "./CategorySelector";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import { useLocation, useNavigate } from "react-router-dom";
function NavBar(props) {
	const nav = useNavigate();
	const {pathname}=useLocation();
	const handleHomeNavigation = () => {
		nav("/");
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
			<div className="container-fluid px-md-5">
				<span
					onClick={handleHomeNavigation}
					id="name"
					className="navbar-brand fw-bold pointer"
				>
					{props.title}
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarSupportedContent"
				>
					{pathname==='/' && <><CategorySelector />
						<SearchBar /></>}
					<CartButton />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
