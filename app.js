const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const BusDetailsRouter = require("./routes/busDetails");
const mongoose = require("mongoose");
const URL =
  "mongodb+srv://Samapika:SAIdipa1234@cluster0.0iknb.mongodb.net/?retryWrites=true&w=majorit";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(BusDetailsRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(URL, { useNewUrlParser: true })
  .then((res) => console.log("connected to the database"))
  .then(() => app.listen(PORT, () => console.log("connected to server")));
