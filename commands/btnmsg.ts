import schema from "../models/roles"
import { TextChannel } from "discord.js"
import { ICommand } from "wokcommands"
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums"
export default {
    category: "idk",
    description: 'send',

//     slash: "both",
//     guildOnly: true,


// options: [
// {
//     name: "channel",
//     type: ApplicationCommandOptionTypes.CHANNEL,
//     description: 'channel',
//     required: true
// },
// {
//     name: "message",
//     type: ApplicationCommandOptionTypes.STRING,
//     description: 'message',
//     required: true
// }
// ],
//     requiredPermissions: ["ADMINISTRATOR"],

//     callback: async ({ guild, message, interaction, args }) => {
//         args.shift()

//         const text = args.join(' ')
//         let channel: TextChannel
//         if (message) {
//             channel = message.mentions.channels.first() as TextChannel
//         } else {
//             channel = interaction.options.getChannel('channel') as TextChannel
//         }
//         const sendMessage = await channel.send(text)

//         await new schema({
//             _id: guild?.id,
//             channelID: channel.id,
//             messageID: sendMessage.id
//         }).save()

//         if (interaction) {
//             return {
//                 custom: true,
//                 content: 'Message send',
//             }
//         }
//     }
} as ICommand