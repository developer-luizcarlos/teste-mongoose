"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteBookService_1 = __importDefault(require("../services/deleteBookService"));
class DeleteBook {
    static async deleteBook(req, res) {
        try {
            deleteBookService_1.default.deleteBookService(req.params.id);
            res.send("Book register excluded with success");
        }
        catch (error) {
            res.send(error);
        }
    }
}
exports.default = DeleteBook;
