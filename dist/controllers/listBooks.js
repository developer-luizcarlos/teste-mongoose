"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListBooksService_1 = __importDefault(require("../services/ListBooksService"));
class ListBooks {
    static async listBooks(req, res) {
        try {
            const books = await ListBooksService_1.default.listBooks();
            res.send(books);
        }
        catch (error) {
            res.send(error);
        }
    }
}
exports.default = ListBooks;
