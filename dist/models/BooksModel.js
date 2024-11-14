"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BooksSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});
const Books = (0, mongoose_1.model)("Books", BooksSchema);
exports.default = Books;
