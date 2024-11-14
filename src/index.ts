import app from "./server/server";
import connectToDatabase from "./database/database";

const port: number = Number(process.env.PORT || 5000);
const hostName: string = "127.0.0.1";

connectToDatabase();

app.listen(port,hostName,() => {
  console.log(`Server active on http://${ hostName }:${ port }`);
});
