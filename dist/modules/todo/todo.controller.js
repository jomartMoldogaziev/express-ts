"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [];
const getTodos = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (e) {
        console.error("Error in getTodos:", e);
    }
};
const createTodo = async (req, res) => {
    const { name, description } = req.body;
    try {
        const newData = {
            id: data.length + 1,
            name,
            description,
        };
        data.push(newData);
        res.status(201).send({
            success: true,
            data: newData,
        });
    }
    catch (e) {
        console.error("Error in createTodo:", e);
    }
};
const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const todoIndex = data.findIndex(todo => todo.id === +id);
        data.splice(todoIndex, 1);
        res.status(200).send({
            success: true,
            data: todoIndex,
        });
    }
    catch (e) {
        console.error("Error in deleteTodo:", e);
    }
};
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const todoIndex = data.findIndex(todo => todo.id === +id);
        if (todoIndex === -1) {
            return res.status(404).send({
                success: false,
                message: "Todo not found",
            });
        }
        data[todoIndex] = {
            id: +id,
            name,
            description,
        };
        res.status(200).send({
            success: true,
            data: data[todoIndex],
        });
    }
    catch (e) {
        console.error("Error in updateTodo:", e);
    }
};
const patchTodo = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const todoIndex = data.findIndex(todo => todo.id === +id);
        if (todoIndex === -1) {
            return res.status(404).send({
                success: false,
                message: "Todo not found",
            });
        }
        if (name !== undefined)
            data[todoIndex].name = name;
        if (description !== undefined)
            data[todoIndex].description = description;
        res.status(200).send({
            success: true,
            data: data[todoIndex],
        });
    }
    catch (e) {
        console.error("Error in patchTodo:", e);
    }
};
exports.default = { getTodos, createTodo, deleteTodo, updateTodo, patchTodo };
//# sourceMappingURL=todo.controller.js.map