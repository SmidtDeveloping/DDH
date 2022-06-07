import DJS from "discord.js";
import { ICommand } from "wokcommands";
import schema from "../models/doeischema"

export default {
category: "Config",
description: "zet je eigen doei channel",

permissions: ["ADMINISTRATOR"],

minArgs: 2,
expectedArgs: '<channel>, <text>',

slash: "both",
testOnly: false,
options: [
    {
        name: 'channel',
        description: 'Kanaal',
        required: true,
        type: DJS.Constants.ApplicationCommandOptionTypes.CHANNEL
    },
    {
        name: "text",
        description: "De text die in het kanaal komt te staan",
        required: true,
        type: DJS.Constants.ApplicationCommandOptionTypes.STRING
        }
],
callback: async ({ guild, message, interaction, args}) => {
    if(!guild) {
        return "Je zit niet in een server"
    }
const target = message ? message.mentions.channels.first() : interaction.options.getChannel('channel')

if (!target || target.type !== "GUILD_TEXT") {
return "Geef een (text)kanaal op"
}

let text = interaction?.options.getString('text')
if(message) {
    args.shift()
    text = args.join(' ')
}

await schema.findOneAndUpdate({
_id: guild.id
}, {
    _id: guild.id,
    text,
    channelID: target.id
}, {
    upsert: true
})

return "Channel gezet"
}
} as ICommand