import Books from "../models/BooksModel";

class DeleteBookService {
  static async deleteBookService(id: string) {
    try {
      await Books.deleteOne({ _id: id });
    } catch(error) {
      console.log(error);
    }
  }
}

export default DeleteBookService;