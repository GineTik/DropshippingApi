/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
import { AllowedHostsService } from './allowed-hosts.service';
import { AddAllowedHostDto } from './dto/add-allowed-host.dto';
import { UpdateAllowedHostDto } from './dto/update-allowed-host.dto';
export declare class AllowedHostsController {
    private readonly allowedHostsService;
    constructor(allowedHostsService: AllowedHostsService);
    getApiKeys(request: Express.Request): Promise<AddAllowedHostDto[]>;
    addAllowedHost(dto: AddAllowedHostDto, request: Express.Request): Promise<void>;
    updateAllowedHost(dto: UpdateAllowedHostDto, request: Express.Request): Promise<void>;
    deleteAllowedHost(host: string, request: Express.Request): Promise<void>;
}
