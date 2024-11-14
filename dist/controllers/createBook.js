"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooksModel_1 = __importDefault(require("../models/BooksModel"));
const createBookService_1 = __importDefault(require("../services/createBookService"));
class CreateBook {
    static async createBook(req, res) {
        const data = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            price: req.body.price,
            quantity: req.body.quantity
        };
        try {
            const notEmptyValues = data.title.trim() && data.author.trim() && data.genre.trim() && data.price !== undefined && data.quantity !== undefined;
            const dataAlreadyExists = await BooksModel_1.default.exists({ title: data.title });
            if (notEmptyValues && !dataAlreadyExists) {
                createBookService_1.default.createBookService(data);
                res.status(201).send("Book registered with success");
            }
            else if (dataAlreadyExists) {
                res.send("A register with this title already exists.");
            }
            else if (!notEmptyValues) {
                res.send("Impossible to create a register with empty values");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = CreateBook;
