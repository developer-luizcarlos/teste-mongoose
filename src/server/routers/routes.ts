import { Router,Request,Response } from "express";
import Books from "./../../models/BooksModel";
import { BooksInterface } from "./../../models/BooksModel";
import CreateBook from "../../controllers/createBook";
import DeleteBook from "../../controllers/deleteBook";
import UpdateBook from "../../controllers/updateBook";
import ListBooks from "../../controllers/listBooks";

const router = Router();

router.get("/",(req: Request,res: Response) => {
  res.send("Hello, World");
});

router.get("/books",ListBooks.listBooks);

router.post("/createbook",CreateBook.createBook);

router.post("/deletebook/:id",DeleteBook.deleteBook);

router.post("/updatebook/:id",UpdateBook.updateBook);

export default router;