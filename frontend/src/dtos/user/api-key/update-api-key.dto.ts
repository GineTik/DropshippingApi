import { CreateApiKeyDto } from "./create-api-key.dto"

export type UpdateApiKeyDto = CreateApiKeyDto & {
    key: string
}