"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooksModel_1 = __importDefault(require("../models/BooksModel"));
class CreateBookService {
    static async createBookService(data) {
        const newBook = await BooksModel_1.default.create(data);
        const saveBook = await newBook.save();
    }
}
exports.default = CreateBookService;
