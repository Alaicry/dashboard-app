import { useDispatch } from "react-redux";
import { addFilter } from "features/filter/filterSlice";
import { usePositions } from "./usePositions";
import { useFetchPositions } from "./useFetchPositions";
import JobPosition from "./JobPosition";

const JobList = () => {
	useFetchPositions();
	const positions = usePositions();
	const dispatch = useDispatch();

	const handleAddFilter = (filter) => {
		dispatch(addFilter(filter));
	};

	return (
		<div className="job-list">
			{positions.map((item) => (
				<JobPosition
					key={item.id}
					handleAddFilter={handleAddFilter}
					{...item}
				/>
			))}
		</div>
	);
};

export default JobList;
