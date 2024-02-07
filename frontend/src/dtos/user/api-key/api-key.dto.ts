import { CreateApiKeyDto } from "./create-api-key.dto"

export type ApiKeyDto = CreateApiKeyDto & {
    key: string
}