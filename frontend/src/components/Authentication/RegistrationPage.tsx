"use client";
import React from "react";
import H4 from "../Common/Headings/H4";
import Section from "../Common/Section/Section";
import Input from "./Input/Input";
import BlueButton from "../Common/Button/BlueButton";
import HrWithText from "./Hr/Hr";
import BorderedButton from "../Common/Button/BorderedButton";
import Image from "next/image";
import Link from "next/link";
import RouteConstants from "../../../constants/RouteConstants";
import GoogleLogo from "../../../public/GoogleLogo.webp";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const RegistrationPage = () => {
	return (
		<Section className="flex justify-center items-center h-full">
			<form action="" className="flex flex-col gap-3 w-72 text-sm">
				<H4 className="ml-4">Реєстрація</H4>
				<Input placeholder="Почта" type="email" />
				<Input placeholder="Пароль" type="text" />
				<Input placeholder="Підтвердіть пароль" type="text" />
				<BlueButton className="text-center">Зареєструватись</BlueButton>

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
				<Link href={RouteConstants.Login} className="text-gray-400">
					Вже маю <span className="text-blue-500">акаунт</span>!
				</Link>

				<ErrorMessage>Повідомлення про помилку</ErrorMessage>
			</form>
		</Section>
	);
};

export default RegistrationPage;
