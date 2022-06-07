import { Client, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    description: 'test',
    category: "Test",
    slash: "both",
    callback: async ({guild, channel}) => {
const embed = new MessageEmbed()
embed.setTitle(`${guild?.name.toString()} Server Info`)
embed.addField( "Name", `${guild?.name.toString()}`, true)
embed.addField("id", `${guild?.id.toString()}`, true )
embed.addField("owner", `<@${guild?.ownerId}>`, true)
embed.addField('members', `${guild?.memberCount}`, true)
embed.addField('channels', `${guild?.channels.channelCountWithoutThreads}`, true)
embed.addField('Emojis', `${guild?.emojis}`, true)

channel.send({
    embeds: [
        embed
    ]
})
    }
} as ICommand