import express from "express";
import { render } from "ejs";
import fetch from "node-fetch";

const app = express();
const url = "https://cssday.nl/data.json";

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}

// Index route
app.get("/", async (request, response) => {
  try {
    const data = await fetchJson(url);
    response.render("index", { data: data });
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Error fetching data");
  }
});


app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log(`Application started on http://localhost:${app.get("port")}`);
});
