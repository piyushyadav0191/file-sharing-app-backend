import express from "express";
import { uploadImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";
import { downloadImage } from "../controller/image-controller.js";

const router = express.Router();

router.get("/hello", (req, res) => {
  res.json({ code: 200, message: "Hello World" });
});

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);

export default router;
