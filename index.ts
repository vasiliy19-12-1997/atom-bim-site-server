import  express  from "express";
import cors from 'cors';
const app = express();
app.use(cors())
var corsOptions = {
  origin: 'https://atom-bim-site-server.vercel.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.get("/", cors(corsOptions), (req, res) => res.send("Express on Vercel"));

app.listen(5001, () => console.log("Server ready on port 5001."));

module.exports = app;