"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let BoardService = class BoardService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllBoards() {
        const boards = await this.prisma.board.findMany({});
        const result = boards.sort((a, b) => a.id - b.id);
        return result;
    }
    async getBoard(id) {
        const result = await this.prisma.board.findFirst({
            where: { id },
        });
        return result;
    }
    async postBoard(data) {
        const { content, title } = data;
        const result = await this.prisma.board.create({
            data: { content, title },
        });
        return result;
    }
    async updateBoard(data, id) {
        const { title, content } = data;
        const board = await this.prisma.board.update({
            where: {
                id,
            },
            data: { title, content },
        });
        return board;
    }
    async deleteBoard(id) {
        const result = await this.prisma.board.delete({
            where: { id },
        });
        if (!result) {
            throw new Error('Not Found!');
        }
        return result;
    }
};
exports.BoardService = BoardService;
exports.BoardService = BoardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BoardService);
//# sourceMappingURL=board.service.js.map