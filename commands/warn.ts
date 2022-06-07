import {
    MessageEmbed
} from "discord.js"
import { ICommand } from "wokcommands"
import schama from '../models/warn'

export default {
    category: "Moderation",
    description: 'warn een user',

    requireRoles: true,

    slash: "both",
    guildOnly: false,

    options: [
        {
            type: "SUB_COMMAND",
            name: "toevoegen",
            description: "Geeft een persoon een warn",
            options: [
                {
                    name: "user",
                    type: "USER",
                    description: "Het persoon",
                    required: true
                },
                {
                    name: "reden",
                    type: "STRING",
                    description: "de reden",
                    required: true
                },
            ]
        },
        {
            type: "SUB_COMMAND",
            name: "remove",
            description: "removed  een persoons warn",
            options: [
                {
                    name: "user",
                    type: "USER",
                    description: "Het persoon",
                    required: true
                },
                {
                    name: "id",
                    type: "STRING",
                    description: "warn id",
                    required: true
                },
            ]
        },
        {
            type: "SUB_COMMAND",
            name: "list",
            description: "Lijst van alle warnings van een user",
            options: [
                {
                    name: "user",
                    type: "USER",
                    description: "Het persoon",
                    required: true
                }
            ]
        }

    ],

    callback: async ({ guild, member: staff, interaction }) => {
         const subCommand = interaction.options.getSubcommand()
         const user = interaction.options.getUser('user')
         const reden = interaction.options.getString('reden')
         const id = interaction.options.getString('id')
    if (subCommand === "toevoegen") {
const warning = await schama.create({
    userID: user?.id,
    guildId: guild?.id,
    reden,
    staffId: staff.id
})
user?.send({
    content: `${staff.user.username} heeft jou een warn gegeven`
})
return {
    custom: true,
content: `warn toegevoegd id: ${warning.id} naar <@${user?.id}>`,
allowedMentions: {
    users: []
}
}

    } else if (subCommand === "remove") {
const warning = await schama.findByIdAndDelete(id)
return {
    custom: true,
    content: `Warn wegehaald id: ${warning.id} van: <@${user?.id}>`,
    allowedMentions: {
        users: [],
    }
}
    } else if (subCommand === 'list') {
const warnings = await schama.find({
    userID: user?.id,
    guildId: guild?.id
})

let dis = `Warns van <@${user?.id}>:\n\n`

for(const warn of warnings) {
    dis += `**id:** ${warn._id}\n`
    dis += `**datum:** ${warn.createdAt.toLocaleString()}\n`
    dis += `**staff lid:** <@${warn.staffId}>\n`
    dis += `**reden:** ${warn.reden}\n\n`
}

const embed = new MessageEmbed().setDescription(dis)
return embed
    }
    
        }
} as ICommand