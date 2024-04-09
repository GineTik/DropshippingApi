'use client'
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import Api from "./sections/Api/Api"
import Blocks from "./sections/Blocks/Blocks"
import Present from "./sections/Present/Present"
import UnloadOffers from "./sections/UnloadOffers/UnloadOffers"

const SupplierProfile = (supplier: SupplierSettings) => {
	return (
		<>
			<Present {...supplier} />
			<Api {...supplier} />
			<UnloadOffers {...supplier} />
			<Blocks {...supplier} />
		</>
	)
}


export default SupplierProfile
