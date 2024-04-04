import { Buttons } from "@/components/buttons"
import { ApiKeyDto } from "@/dtos/user/api-key/api-key.dto"
import { File, Pen, RefreshCcw, Trash } from "lucide-react"
import Dialog from "../Dialog"
import styles from "../DropshipperProfile.module.scss"

interface ReadAndEditApiKeysDialogProps {
  item: ApiKeyDto
	refetch: () => void
	show: boolean
	close: () => void
}


const ReadAndEditApiKeysDialog = ({item, show, refetch, close}: ReadAndEditApiKeysDialogProps) => {
  const iconSize = 20;

  const copy = () => {
		navigator.clipboard.writeText(item.key)
	}

  return (
    <Dialog
			show={show}
			close={close}
		>
      <div className={styles.dialog_header}>
        <h4>Апі ключ</h4>
        <div className={styles.dialog_icons}>
          <Buttons.Icon onClick={copy}><File size={iconSize} /></Buttons.Icon>
          <Buttons.Icon><RefreshCcw size={iconSize} /></Buttons.Icon>
          <Buttons.Icon><Pen size={iconSize} /></Buttons.Icon>
          <Buttons.Icon><Trash size={iconSize} /></Buttons.Icon>
        </div>
      </div>
			<div className="flex gap-3 w-[500px]">
				<div className="w-[200px]">
          <span className={styles.dialog_field_title}>Ім'я</span>
          <div>{item.name}</div>

          <span className={styles.dialog_field_title}>Ключ</span>
          <div>{item.key}</div>
        </div>
        <div>
          <span className={styles.dialog_field_title}>Опис</span>
          <div>{item.description}</div>
        </div>
			</div>
		</Dialog>
  )
}

export default ReadAndEditApiKeysDialog
