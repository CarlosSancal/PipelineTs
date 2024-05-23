import Server from "./provider/Server";
import { PORT, NODE_ENV } from "./config";
import express from "express";
import cors from "cors";
import MovieController from "./controllers/MovieController";
import VideogameController from "./controllers/VideogameController";

const server = new Server({
  port: PORT,
  env: NODE_ENV,
  middlewares: [express.json(), express.urlencoded({ extended: true }), cors()],
  controllers: [MovieController.instance, VideogameController.instance],
});

server.init();
