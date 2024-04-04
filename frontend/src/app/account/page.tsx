'use client'
import { StateType } from '@/store/store'
import { useSelector } from 'react-redux'
import SupplierProfile from '../../components/supplier-profile/SupplierProfile'
import DropshipperProfile from './components/dropshipper-profile/DropshipperProfile'

const AccountPage = () => {
	const supplier = useSelector((state: StateType) => state.auth.user.supplierSettings)

	const userRoles = useSelector((state: StateType) => state.auth.user.roles)
	return userRoles.includes('Dropshipper') ? <DropshipperProfile /> : <SupplierProfile {...supplier} />
}

export default AccountPage
