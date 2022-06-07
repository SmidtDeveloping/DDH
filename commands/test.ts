import { GuildMember } from "discord.js";
import { ApplicationCommandOptionTypes } from "discord.js/typings/enums";
import { ICommand } from "wokcommands";
const DJS = require("discord.js")
export default {
category: 'test',
description: 'tester',
slash: 'both',
testOnly: false,
options: [
    {
        name: 'naam',
        description: 'naam van het kanaal',
        required: true,
        type: ApplicationCommandOptionTypes.STRING
    },
    {
        name: "parent",
        description: "moi!",
        required: true,
        type: ApplicationCommandOptionTypes.STRING
        }
],
callback: ({ interaction, client, message, args}) => {
message?.guild?.channels.create(`${interaction.options.getString("naam")}`, {
    parent: `${interaction.options.getString("parent")}`,
    permissionOverwrites: [{
        id: message.guild.roles.everyone.id,
        allow: ["VIEW_CHANNEL"],
        deny: ["SEND_MESSAGES"]
    }]
})
}
} as ICommand