'use client'
import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import { SupplierService } from "@/services/user/supplier.service"
import { useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { useSearchParams } from "next/navigation"
import SupplierItem from "./components/SupplierItem/SupplierItem"

const SuppliersPage = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get("page")

    const {data: suppliers} = useQuery<AxiosResponse<{ suppliers: SupplierSettings[] }>>({
        queryKey: ['suppliers-page'],
        queryFn: () => SupplierService.getSuppliersPage(Number(page))
    })

    return (
        <Section className="mt-12">
            <h2 className="text-white mb-[30px]">Поставщики</h2>
            <div className="flex gap-4">{suppliers?.data.suppliers.map(s => <SupplierItem {...s} />)}</div>
        </Section>
    )
}

export default SuppliersPage
