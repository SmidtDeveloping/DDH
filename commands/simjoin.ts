import { ICommand } from "wokcommands";

export default {
    category: 'moderation',
    description: 'Simuleer het welkom bericht',
    
    aliases: [
        "join"
    ],
    slash: "both",
    testOnly: false,
    
    requireRoles: true,
    callback: ({member, client}) => {
        client.emit("guildMemberAdd", member)
        return "👍"
    }
} as ICommand