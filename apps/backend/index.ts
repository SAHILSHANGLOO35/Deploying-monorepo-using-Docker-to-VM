import { prismaClient } from "db/client";
import express from "express";

const app = express();
app.use(express.json());

app.post("/user", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ error: "Username and password are required" });
        return
    }
    
    const user = await prismaClient.user.create({
        data: {
            username,
            password
        }
    });

    res.status(200).json({
        message: "User added successfully",
        user
    });
});

app.get("/users", async (req, res) => {
    const users = await prismaClient.user.findMany({});
    res.json({
        users
    });
});

app.post("/todos", async (req, res) => {
    const { task, userId } = req.body;

    const todos = await prismaClient.todo.create({
        data: {
            task,
            userId
        },
    });

    res.status(200).json({
        message: "Todo added successfully",
        todos
    })
})

app.listen(8000, () => {
    console.log("Server started successfully")
});