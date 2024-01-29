import React from "react";
import Section from "../Section/Section";
import Logo from "../../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import RouteConstants from "../../../../constants/RouteConstants";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white">
			<Section className="flex justify-between items-center py-6">
				<Link href={RouteConstants.Home}>
					<Image src={Logo.src} alt="Logo" width={40} height={40} />
				</Link>
				<span>DropshippingApi © 2024</span>
			</Section>
		</footer>
	);
};

export default Footer;
