import { Blank, BlankModel, BlankDTO } from '@/models/enterprise_actives/blank.model';
import { Product, ProductModel, ProductDTO } from '@/models/enterprise_actives/product.model';
import { Resource, ResourceModel, ResourceDTO } from '@/models/enterprise_actives/resource.model';
import { Service, ServiceDTO, ServiceModel } from '@/models/enterprise_actives/service.model';
import { UserModel, UserDTO } from '@/models/user.model';
import { BaseCrudRouter } from './baseCrudRouter';
import { UserRouter } from './user.router';

export const routes = [
  new BaseCrudRouter<Resource>('resource', ResourceModel, ResourceDTO),
  new BaseCrudRouter<Blank>('blank', BlankModel, BlankDTO),
  new BaseCrudRouter<Product>('product', ProductModel, ProductDTO),
  new BaseCrudRouter<Service>('service', ServiceModel, ServiceDTO),
  new UserRouter('user', UserModel, UserDTO),
];
