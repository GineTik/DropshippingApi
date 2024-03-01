import { ApiKeyDto } from "../dto/api-key.dto";
import { UpdateApiKeyDto } from "../dto/update-api-key.dto";
export declare class ApiKeyModel {
    key: string;
    name: string;
    description: string;
    static fromDto: (dto: ApiKeyDto) => {
        key: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    };
    static fromUpdateDto: (dto: UpdateApiKeyDto) => {
        name: string;
        description: string;
        key: string;
    };
}
