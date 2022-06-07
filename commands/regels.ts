import {Integration, MessageEmbed, Webhook } from "discord.js";
import { ICommand } from "wokcommands";
const config = require("./config.sample")
export default {
    category: "moderation",
    description: 'stuurt het help embed',
    slash: "both",
    testOnly: false,
    permissions: ["ADMINISTRATOR"],
    callback: ({ message, text, client, member, channel }) => {

const embed = new MessageEmbed()
embed.setAuthor("DDHB - Rules")
embed.addField("", '.1 Staff members always have the last word.\n 2. Everyone should respect each other. \n 3. NSFW Content is not allowed. \n 4. Things that happened in-game should only be covered in the proper channels. \n 5. Self-promotion and advertising is prohibited. If you do this, you will be banned.')
embed.addField("", "6. Use the channels they should be used for. \n 7. The use of swear words is allowed except for a few words. Illnesses and family leave. \n 8. Arguing with a higher Staff member in the server is not allowed \n 9. Using voice changers and soundboards is not allowed.\n 10.  Leaking personal data is prohibited. \n 11. Gedraag je niet als stafflid zowel ingame als in de discord, we hebben genoeg staff om actie te kunnen ondernemen waar nodig is. \n 7. Schelden is niet toegestaan. \n 8. Prive informatie delen van andere zonder de toestemming van die persoon mag niet. \n 9. Hou je berichten netjes. Gebruik geen overmatig caps. \n 10. Je hebt respect voor onze staffleden. Misgunnend gedrag wordt niet getolereerd. Je moet luisteren als ze daar om vragen, ga niet in discussie. \n 11.  Making a racist comment will result in a ban. "),
embed.setTitle('**Rules Embed**')
embed.setFooter("DDH - Alle Rechten Voortbehouden")
console.log("-".repeat(120))
console.log(`${message.author.tag} Heeft de regels in channel: ${channel.name}, server: ${message.guild?.name.toString()}`)
console.log("-".repeat(120));
channel.send({
    embeds: [
        embed, 
    ]
})
    }
} as ICommand