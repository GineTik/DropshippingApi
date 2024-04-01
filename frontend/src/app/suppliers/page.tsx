'use client'
import Section from "@/components/section/Section"
import { SupplierSettings } from "@/dtos/user/settings/supplier-settings.dto"
import { SupplierService } from "@/services/user/supplier.service"
import { useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { useSearchParams } from "next/navigation"
import SuppliersItem from "../(home)/components/suppliers/SuppliersItem"

const SuppliersPage = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get("page")

    const {data: suppliers} = useQuery<AxiosResponse<{ suppliers: SupplierSettings[] }>>({
        queryKey: ['suppliers-page'],
        queryFn: () => SupplierService.getSuppliersPage(Number(page))
    })

    return (
        <Section className="mt-10">
            <div className="grid gap-3 grid-cols-2 md:grid-cols-4">{suppliers?.data.suppliers.map(s => <SuppliersItem 
                id={s.id}
                isBlue={true}
                title={s.publicName} 
                description={s.description} />
            )}</div>
        </Section>
    )
}

export default SuppliersPage
