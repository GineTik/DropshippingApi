import React from "react";
import Authentication from "./Authentication";
import Image from "next/image";
import Section from "../Section/Section";
import Logo from "../../../../public/logo.svg";

const Header = () => {
	return (
		<Section className="flex mt-5">
			<Image src={Logo.src} alt="Logo" width={40} height={40} />
			<div className="ml-auto">
				<Authentication />
			</div>
		</Section>
	);
};

export default Header;
