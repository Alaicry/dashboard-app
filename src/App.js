import { TheHeader } from "components/TheHeader";
import { FilterPanel } from "features/filter/FilterPanel";
import { JobList } from "features/position/JobList";

function App() {
	return (
		<>
			<TheHeader />
			<div className="container">
				<FilterPanel />
				<JobList />
			</div>
		</>
	);
}

export default App;
