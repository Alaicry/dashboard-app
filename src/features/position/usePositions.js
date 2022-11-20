import { selectFilters } from "features/filter/filterSlice";
import { useSelector } from 'react-redux';
import { selectVisiblePositions } from "./positionSlice";

export const usePositions = () => {
	const currentFilters = useSelector(selectFilters);
	const positions = useSelector((state) =>
		selectVisiblePositions(state, currentFilters)
	);
	return positions;
};
