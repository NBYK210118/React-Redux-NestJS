import { Injectable } from '@nestjs/common';
import { Board } from '@prisma/client';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async getAllBoards(): Promise<Board[]> {
    const boards = await this.prisma.board.findMany({});
    const result = boards.sort((a, b) => a.id - b.id);
    return result;
  }

  async getBoard(id: number): Promise<Board | null> {
    const result = await this.prisma.board.findFirst({
      where: { id },
    });

    return result;
  }

  async postBoard(data: Board): Promise<Board> {
    const { content, title } = data;
    const result = await this.prisma.board.create({
      data: { content, title },
    });
    return result;
  }

  async updateBoard(data: Board, id: number): Promise<Board> {
    const { title, content } = data;
    const board = await this.prisma.board.update({
      where: {
        id,
      },
      data: { title, content },
    });
    return board;
  }

  async deleteBoard(id: number): Promise<Board | void> {
    const result = await this.prisma.board.delete({
      where: { id },
    });
    if (!result) {
      throw new Error('Not Found!');
    }
    return result;
  }
}
