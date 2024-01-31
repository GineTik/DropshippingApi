"use client";
import React from "react";
import Section from "../Common/Section/Section";
import AccountItem from "./AccountItem";
import H2 from "../Common/Headings/H2";
import BlueButton from "../Common/Button/BlueButton";
import H4 from "../Common/Headings/H4";
import { Tab } from "@headlessui/react";
import AccountTab from "./AccountTab";
import AccountTabPanel from "./AccountTabPanel";
import ApiKeys from "./Tabs/ApiKeys/ApiKeys";
import ApiEndpoints from "./Tabs/ApiEndpoints/ApiEndpoints";

const AccountPage = () => {
	return (
		<Section className="max-w-[800px]">
			<H2 className="mb-10 mt-16">Доступні дії</H2>
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

			<div className="mt-12">
				<H4 className="sm:hidden ml-3 mb-3">
					Почни пробний період та оціни сервіс
				</H4>
				<div className="flex gap-5 lg:mt-6 mb-10 items-center">
					<div className="bg-blue-50 p-5 rounded-full">
						<span className="font-bold mr-2">Free</span>
						<span className="line-through text-blue-300 font-bold">
							10$
						</span>
					</div>
					<span className="max-sm:hidden">
						Почни пробний період та оціни сервіс
					</span>
					<BlueButton className="max-sm:w-full max-sm:flex max-sm:justify-center sm:ml-auto">
						Почати{" "}
						<span className="max-lg:hidden ml-1">
							пробний період
						</span>
					</BlueButton>
				</div>
			</div>

			<div>
				<Tab.Group>
					<Tab.List className="flex flex-wrap">
						<AccountTab>АПІ ключі</AccountTab>
						<AccountTab>АПІ (кінцеві точки)</AccountTab>
						<AccountTab>Файли</AccountTab>
						<AccountTab className="flex gap-2 items-center">
							Усі замовлення{" "}
							<div className="bg-blue-100 rounded-full px-2">
								5
							</div>
						</AccountTab>
					</Tab.List>
					<Tab.Panels>
						<AccountTabPanel>
							<ApiKeys />
						</AccountTabPanel>
						<AccountTabPanel>
							<ApiEndpoints />
						</AccountTabPanel>
						<AccountTabPanel>Content 3</AccountTabPanel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</Section>
	);
};

export default AccountPage;
