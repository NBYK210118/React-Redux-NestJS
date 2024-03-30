import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('board')
export class BoardController {
  constructor(private board: BoardService) {}

  @Get('/all')
  async getAllBoards(): Promise<Board[]> {
    return this.board.getAllBoards();
  }

  @Get('')
  async getBoard(@Query('id') id: string): Promise<Board | null> {
    return this.board.getBoard(+id);
  }

  @Post('/post')
  async postBoard(@Body() data: Board): Promise<Board> {
    return this.board.postBoard(data);
  }

  @Put('/update/:id')
  async updateBoard(
    @Body() data: Board,
    @Param('id') id: string,
  ): Promise<Board> {
    return this.board.updateBoard(data, +id);
  }

  @Delete('')
  async deleteBoard(@Query('id') id: string): Promise<Board | void> {
    return this.board.deleteBoard(+id);
  }
}
