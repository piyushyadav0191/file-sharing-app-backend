import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import DBConnection from "./database/db.js";

const app = express();
app.use(cors());

app.use("/", router);

DBConnection();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
