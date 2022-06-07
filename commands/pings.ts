import {
    GuildMember,
    MessageEmbed
} from "discord.js"
import { ICommand } from "wokcommands"
import schama from '../models/warn'

export default {
    category: "Moderation",
    description: 'warn een user',


    slash: "both",
    guildOnly: false,

    options: [
        {
            type: "SUB_COMMAND",
            name: "mededeling",
            description: "Geeft een persoon de role mededeling",
         
        },
        {
            type: "SUB_COMMAND",
            name: "update",
            description: "geeft  een persoons de update role",
           
        },
    

    ],

    callback: async ({ guild, message, interaction, user, member }) => {
         const subCommand = interaction.options.getSubcommand()

         if (subCommand === "mededeling") {
const roleid = "980450546840383578"
const role = guild?.roles.cache.get(roleid)
if (member.roles.cache.has(roleid)) {
    member.roles.remove(roleid)
    interaction.reply("Role Verwijderd")
} else {
    member.roles.add(roleid)
    interaction.reply("Role toegevoegd")
}


    } else if (subCommand === "update") {
        const roleid = "980451739067117578"
        const role = guild?.roles.cache.get(roleid)
        if (member.roles.cache.has(roleid)) {
            member.roles.remove(roleid)
            interaction.reply("Role Verwijderd")

        } else {
            member.roles.add(roleid)
            interaction.reply("Role toegevoegd")

        }}
    
        }
} as ICommand