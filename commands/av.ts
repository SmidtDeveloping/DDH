import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
export default {
    category: "moderation",
    description: 'stuurt een embed',
    testOnly: false,
    callback: ({ message, args,  client }) => {
        const embed = new MessageEmbed()
        embed.setTitle(`${message.author.username}#${message.author.discriminator}`)
        embed.setImage(message.author.displayAvatarURL())


        message.channel.send({
            embeds: [
                embed
            ]
        })
        }
} as ICommand