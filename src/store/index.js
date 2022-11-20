import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filter/filterSlice";
import { positionReducer } from "features/position/positionSlice";

export const store = configureStore({
	reducer: {
		filters: filterReducer,
		positions: positionReducer,
	},
	devTools: true,
});
