import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { PrismaService } from 'src/database/prisma.service';
import { BoardService } from './board.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [BoardController],
  providers: [PrismaService, BoardService],
})
export class BoardModule {}
