import { UserService } from './user.service';
import { User } from '@prisma/client';
export declare class UserController {
    private user;
    constructor(user: UserService);
    signUp(data: User): Promise<User>;
    signIn(data: User): Promise<"로그인 성공!" | undefined>;
}
