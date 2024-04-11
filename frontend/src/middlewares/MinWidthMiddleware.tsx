'use client'
import useWindowDimensions from "@/hooks/useWindowDimensions";
import styles from './Middleware.module.scss';

interface MinWidthMiddlewareProps {
	children: any
}

const MinWidthMiddleware = ({children}: MinWidthMiddlewareProps) => {
	const { width } = useWindowDimensions();

	if (width !== -1 && width <= 1020) {
		return <div className="w-full h-full bg-slate-950 flex justify-center items-center">
			<p className="text-xl text-white text-center">Наразі ми не підтримуємо розширення менше 1020 пікселів</p>
		</div>
	}

	return <div className={styles.min_width}>
		{children}
	</div>;
}

export default MinWidthMiddleware
