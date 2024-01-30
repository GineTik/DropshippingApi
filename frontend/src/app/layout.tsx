import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/Header/Header";
import Footer from "@/components/Common/Footer/Footer";

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full">
			<body
				className={`${montserrat.className} h-full bg-white dark:bg-zinc-900 flex flex-col`}
			>
				<Header />
				<main className="w-full flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
