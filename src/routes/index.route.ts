import { Routes } from '@/interfaces/router';
import { Router } from 'express';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, (req, res, next) => {
      next();
    });
  }
}

export default IndexRoute;
