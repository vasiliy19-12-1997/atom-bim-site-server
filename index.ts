import  express  from "express";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(5001, () => console.log("Server ready on port 5001."));

module.exports = app;