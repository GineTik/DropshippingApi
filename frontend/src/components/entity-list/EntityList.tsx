import Dialog from '@/app/account/components/dropshipper-profile/Dialog'
import { useTypedMutation } from '@/hooks/useTypedMutation'
import { useQuery } from '@tanstack/react-query'
import { Expand, File, Pen, Plus, RefreshCcw, Trash } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
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
  changingFields: any
  copyData: (item: any) => any
  translates: Record<string, string>
  settings?: boolean
}

const EntityList = ({title, creationTitle, readTitle, description, moreHref, contentOfItem, createItemRequest, changingFields, getAllItems, copyData, translates, settings}: EntityListProps) => {

	const { data: items, refetch } = useQuery<any>({
		queryKey: [title],
		queryFn: () => getAllItems(),
		staleTime: 1 * 60 * 1000
	})

  	const [creationValues, setCreationValues] = useState(changingFields)

	const {
		mutateAsync: createApiKeyAsync,
		error
	} = useTypedMutation({
		mutationKey: [title],
		mutationFn: () => createItemRequest(creationValues),
		onSettled: () => {
			setShowCreateDialog(false)
			refetch()
		}
	})

	const [showCreateDialog, setShowCreateDialog] = useState(false);
	const [selectedItem, setSelectedItem] = useState<any>(null)

	const iconSize = 16;

	const copy = () => {
		navigator.clipboard.writeText(copyData(selectedItem))
	}

	return (
		<>
		<div className={`${styles.list} ${settings && styles.is_settings}`}>
			<div className={styles.list__header}>
				{settings ? <h6>{title}</h6> : <h3>{title}</h3>}
				<Buttons.Icon onClick={() => setShowCreateDialog(true)}><Plus /></Buttons.Icon>
			</div>
			<p className={styles.list__p}>
			{description} {moreHref && <Link className="text-blue-600 underline-offset-4 underline hover:text-blue-400 transition" href={moreHref}>Детальніше</Link>}
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
					onClick={() => createApiKeyAsync()}
				>
					Додати
				</Buttons.Form>

				{error && <ErrorMessage className="mt-4">{error}</ErrorMessage>}
			</div>
		</Dialog>

		{selectedItem && <Dialog
			show={selectedItem != null}
			close={() => setSelectedItem(null)}
		>
			<div className={styles.dialog__header}>
				<h4>{readTitle}</h4>
				<div className={styles.dialog__icons}>
				<Buttons.Icon onClick={copy}><File size={iconSize} /></Buttons.Icon>
				<Buttons.Icon><RefreshCcw size={iconSize} /></Buttons.Icon>
				<Buttons.Icon><Pen size={iconSize} /></Buttons.Icon>
				<Buttons.Icon><Trash size={iconSize} /></Buttons.Icon>
				</div>
			</div>
				<div className="flex flex-wrap gap-3 w-[500px]">
					{selectedItem && Object.keys(selectedItem).map(o => <div
						key={crypto.randomUUID()} 
						className='w-[48%] flex-grow'
					>
						<span className={styles.dialog__field_title}>{translates[o]}</span>
						<div>{selectedItem[o]}</div>
					</div>)}
				</div>
		</Dialog>}
		</>
	)
}

export default EntityList
