"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooksModel_1 = __importDefault(require("../models/BooksModel"));
class ListBooksService {
    static async listBooks() {
        const booksRegistered = await BooksModel_1.default.find({}).lean();
        return booksRegistered;
    }
}
exports.default = ListBooksService;
