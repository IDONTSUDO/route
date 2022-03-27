import { Schema, model } from 'mongoose';
import { IsString } from 'class-validator';

export interface Resource {
  price: number;
  name: string;
  description: string;
  services: string[];
  otherExpenses: number[];
  photos: string[];
}

const schema = new Schema<Resource>({
  price: { type: Number },
  name: { type: String, required: true },
  description: { type: String, required: true },
  photos: { type: [String] },
  services: { type: [String] },
  otherExpenses: { type: [Number] },
});

export class ResourceDTO {
  @IsString()
  public description: string;
  @IsString()
  public name: string;
}

export const ResourceModel = model<Resource>('Resource', schema);
