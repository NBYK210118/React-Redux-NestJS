import { Prisma } from '@prisma/client';

export class Board implements Prisma.BoardCreateInput {
  content?: string | undefined;
  title?: string | undefined;
}
