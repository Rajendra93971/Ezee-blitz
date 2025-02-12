import React from "react";
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"
function CartBuyButton() {
	const navigate=useNavigate();
	 const buy = async () => {
		let result=await Swal.fire({title:"Do you want to place the order ? ",showDenyButton:true,confirmButtonText:"place order",
			denyButtonText:"Don't Place"
		})
		if(result.isConfirmed){
			await Swal.fire({
				title: "Done!",
				text: "Order placed successfully!",
				icon: "success"
			  });
			  navigate("/")
			  window.location.reload();
		}else if(result.isDenied)Swal.fire({
			title: "Order not placed",
			text: "",
			icon: "info"
		  });{

		}
	};
	return (
		<button
			onClick={buy}
			className="btn btn-success d-block w-100 fw-bold mt-3"
		>
			Buy Now
		</button>
	);
}
export default CartBuyButton;
