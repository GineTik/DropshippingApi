import React from "react";
import HeaderAuthentication from "./HeaderAuthentication";
import Image from "next/image";
import Section from "../Section/Section";
import Logo from "../../../../public/logo.svg";
import Link from "next/link";
import RouteConstants from "../../../../constants/RouteConstants";

const Header = () => {
	return (
		<Section className="flex mt-5 items-center">
			<Link href={RouteConstants.Home}>
				<Image src={Logo.src} alt="Logo" width={40} height={40} />
			</Link>
			<div className="ml-10 flex items-center max-sm:hidden">
				<Link
					href={RouteConstants.Api}
					className="hover:scale-110 transition"
				>
					Документація
				</Link>
			</div>
			<div className="ml-auto">
				<HeaderAuthentication />
			</div>
		</Section>
	);
};

export default Header;
