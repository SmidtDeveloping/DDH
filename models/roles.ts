import mongoose from "mongoose"

const reqString = {
    type: String,
    required: true,
}

const schema = new mongoose.Schema({
    _id: reqString,
    channelID: reqString,
    messageID: reqString
})

const name = "role-schema"

export default mongoose.models[name] || mongoose.model(name,schema, name)
