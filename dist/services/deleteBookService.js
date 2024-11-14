"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooksModel_1 = __importDefault(require("../models/BooksModel"));
class DeleteBookService {
    static async deleteBookService(id) {
        try {
            await BooksModel_1.default.deleteOne({ _id: id });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = DeleteBookService;
