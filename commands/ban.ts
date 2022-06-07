import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: "band een persoon",
// permissions: ["ADMINISTRATOR"],
requireRoles: true,
slash: false,
testOnly: false,

guildOnly: false,

minArgs: 2,
expectedArgs: '<user> <reason>',
expectedArgsTypes: ["USER", "STRING"],

callback: ({message, interaction, args}) => {
const target = message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember
if(!target) {
    return "Geef een gebruiker mee"
}

if(!target.bannable) {

    return {
        custom: true,
        content:  "Jij kan dat persoon niet Bannen!",
        ephemaral: true
    }
}
args.shift()
const reden = args.join(' ')

target.ban({reason: reden})

return{
    ephemaral: true,
    content:  `Je hebt <@${target.id}> Geband`,
    custom: true
    }

}


} as ICommand