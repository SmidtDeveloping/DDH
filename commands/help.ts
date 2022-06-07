import {Integration, MessageEmbed, Webhook } from "discord.js";
import { ICommand } from "wokcommands";
const config = require("./config.sample")
export default {
    category: "moderation",
    description: 'stuurt het help embed',
    slash: "both",
    testOnly: false,
    callback: ({ message, text, client, member }) => {

const embed = new MessageEmbed()
embed.setAuthor("Maarseveen")
embed.addField("Help:", 'Send dit embed')
embed.addField("Ping", 'Pingt de bot')
embed.addField("SetWelkom", 'Set het welkom kanaal')
embed.addField("SetDoei", 'Set het Doei kanaal')
embed.addField("Status", 'Zet het Status bericht van de bot')
embed.addField("Sim Join", 'Simuleert het join bericht')
embed.addField("Sim doei", 'Simuleert het doei bericht')
embed.addField("Ticket", 'Maakt een ticket')
embed.setTitle('**Help Embed**')
embed.setFooter("DDH - Alle Rechten Voortbehouden")
member.send({
    embeds: [
        embed 
    ]
})
return "kijk je dm"
    }
} as ICommand