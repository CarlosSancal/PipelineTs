import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import MovieModel from "../modelsNOSQL/movieNOSQL";

class MovieController extends AbstractController {
  // Singleton
  // Atributo de clase
  private static _instance: MovieController;

  // Método de clase
  public static get instance(): AbstractController {
    if (!this._instance) {
      this._instance = new MovieController("movie");
    }
    return this._instance;
  }

  protected initRoutes(): void {
    this.router.post("/agregarPelicula", this.postAgregarPelicula.bind(this));
    this.router.get(
      "/consultarPeliculas",
      this.getConsultarPeliculas.bind(this)
    );
  }

  private async postAgregarPelicula(req: Request, res: Response) {
    try {
      console.log(req.body);
      await MovieModel.create(req.body);
      console.log("Película creada");
      res.status(200).send("Película creada");
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error" + err);
    }
  }

  private async getConsultarPeliculas(req: Request, res: Response) {
    try {
      const peliculas = await MovieModel.scan().exec().promise();
      console.log(peliculas);
      res.status(200).send(peliculas[0].Items);
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error" + err);
    }
  }
}

export default MovieController;
