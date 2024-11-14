"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooksModel_1 = __importDefault(require("../models/BooksModel"));
const updateBookService_1 = __importDefault(require("../services/updateBookService"));
class UpdateBook {
    static async updateBook(req, res) {
        const newData = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            price: req.body.price,
            quantity: req.body.quantity,
        };
        const registerTitleAlreadyExist = await BooksModel_1.default.exists({ title: newData.title });
        const nonEmptyValues = newData.title.trim() && newData.author.trim() && newData.genre.trim() && newData.price !== undefined && newData.quantity !== undefined;
        try {
            if (registerTitleAlreadyExist) {
                res.send("Impossible to update the informations: a register with this title already exists");
            }
            else if (!nonEmptyValues) {
                res.send("Impossible to update the informations with empty data");
            }
            else {
                const updateBook = await updateBookService_1.default.updateBookService(req.params.id, newData);
                res.send("Book was updated");
            }
        }
        catch (error) {
            throw new Error(`An error was found: ${error}`);
        }
    }
    ;
}
exports.default = UpdateBook;
