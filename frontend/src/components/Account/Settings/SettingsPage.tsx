'use client'
import StyledInput from '@/components/Authentication/Input/Input'
import BlueButton from '@/components/Common/Buttons/BlueButton'
import H5 from '@/components/Common/Headings/H5'
import Section from '@/components/Common/Section/Section'
import { Tab } from '@headlessui/react'
import SettingsTab from './SettingsTab'

const SettingsPage = () => {
	return (
		<Section className="pt-7 sm:pt-14">
			<Tab.Group>
				<div className="flex md:gap-3 w-full max-w-[800px] mx-auto flex-col sm:flex-row">
					<Tab.List className="flex items-start flex-col w-full sm:w-52">
						<SettingsTab>Безпека</SettingsTab>
						<SettingsTab>Платіжні дані</SettingsTab>
					</Tab.List>
					<Tab.Panels className="px-3 sm:px-6 py-3">
						<Tab.Panel className="">
							<H5 className="w-full">Зміна паролю</H5>
							<div className="flex gap-4 mt-4">
								<div className="flex flex-col gap-3 text-sm max-sm:w-full">
									<StyledInput placeholder="Старий пароль" type="text" />
									<StyledInput placeholder="Новий пароль" type="text" />
									<BlueButton>Змінити</BlueButton>
								</div>
								<div className="text-gray-500 text-sm w-52 max-sm:hidden">
									Вам також треба підтвердити зміну паролю на почті.
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel>Content 2</Tab.Panel>
					</Tab.Panels>
				</div>
			</Tab.Group>
		</Section>
	)
}

export default SettingsPage
