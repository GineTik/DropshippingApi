"use client";
import React from "react";
import Section from "../Common/Section/Section";
import H4 from "../Common/Headings/H4";
import BlueButton from "../Common/Button/BlueButton";
import BorderedButton from "../Common/Button/BorderedButton";
import Link from "next/link";
import HrWithText from "./Hr/Hr";
import GoogleLogo from "../../../public/GoogleLogo.webp";
import Image from "next/image";
import RouteConstants from "../../../constants/RouteConstants";
import Input from "./Input/Input";

const LoginPage = () => {
	return (
		<Section className="flex justify-center items-center h-full">
			<form action="" className="flex flex-col gap-3 w-72 text-sm">
				<H4 className="ml-4">Вхід</H4>
				<Input placeholder="Почта" type="email" />
				<Input placeholder="Пароль" type="text" />
				<BlueButton className="text-center" onClick={login}>
					Увійти
				</BlueButton>

				<HrWithText />

				<BorderedButton>
					<Image
						src={GoogleLogo.src}
						alt="GoogleLogo"
						width={20}
						height={20}
					/>
					<span className="ml-3">Google</span>
				</BorderedButton>
				<Link
					href={RouteConstants.Registration}
					className="text-gray-400"
				>
					Ще не маю <span className="text-blue-500">акаунту</span>!
				</Link>
			</form>
		</Section>
	);
};

const login = () => {
	console.log("Login");
};

export default LoginPage;
