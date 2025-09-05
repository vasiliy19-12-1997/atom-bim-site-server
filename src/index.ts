import  { Request, Response } from 'express'
var express = require('express')
var cors = require('cors')

const app = express();
app.use(cors())
var corsOptions = {
  origin: 'https://atom-bim-site-server.vercel.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.get("/", cors(corsOptions), (req:Request, res:Response) => res.send("Express on Vercel"));

app.listen(5001, () => console.log("Server ready on port 5001."));

module.exports = app;