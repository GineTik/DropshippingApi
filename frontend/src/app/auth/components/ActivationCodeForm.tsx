import { Buttons } from '@/components/buttons'
import { Inputs } from '@/components/inputs'
import { useActions } from '@/hooks/useActions'
import { AuthService } from '@/services/auth.service'
import { getState } from '@/store/store'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import RouteConstants from '../../../../constants/RouteConstants'

const ActivationCode = () => {
	const { auth } = useSelector(getState)
	const { activateAccount } = useActions()
	const [code, setCode] = useState('')
	const router = useRouter()

	const { mutateAsync: activate, isPending } = useMutation<any, any>({
		mutationKey: ['activate'],
		mutationFn: () => AuthService.activate(Number(code)),
		onSuccess: () => {
			activateAccount()
			router.push(RouteConstants.Account)
		},
		onError: (err) => {
			toast.error(err.response?.data.message)
		}
	})

	return (
		<form className="flex flex-col gap-3 w-72 text-white">
			<h4>Введіть код</h4>
			<Inputs.Default
				placeholder="999999"
				type="number"
				value={code}
				onChange={(e) => setCode(e.target.value)}
			/>
			<Buttons.Form onClick={() => activate()}>
				Підтвердити
			</Buttons.Form>

			<span className="text-gray-500 text-sm w-64">
				Код був відправлений на почту {auth.user?.email}
			</span>
		</form>
	)
}

export default ActivationCode
