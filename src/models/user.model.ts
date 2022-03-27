import { Schema, model } from 'mongoose';
import { IsString } from 'class-validator';
export class UserDTO {
  @IsString()
  public email: string;
  @IsString()
  public name: string;
  @IsString()
  public password: string;
}
export interface User {
  name: string;
  email: string;
  avatar?: string;
  password: string;
}

const schema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
});

export const UserModel = model<User>('User', schema);
