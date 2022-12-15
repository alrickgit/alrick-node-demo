const express = require("express");
const app = express();
const portNumber = 9080;

app.listen(portNumber, () => {
  console.log("My App");
  console.log(`Go to http://localhost:${portNumber} to view the app.`);
});

app.get("/", (req, res) => {
  console.log("Welcome");
  res.send("Welcome to your App Alrick!");
});

app.get("/home", (req, res) => {
  console.log("Home");
  res.send("Home Page!");
});

app.get("/about", (req, res) => {
  console.log("About");
  res.send("About Page!");
});

app.get("/contacts", (req, res) => {
  console.log("Contacts");
  res.send("Contacts Page!");
});
