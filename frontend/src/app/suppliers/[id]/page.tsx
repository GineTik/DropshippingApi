'use client'
import SupplierProfile from "@/app/account/components/supplier-profile/SupplierProfile";
import { SupplierService } from "@/services/user/supplier.service";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";

const Supplier = () => {
  const params = useParams();

  const { data: supplier, isPending } = useQuery({
    queryKey: ['get-supplier-by-id'],
    queryFn: () => SupplierService.getSupplier(Number(params.id))
  })
  
  return <>
    {isPending ? <Loader /> : <SupplierProfile {...supplier?.data} />}
  </>
}

export default Supplier
