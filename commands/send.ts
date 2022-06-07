import { MessageEmbed, TextChannel } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: "idk",
    description: 'send',

    slash: "both",
    guildOnly: true,

    minArgs: 2,
    expectedArgs: '<channel> <message>',
    expectedArgsTypes: ["CHANNEL", "STRING"],

    requiredPermissions: ["ADMINISTRATOR"],

    callback: async ({ guild, message, interaction, args }) => {
        args.shift()
const embed = new MessageEmbed()
        const text = args.join(' ')
        let channel: TextChannel
        if (message) {
            channel = message.mentions.channels.first() as TextChannel
        } else {
            channel = interaction.options.getChannel('channel') as TextChannel
        }
if (!channel) {
    channel = message.channel as TextChannel 
}
if(channel.id == "928979170049015849" || channel.id == "937144981775339570") {
    channel.send(`${message.author.username}#${message.author.discriminator}, @everyone`)
}
        embed.setTitle(`Maarseveen - Mededeling van : ${message.author.username}#${message.author.discriminator} `)
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
name: ` mededeling`,
autoArchiveDuration: 60,
reason: `reageer op ${text} mededeling`
        })
    }
} as ICommand