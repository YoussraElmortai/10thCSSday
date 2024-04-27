import { render } from "ejs";
import express from "express";
import fetch from "node-fetch";

const app = express();
const url = "https://cssday.nl/data.json";

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

// Mijn routes

// index
app.get("/", async (request, response) => {
  console.log(url);

  try {
    const data = await fetchJson(url); 
    response.render("index", { data }); 
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Error fetching data");
  }
});

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => { throw error; });
}