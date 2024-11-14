import { connect } from "mongoose";

const API_KEY: string = process.env.DATABASE_URL!.toString();

function connectToDatabase() {
  connect(API_KEY)
    .then(() => {
      console.log("Connected with success");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default connectToDatabase;