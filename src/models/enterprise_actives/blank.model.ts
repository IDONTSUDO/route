import { IsString } from 'class-validator';
import { Schema, model, ObjectId } from 'mongoose';

export class BlankDTO {
  @IsString()
  public description: string;
  @IsString()
  public name: string;
}

export interface Blank extends IOtherExpenses, IDescription {
  timeAtCreate: number;
  resourceList: ObjectId[];
  serviceList: ObjectId[];
}

const schema = new Schema<Blank>({
  timeAtCreate: { type: Number, default: new Date().getTime() },
  name: { type: String, required: true },
  description: { type: String, required: true },
  resourceList: { type: [String], default: [] },
  serviceList: { type: [String], default: [] },
  otherExpenses: { type: [Number], default: [] },
});

export const BlankModel = model<Blank>('Blank', schema);
