import { AddAllowedHostDto } from "../../../dto/src/user/allowed-hosts/add-allowed-host.dto"
import { UpdateAllowedHostDto } from "../../../dto/src/user/allowed-hosts/update-allowed-host.dto"

export class AllowedHostModel {
    name: string
    description: string
    host: string

    static fromUpdateDto = (dto: UpdateAllowedHostDto): AllowedHostModel => ({
        name: dto.name,
        description: dto.description,
        host: dto.newHost
    })
    
    static fromAddDto = (dto: AddAllowedHostDto): AllowedHostModel => ({
        ...dto
    })
}