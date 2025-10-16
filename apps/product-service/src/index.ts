import express, { Request, Response } from "express";
import { clerkMiddleware, getAuth } from "@clerk/express";
import cors from "cors";
import { shouldBeUser } from "./middleware/authMiddleware.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";

import { NextFunction } from "express";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3002", "http://localhost:3003"],
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).json({
    message: "Internal server error",
  });
});
// Health check
app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

// Protected route
app.get("/test", shouldBeUser, (req: Request, res: Response) => {
  return res.json({
    message: "Product service authenticated",
    userId: req.userId,
  });
});

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
});

app.listen(8000, () => {
  console.log("Product service is running on port 8000");
});
