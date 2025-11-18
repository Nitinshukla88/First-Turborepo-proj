import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message : "Hello, World!"
    })
})

app.listen(3004, () => {
    console.log("Server is running on http://localhost:3004");
});