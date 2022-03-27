import { connect } from 'mongoose';

export async function run(): Promise<void> {
  await connect('mongodb://localhost:27017/test');
}
//   const doc = new UserModel({
//     name: 'Bill',
//     email: 'bill@initech.com',
//     avatar: 'https://i.imgur.com/dM7Thhn.png',
//   });
//   await doc.save();

//   console.log(doc.email); // 'bill@initech.com'
