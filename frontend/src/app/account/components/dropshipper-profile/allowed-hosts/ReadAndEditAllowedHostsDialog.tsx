import { Buttons } from "@/components/buttons"
import { AllowedHostDto } from "@/dtos/user/allowed-hosts/allowed-host.dto"
import { File, Pen, Trash } from "lucide-react"
import Dialog from "../Dialog"
import styles from "../DropshipperProfile.module.scss"

interface ReadAndEditAllowedHostsDialogProps {
  item: AllowedHostDto
	refetch: () => void
	show: boolean
	close: () => void
}


const ReadAndEditAllowedHostsDialog = ({item, show, refetch, close}: ReadAndEditAllowedHostsDialogProps) => {
  const iconSize = 20;

  const copy = () => {
		navigator.clipboard.writeText(item.host)
	}

  return (
    <Dialog
			show={show}
			close={close}
		>
      <div className={styles.dialog_header}>
        <h4>Дозволений хост/айпі</h4>
        <div className={styles.dialog_icons}>
          <Buttons.Icon onClick={copy}><File size={iconSize} /></Buttons.Icon>
          <Buttons.Icon><Pen size={iconSize} /></Buttons.Icon>
          <Buttons.Icon><Trash size={iconSize} /></Buttons.Icon>
        </div>
      </div>
			<div className="flex gap-3 w-[500px]">
				<div className="w-[200px]">
          <span className={styles.dialog_field_title}>Ім'я</span>
          <div>{item.name}</div>

          <span className={styles.dialog_field_title}>хост/айпі</span>
          <div>{item.host}</div>
        </div>
        <div>
          <span className={styles.dialog_field_title}>Опис</span>
          <div>{item.description}</div>
        </div>
			</div>
		</Dialog>
  )
}

export default ReadAndEditAllowedHostsDialog
