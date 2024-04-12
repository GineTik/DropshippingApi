import Dialog from '@/app/account/components/dropshipper-profile/Dialog'
import { functionalInDeveloping, pageInDeveloping } from '@/helpers/ToastHelper'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import { useQuery } from '@tanstack/react-query'
import { Expand, File, Pen, Plus, RefreshCcw, Trash } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Buttons } from '../buttons'
import ErrorMessage from '../error-message/ErrorMessage'
import { Inputs } from '../inputs'
import styles from './EntityList.module.scss'

interface EntityListProps {
  title: string
  creationTitle: string
  readTitle: string
  description?: string
  moreHref?: string
  contentOfItem: (item: any) => any
  getAllItems: () => Promise<any>
  createItemRequest: (values: any) => Promise<any>
  refreshKeyRequest?: (values: any) => Promise<any>
  deleteItemRequest: (values: any) => Promise<any>
  changingFields: any
  copyData: (item: any) => any
  translates: Record<string, string>
  settings?: boolean
}

const EntityList = ({title, creationTitle, readTitle, description, moreHref, contentOfItem, createItemRequest, changingFields, getAllItems, translates, settings, deleteItemRequest, refreshKeyRequest}: EntityListProps) => {

	const { data: items, refetch } = useQuery<any>({
		queryKey: [title],
		queryFn: () => getAllItems(),
		staleTime: 1 * 60 * 1000
	})

  	const [creationValues, setCreationValues] = useState(changingFields)
	const [toastId, setToastId] = useState<any>()

	const {
		mutateAsync: createAsync,
		error
	} = useTypedMutation({
		mutationKey: [title],
		mutationFn: () => createItemRequest(creationValues),
		onSettled: () => {
			setShowCreateDialog(false)
			refetch()
			toast.clearWaitingQueue()
		},
		onMutate: () => {
			toast.clearWaitingQueue()
			setToastId(toast.loading('Додаємо'))
		},
		onSuccess: () => {
			toast.update(toastId, { render: "Додано", type: "success", isLoading: false, closeOnClick: true, autoClose: 2000 });
		},
		onError: (err) => {
			toast.update(toastId, { render: err.response?.data.message, type: "error", isLoading: false, closeOnClick: true, autoClose: 2000 });
		}
	})

	const {
		mutateAsync: deleteAsync,
	} = useTypedMutation({
		mutationKey: [title],
		mutationFn: () => deleteItemRequest(selectedItem),
		onSettled: () => {
			setShowCreateDialog(false)
			setSelectedItem(null)
			setConfirmToDelete(false)
			refetch()
			toast.clearWaitingQueue()
		},
		onMutate: () => {
			toast.clearWaitingQueue()
			setToastId(toast.loading('Видаляємо'))
		},
		onSuccess: () => {
			toast.update(toastId, { render: "Видалено", type: "success", isLoading: false, closeOnClick: true, autoClose: 2000 });
		},
		onError: (err) => {
			toast.update(toastId, { render: err.response?.data.message, type: "error", isLoading: false, closeOnClick: true, autoClose: 2000 });
		}
	})

	const {
		mutateAsync: refreshAsync,
	} = useTypedMutation({
		mutationKey: [title],
		mutationFn: () => refreshKeyRequest!(selectedItem),
		onSettled: () => {
			refetch()
			toast.clearWaitingQueue()
		},
		onMutate: () => {
			toast.clearWaitingQueue()
			setToastId(toast.loading('Оновлюємо'))
		},
		onSuccess: ({data}) => {
			setSelectedItem(data)
			toast.update(toastId, { render: "Оновлено", type: "success", isLoading: false, closeOnClick: true, autoClose: 2000 });
		},
		onError: (err) => {
			toast.update(toastId, { render: err.response?.data.message, type: "error", isLoading: false, closeOnClick: true, autoClose: 2000 });
		}
	})

	const [showCreateDialog, setShowCreateDialog] = useState(false);
	const [selectedItem, setSelectedItem] = useState<any>(null)
	const [confirmToDelete, setConfirmToDelete] = useState<boolean>(false)

	const iconSize = 16;

	const copy = (content: string) => {
		navigator.clipboard.writeText(content)
		toast.success('Скопійовано')
	}

	return (
		<>
		<div className={`${styles.list} ${settings && styles.is_settings}`}>
			<div className={styles.list__header}>
				{settings ? <h6>{title}</h6> : <h3>{title}</h3>}
				<Buttons.Icon onClick={() => setShowCreateDialog(true)}><Plus /></Buttons.Icon>
			</div>
			<p className={styles.list__p}>
			{description} {moreHref && <Link 
				className="text-blue-600 underline-offset-4 underline hover:text-blue-400 transition" 
				href={moreHref} 
				onClick={(e) => {
					if (moreHref === '#') {
						e.preventDefault()
						pageInDeveloping('Детальніше')
					}
				}}>Детальніше</Link>}
			</p>
			<div>
				{items?.data.map((o: any) => <div 
					key={crypto.randomUUID()}
					className={styles.list__item}
					onClick={() => setSelectedItem(o)}
				>
					{contentOfItem(o)}
					<Expand className='text-gray-400' size={iconSize} />
				</div>)}
			</div>
		</div>

		<Dialog
			show={showCreateDialog}
			close={() => setShowCreateDialog(false)}
		>
			<div className="flex flex-col gap-3 w-[300px]">
				<h4>{creationTitle}</h4>
				{Object.keys(changingFields).map(o => <Inputs.Default
					key={crypto.randomUUID()}
					className="w-full"
					placeholder={translates[o]}
					type="text"
					onChange={(e) => {
						creationValues[o] = e.target.value
						setCreationValues(creationValues)
					}}
				/>)}

				<Buttons.Form
					className='w-full'
					onClick={() => createAsync()}
				>
					Додати
				</Buttons.Form>

				{error && <ErrorMessage className="mt-4">{error}</ErrorMessage>}
			</div>
		</Dialog>

		{selectedItem && <Dialog
			show={selectedItem != null}
			close={() => confirmToDelete === false && setSelectedItem(null)}
		>
			<div className={styles.dialog__header}>
				<h4>{readTitle}</h4>
				<div className={styles.dialog__icons}>
					{refreshKeyRequest && <Buttons.Icon onClick={refreshAsync}>
						<RefreshCcw size={iconSize} />
					</Buttons.Icon>}
					<Buttons.Icon onClick={() => functionalInDeveloping('Редагування')}>
						<Pen size={iconSize} />
					</Buttons.Icon>
					<Buttons.Icon onClick={() => setConfirmToDelete(true)}>
						<Trash size={iconSize} />
					</Buttons.Icon>
				</div>
			</div>
				<div className="flex flex-wrap gap-3 w-[500px]">
					{selectedItem && Object.keys(selectedItem).map(o => o.toLowerCase() == 'id' ? <></> : <div
						key={crypto.randomUUID()} 
						className={styles.dialog__field}
						onClick={() => copy(selectedItem[o])}
					>
						<div className={styles.dialog__field_header}>
							<span className={styles.dialog__field_title}>{translates[o]}</span>
							<File size={15}/>
						</div>
						<div>{selectedItem[o]}</div>
					</div>)}
				</div>
		</Dialog>}

		{confirmToDelete && <Dialog
			show={confirmToDelete}
			close={() => setConfirmToDelete(false)}
		>
			<div className={styles.dialog__header}>
				<h4>Ви справді хочете видалити?</h4>
			</div>
			<p className='mt-3 text-gray-300 w-[80%]'>Після видалення ви не зможете відмінити дію!</p>
			<div className="flex gap-3 mt-4">
				<Buttons.Secondary className='w-full' onClick={deleteAsync}>Так</Buttons.Secondary>
				<Buttons.Secondary className='w-full' onClick={() => setConfirmToDelete(false)}>Ні</Buttons.Secondary>
			</div>
		</Dialog>}
		</>
	)
}

export default EntityList
