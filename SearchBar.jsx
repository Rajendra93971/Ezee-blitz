import React from "react";
import { useState } from "react";
function SearchBar() {
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleChange = (e) => {
		setText(e.target.value);
	};
	console.log(text);
	return (
		<form onSubmit={handleSubmit} className="d-flex ms-md-0 ms-lg-3">
			<input
				className="form-control ms-md-auto me-2"
				type="search"
				placeholder="Search Products"
				onChange={handleChange}
				value={text}
			/>
		</form>
	);
}

export default SearchBar;
