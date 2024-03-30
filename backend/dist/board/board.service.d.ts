import { Board } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
export declare class BoardService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllBoards(): Promise<Board[]>;
    getBoard(id: number): Promise<Board | null>;
    postBoard(data: Board): Promise<Board>;
    updateBoard(data: Board, id: number): Promise<Board>;
    deleteBoard(id: number): Promise<Board | void>;
}
