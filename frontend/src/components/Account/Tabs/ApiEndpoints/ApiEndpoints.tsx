import React from "react";
import GetRange from "./Endpoints/GetRange";
import GetOne from "./Endpoints/GetOne";

const ApiEndpoints = () => {
	return (
		<>
			<div className="space-y-3">
				<div className="h-2"></div>
				<GetRange />
				<div className="h-3"></div>
				<GetOne />
			</div>
		</>
	);
};

export default ApiEndpoints;
