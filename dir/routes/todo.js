"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router({ mergeParams: true });
var todos = [];
router.get("/", (req, res, next) => {
    res.send(todos);
});
router.post("/", (req, res, next) => {
    const { text } = req.body;
    const todo = { id: new Date().toISOString(), text };
    todos.push(todo);
    res.status(201).send("success");
});
router.put("/:id", (req, res, next) => {
    const { text } = req.body;
    const id = req.params.id;
    const idx = todos.findIndex(e => e.id == id);
    if (idx >= 0) {
        todos[idx] = { id: todos[idx].id, text: text };
        return res.send("updated");
    }
    res.status(404).send("invalid id");
});
router.delete("/:id", (req, res, next) => {
    const { text } = req.body;
    const id = req.params.id;
    todos = todos.filter(e => e.id != id);
    res.send("deleted");
});
module.exports = router;
