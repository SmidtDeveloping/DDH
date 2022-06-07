import mongoose, { Schema } from "mongoose";

const reqstring = {
    type: String,
    required: true
}

const schema = new Schema(
    {
userId: reqstring,
guildId: reqstring,
staffid: reqstring,
reden: reqstring,
expires: Date,
type: {
    type: String,
    required: true,
    enum: ["ban", 'mute']
}

    },
    {
        timestamps: true
    }
)



const name = "foutschema"

export default mongoose.models[name] || mongoose.model(name, schema, name)