import express from "express";
import routes from "./routes";

import "./database";

class App {
  constructor() {
    this.serve = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.serve.use(express.json());
  }
  routes() {
    this.serve.use(routes);
  }
}

export default new App().serve;
