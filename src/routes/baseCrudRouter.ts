import { IBaseRouter } from '@/interfaces/router';
import validationMiddleware from '@/middlewares/validation.middleware';
import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import { Model } from 'mongoose';

export class BaseCrudRouter<T> implements IBaseRouter<T> {
  path: string;
  scheme: Model<T>;
  dto;
  public router = Router();
  constructor(path, scheme, dto) {
    this.path = '/' + path;
    this.scheme = scheme;
    this.dto = dto;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}/new`, validationMiddleware(this.dto, 'body'), (req, res, next) => {
      this.create(req, res, next);
    });
    this.router.delete(`${this.path}/delete/:id`, (req, res, next) => {
      this.delete(req, res, next);
    });
    this.router.put(`${this.path}/edit/:id`, (req, res, next) => {
      this.edit(req, res, next);
    });
  }
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await new this.scheme(req.body);
      res.status(200).jsonp(await data.save());
    } catch (error) {
      next(error);
    }
  }
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).jsonp(await this.scheme.findByIdAndDelete(req.params.id));
    } catch (error) {
      next(error);
    }
  }
  public async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      res.status(200).jsonp(await this.scheme.findByIdAndUpdate(id, req.body));
    } catch (error) {
      next(error);
    }
  }
}
