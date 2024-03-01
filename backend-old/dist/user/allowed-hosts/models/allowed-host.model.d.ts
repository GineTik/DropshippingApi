import { AddAllowedHostDto } from "../dto/add-allowed-host.dto";
import { UpdateAllowedHostDto } from "../dto/update-allowed-host.dto";
export declare class AllowedHostModel {
    name: string;
    description: string;
    host: string;
    static fromUpdateDto: (dto: UpdateAllowedHostDto) => AllowedHostModel;
    static fromAddDto: (dto: AddAllowedHostDto) => AllowedHostModel;
}
