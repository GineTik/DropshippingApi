import ScaledButton from '@/components/Buttons/ScaledButton'
import H5 from '@/components/Headings/H5'
import { ApiKeyDto } from '@/dtos/user/api-key/api-key.dto'
import { ApiKeysService } from '@/services/user/api-keys.service'
import { Disclosure, Transition } from '@headlessui/react'
import { useMutation } from '@tanstack/react-query'
import { CheckCheck, ChevronDown, File, RefreshCcw, Trash } from 'lucide-react'
import { useState } from 'react'

interface ApiKeyItemProps extends Omit<ApiKeyDto, 'key'> {
	apiKey: string
	refetchApiKeys: () => void
}

const iconSize = 20

const ApiKeyItem = ({
	name,
	description,
	apiKey,
	refetchApiKeys
}: ApiKeyItemProps) => {
	const [copied, setCopied] = useState(false)

	const { mutateAsync: refreshAsync } = useMutation({
		mutationKey: ['refresh-api-key'],
		mutationFn: () => ApiKeysService.refreshApiKey(apiKey),
		onSuccess: () => {
			refetchApiKeys()
		}
	})

	const { mutateAsync: deleteAsync } = useMutation({
		mutationKey: ['delete-api-key'],
		mutationFn: () => ApiKeysService.deleteApiKey(apiKey),
		onSuccess: () => {
			refetchApiKeys()
		}
	})

	const copyApiKey = () => {
		navigator.clipboard.writeText(apiKey)
		setCopied(true)
		setTimeout(() => setCopied(false), 1000)
	}

	return (
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
								<H5>АПІ ключ</H5>
								<span>{apiKey}</span>

								<H5 className="mt-4">Опис</H5>
								<span>{description === '' ? 'Немає' : description}</span>
							</div>
							<div className="flex items-start ml-auto -mr-6 text-gray-800">
								<ScaledButton
									tooltip="Копіювати АПІ ключ"
									className="p-3 relative"
									onClick={copyApiKey}
								>
									{copied ? (
										<CheckCheck className="animate-disappear" size={iconSize} />
									) : (
										<File className="animate-show" size={iconSize} />
									)}
								</ScaledButton>
								<ScaledButton
									tooltip="Перегенерувати"
									className="p-3"
									onClick={() => refreshAsync()}
								>
									<RefreshCcw size={iconSize} />
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
	)
}

export default ApiKeyItem
