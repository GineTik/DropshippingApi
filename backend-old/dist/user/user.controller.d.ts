/// <reference types="express-serve-static-core" />
/// <reference types="passport" />
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(request: Express.Request): Promise<import("./user-profile.dto").UserProfileDto>;
    getMaxCountOfApiKeysAndHosts(request: Express.Request): Promise<number>;
}
