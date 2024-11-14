import Books from "../models/BooksModel";

class ListBooksService {
  static async listBooks() {
    const booksRegistered = await Books.find({}).lean();
    return booksRegistered;
  }
}

export default ListBooksService;