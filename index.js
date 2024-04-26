import { render } from "ejs";
import express, { response } from "express";

const app = express();
const url = "https://cssday.nl/data.json";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

// Mijn routes

// index
app.get("/", (request, response) => {
  console.log(request.query.methods);
  const methodsUrl = url + "/methods?first=100";
  response.render("index", data);
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
}