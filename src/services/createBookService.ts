import Books from "../models/BooksModel";
import { BooksInterface } from "../models/BooksModel";

class CreateBookService {
  static async createBookService(data: BooksInterface) {
    const newBook = await Books.create(data);
    const saveBook = await newBook.save();
  }
}

export default CreateBookService;