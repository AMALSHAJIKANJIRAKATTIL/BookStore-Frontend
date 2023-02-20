import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer ,addToCartReducer} from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart:addToCartReducer,
});
export default reducers;
