import { getModelForClass } from "@typegoose/typegoose";
import User from "../domain/user.entity";

const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});

export default UserModel;
