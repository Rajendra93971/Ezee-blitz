import { createSlice } from "@reduxjs/toolkit";
// import data from "../../../../ezee-blitz-app-pratice/src/data";
import data from "../../data"
import { uniq,sortBy } from "lodash";
import {loremIpsum} from "lorem-ipsum"
import {stringSimilarity as getScore} from "string-similarity-js"
const categories = uniq(data.map((product) => product.category)).sort();
const DEFAULT_CATEGORY = "All";
console.log(categories);
data.forEach((product)=>product.description=loremIpsum())
const initialState = {
	products: data,
	productsFromSearch: data,
	categories: [DEFAULT_CATEGORY, ...categories],
	selectedCategory:DEFAULT_CATEGORY,
	single:data[0],
	singleSimilarProducts:data.slice(0,4), 
	searchTerm:"",
};

export const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setSearchTerm:(state,action)=>{
			let {payload:searchTerm}=action;
			state.searchTerm=searchTerm;
			state.productsFromSearch=state.products;
			if(searchTerm.length>0){
			state.productsFromSearch.forEach((p)=>{
				p.simScore=getScore(`${p.name} ${p.category}`,state.searchTerm)
			});
			state.productsFromSearch= sortBy(state.productsFromSearch,"simScore").reverse();
		}
		},
		setSelectedCategory:(state,action)=>{
			let{payload:selectedCategory}=action;
			state.selectedCategory=selectedCategory;
			state.searchTerm="";
			if(selectedCategory===DEFAULT_CATEGORY)
				state.productsFromSearch=state.products;
			else{
			state.productsFromSearch=state.products.filter((p)=>p.category===selectedCategory)
			}
		},
		setSingleProduct:(state,action)=>{
			let {payload:id} =action;
			state.single=state.products.find((p)=>p.id===Number(id));
			state.singleSimilarProducts=state.products.filter((p)=>p.category===state.single.category && p.id!=state.single.id)
		},
	}
});
export const { setSearchTerm,setSelectedCategory ,setSingleProduct} = productSlice.actions;
export default productSlice.reducer;
