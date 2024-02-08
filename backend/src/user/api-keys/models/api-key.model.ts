import { ApiKeyDto } from "../dto/api-key.dto"

export class ApiKeyModel {
    key: string
    name: string
    description: string

    static fromDto = (dto: ApiKeyDto) => ({
        ...dto,
        key: crypto.randomUUID()
    })
}