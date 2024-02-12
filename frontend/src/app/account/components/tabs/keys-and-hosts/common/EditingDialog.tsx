import BlueButton from '@/components/buttons/BlueButton'
import ErrorMessage from '@/components/error-message/ErrorMessage'
import { Dialog, Transition } from '@headlessui/react'
import { AxiosError } from 'axios'
import { Fragment } from 'react'

interface EditingDialogProps {
	close: () => void
	editing: boolean
	children: any
	onSubmit: () => void
	isPending: boolean
	error: AxiosError<{ message: any }> | null
	title: string
}

const EditingDialog = ({
	close,
	editing,
	children,
	isPending,
	onSubmit,
	error,
	title
}: EditingDialogProps) => {
	return (
		<Transition appear show={editing} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={close}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<form
						onSubmit={(e) => {
							e.preventDefault()
							onSubmit()
						}}
						className="flex min-h-full items-center justify-center p-4 text-center"
					>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title as={Fragment}>
									<h4>{title}</h4>
								</Dialog.Title>

								<div className="my-5 flex flex-col gap-3">{children}</div>

								<div>
									<BlueButton onClick={onSubmit} isPending={isPending}>
										Оновити
									</BlueButton>
								</div>

								{error && <ErrorMessage className="mt-4">{error}</ErrorMessage>}

								<button className="hidden"></button>
							</Dialog.Panel>
						</Transition.Child>
					</form>
				</div>
			</Dialog>
		</Transition>
	)
}

export default EditingDialog
