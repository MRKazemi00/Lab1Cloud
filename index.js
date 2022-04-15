const express = require("express");
const app = express();

app.get('/RezaKazemi', (req, res) => {
  res.send("Reza Kazemi")
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running"));