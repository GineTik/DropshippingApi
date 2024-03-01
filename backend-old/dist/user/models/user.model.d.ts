import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { AllowedHostModel } from "../allowed-hosts/models/allowed-host.model";
import { ApiKeyModel } from "../api-keys/models/api-key.model";
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    email: string;
    password: string;
    emailConfirmed: boolean;
    activationCode: number;
    apiKeys: ApiKeyModel[];
    allowedHosts: AllowedHostModel[];
    limitOfApiKeysAndHosts: number;
}
