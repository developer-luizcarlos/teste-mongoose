"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooksModel_1 = __importDefault(require("../models/BooksModel"));
class UpdateBookService {
    static async updateBookService(id, data) {
        try {
            const updateBook = await BooksModel_1.default.findByIdAndUpdate(id, data);
            if (!updateBook) {
                throw new Error("Book not found");
            }
        }
        catch (error) {
            throw new Error(`An error was found: ${error}`);
        }
    }
}
exports.default = UpdateBookService;
