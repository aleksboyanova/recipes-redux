import { combineReducers } from "redux";

import DishesReducer from "./DishesReducer";

const allReducers = combineReducers({
    dishes: DishesReducer
});

export default allReducers;