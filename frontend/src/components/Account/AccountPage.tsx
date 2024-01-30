import React from "react";
import Section from "../Common/Section/Section";
import AccountItem from "./AccountItem";
import H2 from "../Common/Headings/H2";
import BlueButton from "../Common/Button/BlueButton";
import H4 from "../Common/Headings/H4";

const AccountPage = () => {
	return (
		<Section className="max-w-[800px]">
			<H2 className="mb-5 mt-16">Доступні дії</H2>
			<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-10">
				<AccountItem
					icon="KeyIcon"
					title="АПІ ключ"
					description="Ваші АПІ ключі, використовуючи які, ви можете звертатися до АПІ."
				/>
				<AccountItem
					icon="DocumentTextIcon"
					title="Скачуй файл вручну"
					description="Скачуй файл з набором товарів з вашого кабінета."
				/>
				<AccountItem
					icon="ArrowPathRoundedSquareIcon"
					title="Ваші замовлення"
					description="Зручно перевіряй товар та дані про клієнта. В одному місці."
				/>
			</div>
			<div className="hidden lg:block -mt-48 -ml-10 px-10 box-content w-full h-60 bg-blue-100 rounded-3xl z-0"></div>
			<div className="flex mt-6 items-center">
				<div className="bg-blue-50 p-5 rounded-full">
					<span className="font-bold mr-2">Free</span>
					<span className="line-through text-blue-300 font-bold">
						10$
					</span>
				</div>
				<span className="ml-5">
					Почни пробний період та оціни сервіс
				</span>
				<BlueButton className="ml-auto">
					Почати пробний період
				</BlueButton>
			</div>
		</Section>
	);
};

export default AccountPage;
