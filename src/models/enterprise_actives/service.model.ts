import { IsString, IsArray } from 'class-validator';
import { Schema, model } from 'mongoose';

export interface Service extends IOtherExpenses, IDescription, IPrice {
  isExternal: boolean;
}
export class ServiceDTO {
  @IsArray()
  public otherExpenses: number[];
  @IsString()
  public name: string;
}

const schema = new Schema<Service>({
  otherExpenses: { type: [Number], required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  isExternal: { type: Boolean },
});

export const ServiceModel = model<Service>('Service', schema);
