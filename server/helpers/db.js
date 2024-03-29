import mongoose from "mongoose"

const connectdb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log("****Database Connected****")
    } catch (error) {
        console.log(error)
    }
}

export default connectdb;