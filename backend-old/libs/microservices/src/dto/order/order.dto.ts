import CustomerDto from "./customer.dto";
import DeliveryDto from "./delivery-address.dto";
import CommodityDto from "./order-commodity.dto";

export default class OrderDto {
    delivery: DeliveryDto
    customer: CustomerDto
    goods: CommodityDto[]
    description: string | undefined
    additionalInformation: Record<string, string>
}