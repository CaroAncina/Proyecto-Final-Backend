import mongoose from "mongoose";

const cartsCollection = "Carritos"

const cartsSchema = new mongoose.Schema({
   
})

const cartsModel = mongoose.model(cartsCollection, cartsSchema)

export default cartsModel