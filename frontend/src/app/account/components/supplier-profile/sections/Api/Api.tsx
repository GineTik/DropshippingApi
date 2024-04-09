import { Code } from "@/app/api/components/code/Code"
import { Buttons } from "@/components/buttons"
import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import { OffersService } from "@/services/user/offers.service"
import { useQuery } from "@tanstack/react-query"
import { MoveLeft } from "lucide-react"
import styles from "./Api.module.scss"

const Api = (supplier: SupplierSettings) => {
  	const { data: firstOffer } = useQuery<any>({
		queryKey: [`get-first-of-offers-${supplier.id}`],
		queryFn: () => OffersService.getFirst(supplier.id),
	})
	console.log(firstOffer?.data)

	return (
		<div className={styles.wrapper}>
			<Section className={styles.section}>
				<div>
					<Code.Object className={styles.section__code} object={firstOffer?.data} />
				</div>
				<div>
					<h2 className={styles.section__title}>АПІ - як <span className={styles.title__emphasis}>інтегрувати</span> товари у ваш інтернет-магазин?</h2>
					<p className={styles.section__p}>Використовуючи кінцеві точки нашого АПІ ви можете отримувати товари відсортованими та за потрібними вам фільтрами.</p>
					<p className={styles.section__fields}><MoveLeft strokeWidth={1} /> Поля товара цього поставщика</p>
					<Buttons.PrimaryDark>Детальніше</Buttons.PrimaryDark>
				</div>
			</Section>
		</div>
	)
}

export default Api
