import ScaledButton from '@/components/Common/Button/ScaledButton'
import H4 from '@/components/Common/Headings/H4'
import {
	ArrowPathIcon,
	DocumentDuplicateIcon,
	TrashIcon
} from '@heroicons/react/24/outline'

const ApiKeys = () => {
	const keys = [
		'jliskdfljka;sdflkj;dsfajlk;dfasljk;dafsjlk;fda;jlakfd',
		'jksdfakdjfsjior1jkr101f0-1f0fj01-01jdfasfajkdfsaljk;',
		'asdfjlkadsfjkldfasjkladfsjkl;jldaskf;ljk;adsfalsd;jkfadsflj;k'
	]

	return (
		<div>
			<H4 className="mb-3">АПІ ключі</H4>

			<div>
				<div className="flex border-b pb-2 mb-2">
					<div className="w-1/2 truncate">АПІ ключ</div>
					<div>Дозволений хост</div>
					<div className="ml-auto">Дії</div>
				</div>
				{keys.map((key) => (
					<div key={crypto.randomUUID()} className="flex items-center">
						<div className="w-1/2 truncate pr-4">{key}</div>
						<ScaledButton
							className="p-2 outline-blue-500 rounded-lg"
							contentEditable
							withoutActiveStyle
						>
							https://localhost:3000
						</ScaledButton>
						<div className="flex ml-auto -mr-6">
							<ScaledButton tooltip="Копіювати АПІ ключ" className="p-3">
								<DocumentDuplicateIcon className="w-5" />
							</ScaledButton>
							<ScaledButton tooltip="Перегенерувати" className="p-3">
								<ArrowPathIcon className="w-5" />
							</ScaledButton>
							<ScaledButton isDanger className="p-3">
								<TrashIcon className="w-5" />
							</ScaledButton>
						</div>
					</div>
				))}
			</div>

			{/* <div className="flex flex-col gap-2">
				{keys.map((key) => (
					<Disclosure key={key}>
						{({ open }) => (
							<>
								<Disclosure.Button className="flex items-center w-full text-left px-4 py-2 bg-gray-100 rounded-xl">
									{key}
									<span className="ml-auto">
										<ChevronDownIcon className="w-5" />
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
											<H5>Дії над ключем</H5>
											<div className="flex gap-1 text-sm mt-2">
												<BorderedButton>
													Перегенерувати
												</BorderedButton>
												<BorderedButton>
													Видалити
												</BorderedButton>
											</div>
										</div>
										<div className="grow">
											<H5>Дозволені хости</H5>
											<div className="max-w-96 w-full">
												<div className="flex justify-between items-center py-2">
													<span>
														https://localhost:3000
													</span>
													<TrashIcon className="w-5 cursor-pointer p-2 box-content hover:bg-gray-100 rounded-full transition" />
												</div>
												<BorderedButton className="text-sm">
													Додати дозволений хост
												</BorderedButton>
											</div>
										</div>
									</Disclosure.Panel>
								</Transition>
							</>
						)}
					</Disclosure>
				))}
			</div> */}

			<div className="flex gap-5 items-center mt-5">
				<span>Максимальна кількість ключів (3/3)</span>
				{/* <BlueButton>Збільшити кількість</BlueButton> */}
			</div>
		</div>
	)
}

export default ApiKeys
