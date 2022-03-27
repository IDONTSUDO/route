import { Router } from 'express';
import { Model } from 'mongoose';

export interface Routes {
  path?: string;
  router: Router;
}
export abstract class IBaseRouter<T> {
  path: string;
  scheme: Model<T>;
  dto;
}
export abstract class IBaseAddRouter {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public addRoute(): void {}
}
