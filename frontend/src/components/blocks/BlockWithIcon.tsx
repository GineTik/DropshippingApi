import { SparkleIcon } from 'lucide-react'
import styles from './Blocks.module.scss'

const BlockWithIcon = () => {
	return (
		<div className={styles.banner_white}>
			<div>
				<SparkleIcon />
			</div>
			<h4></h4>
			<p></p>
		</div>
	)
}

export default BlockWithIcon
