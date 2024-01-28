import Sidebar from "@/components/Common/Sidebar/Sidebar";
import React from "react";

interface IProps {
	children: React.ReactNode;
}

const layout = ({ children }: IProps) => {
	return (
		<html lang="en" className="h-full">
			<body className={`flex h-full bg-slate-50 dark:bg-zinc-900`}>
				<Sidebar />
				<main className="w-full p-6">{children}</main>
			</body>
		</html>
	);
};

export default layout;
