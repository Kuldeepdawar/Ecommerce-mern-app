// Now we will create auser model like user name, email, password, cartData
// creating new schema - new mongoose.Schema({})
// email will contain extrat like unique email key word
// cart will contain type: Object, default: {}
//}. use minimize: false because data
// thats it usermodel create a model in mongoose like mongoose,model
// 1st step
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, rquired: true },
    cardData: { type: Object, default: {} },
  },
  { minimize: false }
);

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
