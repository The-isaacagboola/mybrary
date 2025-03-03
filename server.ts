require("dotenv").config();

import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const authorRouter = require("./routes/author");

app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", indexRouter);
app.use("/authors", authorRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is listening on Port " + process.env.PORT);
});
