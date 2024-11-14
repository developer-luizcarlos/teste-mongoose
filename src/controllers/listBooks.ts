import { Request,Response } from "express";
import Books from "../models/BooksModel";
import ListBooksService from "../services/ListBooksService";

class ListBooks {
  static async listBooks(req: Request,res: Response) {
    try {
      const books = await ListBooksService.listBooks();
      res.send(books);
    } catch(error) {
      res.send(error);
    }
  }
}

export default ListBooks;