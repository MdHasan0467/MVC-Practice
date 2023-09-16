const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");




//! ---------- database connection ----------
mongoose.connect(process.env.DB_ATLAS).then(() => {
    console.log("Database Connection successfully established".red.bold);
});



//! ---------- Server PORT ----------
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("EduMate server Running...");
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});

