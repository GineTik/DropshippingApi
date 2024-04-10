import { toast } from 'react-toastify'

export const pageInDeveloping = (pageName: string) => {
	toast.error(`Сторіка "${pageName}" в розробці`)
}

export const functionalInDeveloping = (functional: string) => {
	toast.error(`Функціонал "${functional}" в розробці`)
}
