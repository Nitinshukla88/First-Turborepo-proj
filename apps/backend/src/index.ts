import express from "express";
import {BACKEND_URL} from "@repo/common/config";

const app = express();
console.log("Backend URL:", BACKEND_URL);
app.get("/", (req, res) => {
    res.json({
        message : "Hello, World!"
    })
})

app.listen(3004, () => {
    console.log("Server is running on http://localhost:3004");
});