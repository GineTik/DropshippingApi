import H4 from "@/components/Common/Headings/H4";
import React from "react";
import Curl from "../Code/Curl";
import Code from "../Code/Code";
import CodeString from "../Code/String";
import Link from "next/link";

const GetOne = () => {
	const filterParameters = {
		title: "query // about query above",
		page: 1,
		pageCount: 12,
		"something characteristic": "query // about query above",
	};

	const result = {
		id: "int",
		title: "string",
		actualPrice: "decimal",
		oldPrice: "decimal",
		characteristics: {
			characteristic1: "string",
			characteristic2: "string",
			characteristic3: "string",
		},
		images: ["path", "path", "path"],
	};

	return (
		<>
			<H4>Отримати один товар</H4>
			<p>
				Для отримання усіх товарів від якогось поставщика ви можете
				використовувати наступну кінцеву точку.
			</p>
			<Curl
				method="GET"
				url="https://dropshipping.api.ua/api/{supplier}/offers/one"
				headers={{
					"x-dropshipping-api-key": "{api-key}",
				}}
			/>

			<p>
				Також можна фільтрувати за кожним полем.{" "}
				<Link href="#about-query" className="text-blue-500">
					Про "query".
				</Link>
			</p>
			<Code from={filterParameters} />

			<p>Структура результату:</p>
			<Code from={result} />
		</>
	);
};

export default GetOne;
