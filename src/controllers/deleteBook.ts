import { Request,Response } from "express";
import Books from "../models/BooksModel";
import DeleteBookService from "../services/deleteBookService";

class DeleteBook {
  static async deleteBook(req: Request,res: Response) {
    try {
      DeleteBookService.deleteBookService(req.params.id);
      res.send("Book register excluded with success");
    } catch(error) {
      res.send(error);
    }
  }
}

export default DeleteBook;