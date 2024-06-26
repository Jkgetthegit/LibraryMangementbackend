import express, { Application, Request, Response } from "express";
import { AppDataSource, checkConnection } from "./dbConfig";
import { userRoutes } from "./routes/userRouters";
import * as dotenv from "dotenv";
import { adminRoutes } from "./routes/adminRouters";
import cors from "cors";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:(true),
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "successssss" });
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
  checkConnection();
});
