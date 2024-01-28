import React from "react";
import Section from "../Section/Section";
import Logo from "../../../../public/logo.svg";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white">
			<Section className="flex justify-between items-center py-6">
				<Image src={Logo.src} alt="Logo" width={40} height={40} />
				<span>DropshippingApi © 2024</span>
			</Section>
		</footer>
	);
};

export default Footer;
