import ApiSection from '@/app/api/components/Section/Section'
import H3 from '@/components/headings/H3'
import H4 from '@/components/headings/H4'
import { Code } from '../../../components/code/Code'
import styles from './Page.module.scss'

const FiltrationPage = () => {
	const generalFieldsOfOffer = {
		id: 1,
		title: 'Найкраще АПІ для дропшиппінгу',
		fields: { 'унікальні поля в залежності від постачальника': '...' },
		images: ['силки на зображення']
	}

	const offerForExamples = {
		id: 1,
		title: 'Найкраще АПІ для дропшиппінгу',
		fields: {
			description: 'Опис цього продукту',
			categories: [],
			tags: [],
			price: 100,
			currency: 'ua',
			currencySymbol: '₴'
		},
		images: ['url', 'url', 'url']
	}

	return (
		<>
			<H3>Фільтрування</H3>
			<ApiSection>
				<p>
					Для отримання товарів для любих ситуацій, ви можете відфільтрувати
					товари за любим полем, як для отримання усіх товарів так і для
					отримання одного товара
				</p>
				<p>
					Додати фільтрування до вашого запиту можна за допомогою параметрів у
					силці. Ключом буде назва поля (при цьому підтримається вкладеність,
					приклад буде далі) та тип порівняння а значенням буде вираз для
					фільтрації.
				</p>
				<p>
					Вигляд параметру для фільтрації{' '}
					<Code.String>fieldName[comparisonType] = value</Code.String>.
				</p>
			</ApiSection>
			<ApiSection>
				<H4>Поля для фільтрації</H4>
				<p>
					Як було сказано раніше, можна фільтрувати за любим полем товара, але
					як зрозуміти які поля містить товар? Більшість полів буде
					відрізнятись, в залежності від постачальника (щоб детально взнати поля
					для фільтрації для конкретного постачальника, знайдіть його в меню з
					ліва в групі "Особливості роботи з")
				</p>
				<p>
					Для початку давайте подивимось, як виглядатимуть основні поля, які
					будуть присутні незалежно до постачальника:
				</p>
				<Code.Object object={generalFieldsOfOffer} />
			</ApiSection>
			<ApiSection>
				<H4>Ключові слова</H4>
				<p>Доступні типи порівняння та їх значення (регістр значення не має)</p>
				<div>
					<b className="block">Якщо значенням поля є строка:</b>
					<ul className={styles.examples}>
						<li>
							<Code.String>[$equal]</Code.String> - отримаємо усі товари, які
							містять в імені слово "ялинка"
						</li>
						<li>
							<Code.String>[$notEqual]</Code.String> - отримаємо усі товари з
							тегами discount та new, при цьому важливо зауважити що tags це
							масив а fields - це набір усіх полів товара.
						</li>
						<li>
							<Code.String>[$contains]</Code.String> - отримаємо усі товари з
							тегами discount та new, при цьому важливо зауважити що tags це
							масив а fields - це набір усіх полів товара.
						</li>
						<li>
							<Code.String>[$startWith]</Code.String> - отримаємо усі товари з
							тегами discount та new, при цьому важливо зауважити що tags це
							масив а fields - це набір усіх полів товара.
						</li>
						<li>
							<Code.String>[$endWith]</Code.String> - отримаємо усі товари з
							тегами discount та new, при цьому важливо зауважити що tags це
							масив а fields - це набір усіх полів товара.
						</li>
					</ul>
				</div>

				<div>
					<b className="block">Якщо значенням поля є число:</b>
					<ul className={styles.examples}>
						<li>
							<Code.String>[$equal]</Code.String> - отримаємо усі товари, які
							містять в імені слово "ялинка"
						</li>
						<li>
							<Code.String>[$notEqual]</Code.String> - отримаємо усі товари з
							тегами discount та new, при цьому важливо зауважити що tags це
							масив а fields - це набір усіх полів товара.
						</li>
						<li>
							<Code.String>[$min]</Code.String> - отримаємо усі товари з тегами
							discount та new, при цьому важливо зауважити що tags це масив а
							fields - це набір усіх полів товара.
						</li>
						<li>
							<Code.String>[$max]</Code.String> - отримаємо усі товари з тегами
							discount та new, при цьому важливо зауважити що tags це масив а
							fields - це набір усіх полів товара.
						</li>
						<li>
							<Code.String>[$range]</Code.String> - отримаємо усі товари з
							тегами discount та new, при цьому важливо зауважити що tags це
							масив а fields - це набір усіх полів товара.
						</li>
					</ul>
				</div>
			</ApiSection>
			<ApiSection>
				<H4>Приклади</H4>
				<p>
					Для прикладу нам потрібно розуміти структуру товара, який ми хочемо
					отримати. Тож давайте створимо довільні поля:
				</p>
				<Code.Object object={offerForExamples} />
				<p>
					Щож, тепер давайте подивимось на декілька прикладів:
					<ul className={styles.examples}>
						<li>
							<Code.String>title[$contains] = ялинка</Code.String> - отримаємо
							усі товари, які містять в імені слово "ялинка"
						</li>
						<li>
							<Code.String>
								fields.tags[$contains] = discount[$and]new
							</Code.String>{' '}
							- отримаємо усі товари з тегами discount та new, при цьому важливо
							зауважити що tags це масив а fields - це набір усіх полів товара.
						</li>
					</ul>
				</p>
			</ApiSection>
		</>
	)
}

export default FiltrationPage
