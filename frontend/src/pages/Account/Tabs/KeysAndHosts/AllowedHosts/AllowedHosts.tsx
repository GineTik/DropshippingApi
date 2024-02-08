import H4 from '@/components/Headings/H4'
import { AddAllowedHostDto } from '@/dtos/user/allowed-hosts/add-allowed-host.dto'
import { AllowedHostDto } from '@/dtos/user/allowed-hosts/allowed-host.dto'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import StyledInput from '@/pages/Authentication/Input/Input'
import { AllowedHostsService } from '@/services/user/allowed-hosts.service'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useState } from 'react'
import KeysAndHostsForm from '../Common/KeysAndHostsForm'
import AllowedHostItem from './AllowedHostItem'

const AllowedHosts = () => {
	const { data: allowedHosts, refetch } = useQuery<
		AxiosResponse<AllowedHostDto[]>
	>({
		queryKey: ['get-allowed-hosts'],
		queryFn: () => AllowedHostsService.getAllowedHosts()
	})

	const [fields, setFields] = useState<AddAllowedHostDto>({
		name: '',
		description: '',
		host: ''
	})

	const {
		mutateAsync: addAllowedHost,
		isPending,
		error
	} = useTypedMutation({
		mutationKey: ['add-allowed-host'],
		mutationFn: () => AllowedHostsService.addAllowedHost(fields),
		onSettled: () => {
			refetch()
		}
	})

	return (
		<div>
			<H4 className="mb-3">Дозволені хости</H4>

			<div className="flex flex-col gap-2">
				{allowedHosts?.data?.map((host, i) => (
					<AllowedHostItem key={i} refetch={refetch} host={host} />
				))}
			</div>

			<KeysAndHostsForm
				buttonText={'Додати хост'}
				onSubmit={() => addAllowedHost()}
				error={error}
				isPending={isPending}
				countOfItems={allowedHosts?.data?.length}
			>
				<div className="flex gap-3">
					<StyledInput
						className="w-1/2"
						placeholder="Назва"
						type="text"
						value={fields.name}
						onChange={(e) => setFields({ ...fields, name: e.target.value })}
					></StyledInput>
					<StyledInput
						className="w-1/2"
						placeholder="Хост"
						type="text"
						value={fields.host}
						onChange={(e) => setFields({ ...fields, host: e.target.value })}
					></StyledInput>
				</div>
				<StyledInput
					className="w-full"
					placeholder="Опис"
					type="text"
					value={fields.description}
					onChange={(e) =>
						setFields({ ...fields, description: e.target.value })
					}
				></StyledInput>
			</KeysAndHostsForm>
		</div>
	)
}

export default AllowedHosts
