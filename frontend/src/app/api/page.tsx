import ApiEndpoints from "@/components/Account/Tabs/ApiEndpoints/ApiEndpoints";
import Section from "@/components/Common/Section/Section";
import React from "react";

const page = () => {
	return (
		<Section className="max-w-[800px] pt-6 pb-6 md:pt-20 md:pb-20">
			<ApiEndpoints />
		</Section>
	);
};

export default page;
