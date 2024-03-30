import { Prisma } from '@prisma/client';
export declare class Board implements Prisma.BoardCreateInput {
    content?: string | undefined;
    title?: string | undefined;
}
