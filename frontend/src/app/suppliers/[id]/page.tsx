'use client'
import SupplierProfile from "@/components/supplier-profile/SupplierProfile";
import { SupplierService } from "@/services/user/supplier.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const Supplier = () => {
  const params = useParams();

  const { data: supplier } = useQuery({
    queryKey: ['get-supplier-by-id'],
    queryFn: () => SupplierService.getSupplier(Number(params.id))
  })
  
  return <SupplierProfile {...supplier?.data} />
}

export default Supplier
