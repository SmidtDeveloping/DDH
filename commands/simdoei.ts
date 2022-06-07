import { ICommand } from "wokcommands";

export default {
    category: 'moderation',
    description: 'Simuleer het doei bericht',
    aliases: [
        "doei"
    ],
    slash: "both",
    testOnly: false,
    requireRoles: true,
    callback: ({member, client}) => {
        client.emit("guildMemberRemove", member)
        return "👍"
    }
} as ICommand