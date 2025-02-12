import React from "react";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { setSearchTerm } from "../../features/product/productSlice";
function SearchBar() {
	const dispatch=useDispatch();
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleChange = (e) => {
		dispatch(setSearchTerm(e.target.value))
	};
	const {searchTerm}=useSelector((state=>state.products
	))
	return (
		<form onSubmit={handleSubmit} className="d-flex ms-md-0 ms-lg-3">
			<input
				className="form-control ms-md-auto me-2"
				type="search"
				placeholder="Search Products"
				onChange={handleChange}
				value={searchTerm}
			/>
		</form>
	);
}

export default SearchBar;
