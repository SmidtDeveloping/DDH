import {MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: "moderation",
    description: 'stuurt een embed',
   permissions: ["ADMINISTRATOR"],
    // testOnly: true,
    slash: "both",
   
    callback: ({ message, text, client, args }) => {
const json = JSON.parse(text)
const embed = new MessageEmbed(json)

return embed 
    }
} as ICommand 