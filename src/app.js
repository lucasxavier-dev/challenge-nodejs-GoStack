const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4"); //generate unique id

// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO

  
});

app.post("/repositories", (request, response) => {
  // TODO

  const {title, url, techs} = request.body;

  const project = { id: uuid(), title , url, techs, likes: 0 };

        repositories.push(project);
  return response.json(project);
});

app.put("/repositories/:id", (request, response) => {
  // TODO

  const { id }


});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
