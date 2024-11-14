import { Schema,model } from "mongoose";

export interface BooksInterface {
  title: string;
  author: string;
  genre: string;
  price: number;
  quantity: number;
}

const BooksSchema = new Schema<BooksInterface>({
  title: { type: String,required: true },
  author: { type: String,required: true },
  genre: { type: String,required: true },
  price: { type: Number,required: true },
  quantity: { type: Number,required: true }
});

const Books = model("Books",BooksSchema);

export default Books;