import Books from "../models/BooksModel";
import { BooksInterface } from "../models/BooksModel";

class UpdateBookService {
  static async updateBookService(id: string,data: BooksInterface) {
    try {
      const updateBook = await Books.findByIdAndUpdate(id,data);
      if(!updateBook) {
        throw new Error("Book not found");
      }
    } catch(error) {
      throw new Error(`An error was found: ${ error }`);
    }
  }
}

export default UpdateBookService;