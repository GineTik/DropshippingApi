import Header from "@/components/Common/Header/Header";
import Present from "@/components/Home/Present/Present";
import React from "react";
import HowItWorks from "./HowItWorks/HowItWorks";
import Suppliers from "./Suppliers/Suppliers";

const HomePage = () => {
	return (
		<>
			<Present />
			<HowItWorks />
			<Suppliers />
		</>
	);
};

export default HomePage;
