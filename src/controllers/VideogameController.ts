import { Request, Response } from "express";
import AbstractController from "./AbstractController";
import db from "../models";

class VideogameController extends AbstractController {
  // Singleton
  // Atributo de clase
  private static _instance: VideogameController;
	
  // Método de clase
  public static get instance(): AbstractController {
    if (!this._instance) {
      this._instance = new VideogameController("videogame");
    }
    return this._instance;
  }
  
  protected initRoutes(): void {
    this.router.post(
      "/agregarVideojuego",
      this.postAgregarVideojuego.bind(this)
    );
    this.router.get(
      "/consultarVideojuegos",
      this.getConsultarVideojuegos.bind(this)
    );
  }

  private async postAgregarVideojuego(req: Request, res: Response) {
    try {
      console.log(req.body);
      await db.Videogame.create(req.body);
      console.log("Videojuego creado");
      res.status(200).send("Videojuego creado");
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Internal server error" + error);
    }
  }

  private async getConsultarVideojuegos(req: Request, res: Response) {
    try {
      console.log("Consultar videojuegos");
      let videojuegos = await db["Videogame"].findAll();
      res.status(200).json(videojuegos);
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Internal server error" + error);
    }
  }
}

export default VideogameController;
