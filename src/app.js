const express = require("express");

class App {
  constructor() {
    this.serve = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.serve.use(express.json());
  }
  routes() {}
}

module.exports = new App().serve;
