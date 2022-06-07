import mongoose, {Schema} from "mongoose";

const reqstring = {
    type: String,
    required: true
}

const schema = new Schema(
    {
        userID: reqstring,
        guildId: reqstring,
        reden: reqstring,
        staffId: reqstring
    },
    {
        timestamps: true
    }
)

const name =  "warn"

export default mongoose.models[name] || mongoose.model(name, schema)