import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
	name: "@@position",
	initialState: [],
	reducers: {
		addPositions: (_, action) => action.payload,
	},
});

export const { addPositions } = positionSlice.actions;
export const positionReducer = positionSlice.reducer;

export const selectVisiblePositions = (state, filters = []) => {
	if (filters.length === 0) return state.positions;
	return state.positions.filter((pos) => {
		const positionFilters = [].concat(
			pos.role,
			pos.level,
			...pos.languages,
			...pos.tools
		);
		return filters.every((filter) => positionFilters.includes(filter));
	});
};
