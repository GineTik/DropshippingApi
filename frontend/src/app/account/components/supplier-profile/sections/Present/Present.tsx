import { Buttons } from "@/components/buttons"
import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import { HeartIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"
import Link from "next/link"
import blocks from '../../../../../../components/Blocks.module.scss'
import styles from "./Present.module.scss"

const Present = (supplier: SupplierSettings) => {
  return (
    <Section>
			<div className={styles.present}>
				<div>
					<h1 className={styles.present__title}>{supplier.publicName}</h1>
					
					<div className={styles.present__buttons}>
						<Buttons.Icon><ThumbsUpIcon /></Buttons.Icon>
						<Buttons.Icon><ThumbsDownIcon /></Buttons.Icon>
						<Buttons.Icon>
							<HeartIcon />
							<span>До улюблених</span>
						</Buttons.Icon>
					</div>

					{supplier.description && <p className={styles.present__p}>{supplier.description}</p>}

					<div className={styles.present__parameters}>
						<div>
							<span className={styles.parameters__title}>Ім'я в АПІ:</span> 
							<span className={styles.parameters__value}>{supplier.apiName}</span>
						</div>
						{supplier.tags && supplier.tags.length > 0 && <div>
							<span className={styles.parameters__title}>Теги:</span> 
							<span className={styles.parameters__value}>
								{supplier.tags.map((o, i) => 
									<><span>{o.name}</span>{i != supplier.tags.length - 1 && ','} </>
								)}
							</span>
						</div>}
						{supplier.links && supplier.links.length > 0 && <div className={styles.present__links}>
							<span className={styles.parameters__title}>Силки:</span> 
							<span className={styles.parameters__value}>
								{supplier.links.map((o, i) => 
									<><Link href={o.url}>{o.name}</Link>{i != supplier.links.length - 1 && ','} </>
								)}
							</span>
						</div>}
					</div>

					<div className={styles.present__footer}>
						<Buttons.Present>Перейти до товарів</Buttons.Present>
					</div>
				</div>
				<div>
					<div className={styles.present__statistics}>
						<div>
							<span className={styles.statistics__title}>Кількість товарів</span>
							<span className={styles.statistics__value}>11576 товарів</span>
						</div>
						<div>
							<span className={styles.statistics__title}>Останнє оновлення товарів</span>
							<span className={styles.statistics__value}>{formatDate(supplier.offersUpdatedAtUtc)}</span>
						</div>
					</div>
					<div className={styles.blocks}>
						<div className={`${blocks.block_gray} w-[220px] h-[280px]`}>
							<h5 className={styles.block__title}>Викачати товари</h5>
							<p className={`${blocks.block__p} w-[80%]`}>Викачайте товари, які вам потрібні у вигляді файлу</p>
							<Buttons.Secondary className={blocks.block__button}>Перейти</Buttons.Secondary>
						</div>
						<div className={`${blocks.block_blue} w-[220px] h-[280px]`}>
							<h5 className={styles.block__title}>Використати АПІ</h5>
							<p className={`${blocks.block__p} w-2/3`}>Використовуйте АПІ для своїх потреб</p>
							<Buttons.Light className={blocks.block__button}>Перейти</Buttons.Light>
						</div>
					</div>
				</div>
			</div>
		</Section>
  )
}

const formatDate = (date: Date) => {
	date = new Date(date);
	const yyyy = date.getFullYear();
	let MM: any = date.getMonth() + 1; // Months start at 0!
	let dd: any = date.getDate();

	let ss: any = date.getSeconds();
	let mm: any = date.getMinutes();
	let hh: any = (Math.abs(date.getTimezoneOffset())/60) + date.getHours();

	if (dd < 10) dd = '0' + dd;
	if (MM < 10) MM = '0' + MM;
	if (ss < 10) ss = '0' + ss;
	if (mm < 10) mm = '0' + mm;
	if (hh < 10) hh = '0' + hh;

	const formattedToday = `${dd}.${MM}.${yyyy} ${hh}:${mm}:${ss}`;

	return formattedToday;
}

export default Present
