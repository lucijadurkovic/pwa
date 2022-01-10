import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000; //biramo port na kojem serviramo sadržaj, ovo je za bez live servera
app.use(express.static(path.resolve()));

app.get("/index.html", (req, res) => {
  res.type("text/html");
  res.sendFile(path.join(path.resolve(), "/index.html")); //ovo mora bit apsolutna putanja, path je helper koji ju odredi
});
app.use((req, res) => {
  //ne specifira metodu nego svaki put ako ne uđe u gornji get nijedan, uđe tu i vrati 404
  res.type("text/plain");
  res.status(404);
  res.send("404 Not found ☕_☕");
});
app.listen(port, () =>
  //sluša da li dolaze zahtjevi od korisnika
  console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `)
);
