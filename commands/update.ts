import { MessageEmbed, TextChannel } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: "idk",
    description: 'send',

    slash: "both",
    guildOnly: true,

   
    requiredPermissions: ["ADMINISTRATOR"],

    callback: async ({ guild, message, interaction, args }) => {
        args.shift()
const embed = new MessageEmbed()
        const text = args.join(' ')
        const channelid = "929386457125257217"
        const channel = guild?.channels.cache.get(channelid) as TextChannel


        embed.setTitle(`Maarseveen - Update van : ${message.author.username}#${message.author.discriminator} `)
        embed.setDescription(text)
        const sendMessage = await channel.send({
            embeds: [
                embed
            ]
        })

        if (message) {
            return {
                custom: true,
                content: 'Message Gestuurd!'
            }
        }
   
        if (interaction) {
            return {
                custom: true,
                content: 'Message send',
            }
            
            
        }
        sendMessage.startThread({
name: ` Update`,
autoArchiveDuration: 60,
reason: `reageer op ${text} update`
        })
    }
} as ICommand