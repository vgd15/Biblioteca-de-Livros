import mongoose from "mongoose"

mongoose.connect("mongodb+srv://vgd15:Deise1998@cluster0.ehqzbzl.mongodb.net/node-livros");

let db = mongoose.connection;

export default db; 