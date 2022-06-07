import { Client, TextChannel } from "discord.js";
import  schema  from "../models/wielekomen";


const welkomData = {} as {
[key: string]: [TextChannel, String]
}
export default (client:Client) => {
    client.on('guildMemberAdd', async member => {
const {guild, id} = member

let data = welkomData[guild.id]

if(!data) {
    const rest = await schema.findById(guild.id)
    if(!rest) {
        return
    }
    const {channelID, text } = rest
    const channel = guild.channels.cache.get(channelID) as TextChannel;
data = welkomData[guild.id] = [channel, text]


}
data[0].send({
    content: data[1].replace(/@/g, `<@${id}>`)
})

    })
}

export const config = {
displayName: 'Welcome Channel',
dbName: 'WELCOM_CHANNEL'
}