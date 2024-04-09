import { Code } from '@/app/api/components/code/Code'
import styles from './Errors.module.scss'

const ErrorsPage = () => {
	const error400 = {
		statusCode: 400,
		message: 'Помилка у вашому запиті, це тестове повідомлення'
	}

	return (
		<>
			<h2 className="mb-5">Можливі помилки</h2>
			<div className={styles.error_block}>
				<div className="code">
					<Code.Object object={error400} />
				</div>
				<div>
					<h3>Код 400</h3>
					<p>Цей код </p>
				</div>
			</div>
		</>
	)
}

export default ErrorsPage
