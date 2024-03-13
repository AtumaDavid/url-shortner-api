const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

// routes
app.use("/", require("./routes/index"));
app.use("/api/Url", require("./routes/url"));

app.listen(5000, () => console.log("server running"));
