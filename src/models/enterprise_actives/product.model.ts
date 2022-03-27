import { IsString } from 'class-validator';
import types from 'mongoose';
import { Schema, model } from 'mongoose';

export class ProductDTO {
  @IsString()
  public description: string;
  @IsString()
  public name: string;
}

export interface Product extends IDescription, IOtherExpenses {
  price: number;
  resourceList: string[];
  photos: string[];
  serviceList: types.ObjectId[];
  productList: types.ObjectId[];
  blankList: types.ObjectId[];
}

const schema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  resourceList: { type: [String] },
  serviceList: { type: [String] },
  otherExpenses: { type: [Number] },
});

export const ProductModel = model<Product>('Product', schema);
