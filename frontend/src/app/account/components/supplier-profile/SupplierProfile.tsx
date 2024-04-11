'use client'
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import Api from "./sections/api/Api"
import Blocks from "./sections/blocks/Blocks"
import Present from "./sections/present/Present"
import UnloadOffers from "./sections/unload-offers/UnloadOffers"

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
