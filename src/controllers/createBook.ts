import { Request,Response } from "express";
import Books from "../models/BooksModel";
import { BooksInterface } from "../models/BooksModel";
import CreateBookService from "../services/createBookService";

class CreateBook {
  static async createBook(req: Request,res: Response) {
    const data: BooksInterface = {
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      price: req.body.price,
      quantity: req.body.quantity
    };
    try {
      const notEmptyValues = data.title.trim() && data.author.trim() && data.genre.trim() && data.price !== undefined && data.quantity !== undefined;
      const dataAlreadyExists = await Books.exists({ title: data.title });

      if(notEmptyValues && !dataAlreadyExists) {
        CreateBookService.createBookService(data);
        res.status(201).send("Book registered with success");
      } else if(dataAlreadyExists) {
        res.send("A register with this title already exists.");
      } else if(!notEmptyValues) {
        res.send("Impossible to create a register with empty values");
      }
    }
    catch(error) {
      console.log(error);
    }
  }
}


export default CreateBook;