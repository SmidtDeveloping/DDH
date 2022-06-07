import { MessageEmbed, TextChannel, User } from "discord.js"
import { ICommand } from "wokcommands"

export default {
    category: "idk",
    description: 'send',

    slash: "both",
    guildOnly: true,

    minArgs: 2,
    expectedArgs: '<user> <message>',
    expectedArgsTypes: ["CHANNEL", "STRING"],

    requiredPermissions: ["ADMINISTRATOR"],

    callback: async ({ guild, message, interaction, args }) => {
        args.shift()
const embed = new MessageEmbed()
        const text = args.join(' ')
        let user: User
        if (message) {
             user = message.mentions.users.first() as User
        } else {
            user = interaction.options.getUser('user') as User
        }


        embed.setTitle(`Maarseveen - Dm van : ${message.author.username} `)
        embed.setDescription(text)
        const sendMessage = await user?.send({
            embeds: [
                embed
            ]
        })
console.log(`${message.author.username} heeft naar ${user} ${text} gestuurd`);
message.author.send(`Jij hebt ${user.username} dit bericht gestuurd: ${text}`)

        if (message) {
            return {
                custom: true,
                content: 'Message Gestuurd!'
            }
        }
   
        if (interaction) {
            return {
                custom: true,
                content: 'Message send',
            }
            
        }
    }
} as ICommand