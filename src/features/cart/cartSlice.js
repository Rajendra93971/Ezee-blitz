import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  cartNumbers: { subtotal: 0, shipping: 0, tax: 0, total: 0 },
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload: item } = action;
      state.cartItems.push({...item,quantity:1})
    },
    removeFromCart: (state, action) => {
      const { payload: item } = action;
      let index=state.cartItems.findIndex((cartItem)=>cartItem.id===item.id)
      state.cartItems.splice(index,1);
    },
    setQuantity:(state,action)=>{
       const{item,qty}=action.payload;
       state.cartItems= state.cartItems.map((cartItem)=>{
            return cartItem.id===item.id ? {...cartItem,quantity:cartItem.quantity+qty}:cartItem}
        )
        state.cartItems=state.cartItems.filter((cartItem)=>cartItem.quantity> 0)
        },
      setCartNumbers:(state)=>{
        let subtotal=0,shipping=0,tax=0,total=0;
      state.cartItems.forEach((item) => {
        subtotal += item.price*item.quantity;
        shipping+=item.quantity*40;
      });
      tax = ((subtotal * 18) / 100);
     
     total =( subtotal + tax + shipping).toFixed(2);
     state.cartNumbers={subtotal,shipping,tax,total}
   
      }
  }

})
export const { addToCart, removeFromCart,setQuantity,setCartNumbers } = cartSlice.actions;
export default cartSlice.reducer;
