import { User } from '@/models/user.model';
import { BaseCrudRouter } from './baseCrudRouter';
import { NextFunction, Request, Response } from 'express';
import { IBaseAddRouter } from '@/interfaces/router';

export class UserRouter extends BaseCrudRouter<User> implements IBaseAddRouter {
  constructor(path, scheme, dto) {
    super(path, scheme, dto);
    this.addRoute();
  }
  addRoute() {
    this.router.post(`${this.path}/add/photo`, (req, res, next) => {
      this.savePhoto(req, res, next);
    });
  }
  savePhoto(req: Request, res: Response, next: NextFunction) {
    res.status(200).jsonp('');
  }
}
