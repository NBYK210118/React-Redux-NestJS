import { BoardService } from './board.service';
import { Board } from '@prisma/client';
export declare class BoardController {
    private board;
    constructor(board: BoardService);
    getAllBoards(): Promise<Board[]>;
    getBoard(id: string): Promise<Board | null>;
    postBoard(data: Board): Promise<Board>;
    updateBoard(data: Board, id: string): Promise<Board>;
    deleteBoard(id: string): Promise<Board | void>;
}
