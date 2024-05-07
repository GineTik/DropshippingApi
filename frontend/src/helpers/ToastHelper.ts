import { toast } from 'react-toastify'

export const pageInDeveloping = (pageName: string) => {
	toast.warning(`Сторіка "${pageName}" в розробці`)
}

export const functionalInDeveloping = (functional: string) => {
	toast.warning(`Функціонал "${functional}" в розробці`)
}

export const settingsInDeveloping = () => {
	toast.warning('Дане налаштування в розробці')
}
