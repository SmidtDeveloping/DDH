import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: "Kickt een persoon",
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

if(!target.kickable) {

    return {
        custom: true,
        content:  "Jij kan dat persoon niet kicken",
        ephemaral: true
    }
}
args.shift()
const reden = args.join(' ')

target.kick(reden)

return{
    ephemaral: true,
    content:  `Je hebt <@${target.id}> gekickt`,
    custom: true
    }

}


} as ICommand