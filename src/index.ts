import  express  from "express";
import "dotenv/config";
import "reflect-metadata";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.API_PORT, () => {
  console.log("Server is running on http://localhost:3000");
});