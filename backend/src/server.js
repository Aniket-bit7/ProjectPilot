const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())


app.get("/", (req, res) => {
  res.status(200).json({"message": "Server is live."})
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server is running live on http://localhost:${port}.`)
})