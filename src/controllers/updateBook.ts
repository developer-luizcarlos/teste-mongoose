import { Request,Response } from "express";
import Books,{ BooksInterface } from "../models/BooksModel";
import UpdateBookService from "../services/updateBookService";

class UpdateBook {
  static async updateBook(req: Request,res: Response) {
    const newData: BooksInterface = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      price: req.body.price,
      quantity: req.body.quantity,
    };

    const registerTitleAlreadyExist = await Books.exists({ title: newData.title });
    const nonEmptyValues = newData.title.trim() && newData.author.trim() && newData.genre.trim() && newData.price !== undefined && newData.quantity !== undefined;

    try {
      if(registerTitleAlreadyExist) {
        res.send("Impossible to update the informations: a register with this title already exists");
      } else if(!nonEmptyValues) {
        res.send("Impossible to update the informations with empty data");
      } else {
        const updateBook = await UpdateBookService.updateBookService(req.params.id,newData);
        res.send("Book was updated");
      }
    } catch(error) {
      throw new Error(`An error was found: ${ error }`);
    }
  };
}

export default UpdateBook;