"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createBook_1 = __importDefault(require("../../controllers/createBook"));
const deleteBook_1 = __importDefault(require("../../controllers/deleteBook"));
const updateBook_1 = __importDefault(require("../../controllers/updateBook"));
const listBooks_1 = __importDefault(require("../../controllers/listBooks"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Hello, World");
});
router.get("/books", listBooks_1.default.listBooks);
router.post("/createbook", createBook_1.default.createBook);
router.post("/deletebook/:id", deleteBook_1.default.deleteBook);
router.post("/updatebook/:id", updateBook_1.default.updateBook);
exports.default = router;
