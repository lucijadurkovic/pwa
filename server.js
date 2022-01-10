import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.resolve()));

app.get("/index.html", (req, res) => {
  res.type("text/html");
  res.sendFile(path.join(path.resolve(), "/index.html"));
});
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 Not found ☕_☕");
});
app.listen(port, () =>
  console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `)
);
