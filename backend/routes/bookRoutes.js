const express = require("express");

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getBooks);

router.get("/:id", authMiddleware, getBookById);

router.post("/", authMiddleware, createBook);

router.put("/:id", authMiddleware, updateBook);

router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;