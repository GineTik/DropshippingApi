import styles from './ApiSection.module.scss'

interface ApiSectionProps {
	children: any
}

const ApiSection = ({ children }: ApiSectionProps) => {
	return <div className={styles.section}>{children}</div>
}

export default ApiSection
