import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
export default {
    category: "moderation",
    description: 'stuurt een embed',
    permissions: ["ADMINISTRATOR"],
    testOnly: false,
    callback: ({ message, args,  client }) => {
        let id = args.slice(0).join(' ')
        let dUser = message.guild?.members.cache.get(id)
        const embed = new MessageEmbed().setDescription('test');
        message.channel.send({ embeds: [embed] });
        //for users (dms)
        dUser?.send({ embeds: [embed] });
    }
} as ICommand