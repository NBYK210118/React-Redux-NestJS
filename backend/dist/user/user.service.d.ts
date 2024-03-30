import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { SignInDto, SignUpDto } from './dto/sign.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    signUp(data: SignUpDto): Promise<User>;
    signIn(data: SignInDto): Promise<"로그인 성공!" | undefined>;
}
