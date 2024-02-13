import ScaledButton from '@/components/buttons/ScaledButton'
import { AllowedHostDto } from '@/dtos/user/allowed-hosts/allowed-host.dto'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import { AllowedHostsService } from '@/services/user/allowed-hosts.service'
import { Disclosure, Transition } from '@headlessui/react'
import { CheckCheck, ChevronDown, File, Pen, Trash } from 'lucide-react'
import { useState } from 'react'
import HostEditingDialog from './HostEditingDialog'

interface AllowedHostItemProps {
	allowedHost: AllowedHostDto
	refetch: () => void
}

const iconSize = 20

const AllowedHostItem = ({ allowedHost, refetch }: AllowedHostItemProps) => {
	const { name, description, host } = allowedHost
	const [copied, setCopied] = useState(false)
	const [editing, setEditing] = useState(false)

	const { mutateAsync: deleteAsync } = useTypedMutation({
		mutationKey: ['delete-api-key'],
		mutationFn: () => AllowedHostsService.delete(host),
		onSuccess: () => {
			refetch()
		}
	})

	const copyApiKey = () => {
		navigator.clipboard.writeText(host)
		setCopied(true)
		setTimeout(() => setCopied(false), 1000)
	}

	return (
		<>
			<HostEditingDialog
				allowedHost={allowedHost}
				refetch={refetch}
				editing={editing}
				close={() => setEditing(false)}
			/>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className="flex items-center w-full text-left px-4 py-2 bg-gray-100 rounded-xl">
							{name}
							<span className="ml-auto">
								<ChevronDown size={24} />
							</span>
						</Disclosure.Button>
						<Transition
							show={open}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Disclosure.Panel className="flex gap-7 px-5 pt-4 pb-8 rounded-2xl">
								<div>
									<h5>Хост</h5>
									<span>{host}</span>

									<h5 className="mt-4">Опис</h5>
									<span>{description === '' ? 'Немає' : description}</span>
								</div>
								<div className="flex items-start ml-auto -mr-6 text-gray-800">
									<ScaledButton
										tooltip="Копіювати хост"
										className="p-3 relative"
										onClick={copyApiKey}
									>
										{copied ? (
											<CheckCheck
												className="animate-disappear"
												size={iconSize}
											/>
										) : (
											<File className="animate-show" size={iconSize} />
										)}
									</ScaledButton>
									<ScaledButton
										tooltip="Оновити дані"
										className="p-3"
										onClick={() => setEditing(true)}
									>
										<Pen size={iconSize} />
									</ScaledButton>
									<ScaledButton
										isDanger
										className="p-3"
										onClick={() => deleteAsync()}
									>
										<Trash size={iconSize} />
									</ScaledButton>
								</div>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</>
	)
}

export default AllowedHostItem