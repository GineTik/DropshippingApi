import ApiSection from '@/app/api/components/section/ApiSection'
import { Code } from '../../../components/code/Code'
import styles from './Page.module.scss'

const FiltrationPage = () => {
	const generalFieldsOfOffer = {
		id: 1,
		title: 'Найкраще АПІ для дропшиппінгу',
		fields: { 'унікальні поля в залежності від постачальника': '...' },
		images: ['силки на зображення']
	}

	const offerForexamples_list = {
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
			<h3>Фільтрування</h3>
			<ApiSection>
				<p>
					Для отримання товарів для любих ситуацій, ви можете відфільтрувати
					товари за любим полем, як для отримання усіх товарів так і для
					отримання одного товара.
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
				<h4>Поля для фільтрації</h4>
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
				<p>
					Важливо зауважити, що в запит можна додати декілька фільтрів
					(параметрів для фільтрації) та навіть для одного і того же поля.
				</p>
			</ApiSection>
			<ApiSection>
				<h4>Фільтрація в залежності від типу значення</h4>
				<p>
					Особливості в типах порівняннях та інших деталях в залежності від типу
					даних за фільтрованим полем (регістр значення не має)
				</p>
				<p>
					Важливо зазначити, що в значення ви також можете додати ключове слово{' '}
					<Code.String>[$or]</Code.String>. Як для рядка так і для числа.
					<br />
					Наприклад,{' '}
					<Code.String>
						fieldName[comparisonType] = value1[$or]value2
					</Code.String>
				</p>
				<div className={styles.examples_block}>
					<b className="block">Якщо значенням поля є строка</b>
					<p>
						Поля з типом значення як строка легко фільтруються за допомогою
						виразу <Code.String>fieldName[comparisonType] = value</Code.String>.
						Але <Code.String>comparisonType</Code.String> має свої значення.
						Типи порівняння:
					</p>
					<ul className={styles.examples_list}>
						<li>
							<Code.String>[$equal]</Code.String> - перевіряє, чи значення
							еквівалентне наданому рядку (значення параметру).
						</li>
						<li>
							<Code.String>[$notEqual]</Code.String> - перевіряє, чи значення не
							еквівалентне наданому рядку (значення параметру).
						</li>
						<li>
							<Code.String>[$contains]</Code.String> - перевіряє, чи містить
							поле наданий рядок.
						</li>
						<li>
							<Code.String>[$startWith]</Code.String> - перевіряє, чи поле
							починається з вказаного рядка.
						</li>
						<li>
							<Code.String>[$endWith]</Code.String> - перевіряє, чи поле
							закінчується з вказаного рядка.
						</li>
					</ul>
					<p>
						Для строки також можна взнати її довжину -{' '}
						<Code.String>title.length[$min] = 10</Code.String>. При цьому
						фільтрувати довжину потрібно як число.
					</p>
				</div>

				<div className={styles.examples_block}>
					<b className="block">Якщо значенням поля є число або дата:</b>
					<p>Типи порівняння:</p>
					<ul className={styles.examples_list}>
						<li>
							<Code.String>[$equal]</Code.String> - перевіряє, чи значення поля
							дорівнює наданому числу.
						</li>
						<li>
							<Code.String>[$notEqual]</Code.String> - перевіряє, чи значення
							поля не дорівнює наданому числу.
						</li>
						<li>
							<Code.String>[$min]</Code.String> - перевіряє, чи значення поля є
							<b className="font-medium"> більше або дорівнює</b> наданому
							числу.
						</li>
						<li>
							<Code.String>[$max]</Code.String> - перевіряє, чи значення поля є
							<b className="font-medium"> менше або дорівнює</b> наданому числу.
						</li>
						<li>
							<Code.String>[$range]</Code.String> - наприклад{' '}
							<Code.String>
								fields.price[$range] = 100,5000 // min,max
							</Code.String>
							, перевіряє, чи значення поля входить в рамки наданого діапазона
							чисел, включно з наданими числами.
						</li>
						<li>
							<Code.String>[$order]</Code.String> - приймає тільки{' '}
							<Code.String>1</Code.String> (за зростанням) або{' '}
							<Code.String>-1</Code.String> (за спаданням) та сортує за цим
							полем результат
						</li>
					</ul>
				</div>

				<div className={styles.examples_block}>
					<b className="block">Якщо значенням поля є массив:</b>
					<p>
						Якщо вам потрібно відфільтрувати масив, то це можна зробити за
						допомогою ключових слів:
					</p>
					<ul className={styles.examples_list}>
						<li>
							<Code.String>$</Code.String> або <Code.String>$all</Code.String> -
							наприклад, <Code.String>fields.array.$[...]</Code.String>,
							використовуються, коли потрібно, щоб усі значення у масиві
							відповідали зазначеному виразу/значенню.
						</li>
						<li>
							<Code.String>$any</Code.String> - наприклад,{' '}
							<Code.String>fields.array.$any[...]</Code.String>, якщо любий зі
							значень підходить під вираз фільтрації, то і масив буде придатним.
						</li>
					</ul>
					<p>
						При цьому <b>важливо зауважити</b>, що тип порівняння буде залежати
						від типу значень цього масива.
					</p>
					<p>
						Для масива також можна взнати довжину -{' '}
						<Code.String>fields.tags.length[$min] = 3</Code.String>. При цьому
						фільтрувати довжину потрібно як число.
					</p>
				</div>

				<div className={styles.important_message}>
					<div>
						Важливо зазначити, що в значення ви також можете додати ключове
						слово <span className="text-nowrap">"[$or]"</span>. Як для рядка так
						і для числа. Детальніше дивіться в прикладах.
					</div>
				</div>
			</ApiSection>
			<ApiSection>
				<h4>Приклади</h4>
				<p>
					Для прикладу нам потрібно розуміти структуру товара, який ми хочемо
					отримати. Тож давайте створимо довільні поля:
				</p>
				<Code.Object object={offerForexamples_list} />
				<p>
					Щож, тепер давайте подивимось на декілька прикладів:
					<ul className={styles.examples_list}>
						<li>
							<Code.String>title[$contains] = ялинка</Code.String> - отримаємо
							усі товари, які містять в імені слово "ялинка"
						</li>
						<li>
							<Code.String>
								fields.tags.$any[$equal] = discount[$or]new
							</Code.String>{' '}
							- (пробіли не обов'язкові), отримаємо усі товари де є теги
							discount або new. Якщо нам потрібні товари, де є і discount, і new
							теги одночасно, нам потрібно додати 2 параметра для фільтрації.{' '}
							<Code.String>fields.tags.$any[$equal] = discount</Code.String> та{' '}
							<Code.String>fields.tags.$any[$equal] = new</Code.String>
						</li>
					</ul>
				</p>
			</ApiSection>
		</>
	)
}

export default FiltrationPage
