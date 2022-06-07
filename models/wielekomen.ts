import mongoose, { Schema } from "mongoose";

const reqstring = {
    type: String,
    required: true
}

const schema = new Schema({
_id: reqstring,
channelID: reqstring,
text: reqstring
})


const name = "wielschema"

export default mongoose.models[name] || mongoose.model(name, schema, name)