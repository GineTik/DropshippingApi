import { Buttons } from '@/components/buttons'
import { AllowedHostDto } from '@/dtos/user/allowed-hosts/allowed-host.dto'
import { AllowedHostsService } from '@/services/user/allowed-hosts.service'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { Expand, Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../DropshipperProfile.module.scss'
import CreateAllowedHostsDialog from './CreateAllowedHostsDialog'
import ReadAndEditAllowedHostsDialog from './ReadAndEditAllowedHostsDialog'

const AllowedHosts = () => {
	const { data: allowedHosts, refetch } = useQuery<
		AxiosResponse<AllowedHostDto[]>
	>({
		queryKey: ['get-allowed-hosts'],
		queryFn: () => AllowedHostsService.getAll(),
		staleTime: 1 * 60 * 1000
	})

	const [creatingDialogOpened, setCreatingDialogOpened] = useState(false)
	const [selectedItem, setSelectedItem] = useState<AllowedHostDto | null>(null)

	return (
		<>
		<div className={styles.allows}>
			<div className={styles.allows_header}>
				<h3>Хости та айпі</h3>
				<Buttons.Icon onClick={() => setCreatingDialogOpened(true)}><Plus /></Buttons.Icon>
			</div>
			<p className={styles.p}>Надайте нам хости та/або айпі з яких ви будете надсилати нам запити. <Link className="text-blue-600 underline-offset-4 underline hover:text-blue-400 transition" href="#">Детальніше</Link></p>
			{allowedHosts?.data?.map(k => 
			<div 
				className={styles.allows_item}
				onClick={() => setSelectedItem(k)}
			>
				{k.name}
				<Expand className='text-gray-400' size={15} />
			</div>)}
		</div>
		
		<CreateAllowedHostsDialog 
			close={() => setCreatingDialogOpened(false)}
			refetch={refetch} 
			show={creatingDialogOpened} 
		/>

		{selectedItem && <ReadAndEditAllowedHostsDialog 
			item={selectedItem}
			close={() => setSelectedItem(null)}
			refetch={refetch} 
			show={selectedItem !== null}
		/>}
		
		</>
	)
}

export default AllowedHosts
