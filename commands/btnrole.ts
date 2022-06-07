import schema from "../models/roles"
import {
Client,
EmojiIdentifierResolvable,
GuildMember,
MessageActionRow,
MessageButton,
MessageButtonStyle,
Role,
TextChannel
} from "discord.js"
import { ICommand } from "wokcommands"

const styles = ['primary', 'secondery', 'succes', 'danger']
const prefix = 'button-roles-'
export default {
category: "idk",
description: "jpo",

// slash: "both",
// requiredPermissions: ["ADMINISTRATOR"],
// minargs: 2,
// expectedArgs: '<role> <emoji> <button> <style> <button-label>',
// expectedArgsTypes: ['ROLE', 'STRING', 'STRING', 'STRING'],
// options: [
//     {
//         name: 'role',
//         description: "role",
//         type: "ROLE",
//         required: true
//     },
//     {
//         name: 'emoij',
//         description: "emoij",
//         type: "STRING",
//         required: true
//     },
//     {
//         name: 'style',
//         description: "button-style",
//         type: "STRING",
//         required: true,
//         choices: styles.map((style) => ({
// name: style,
// value: style.toUpperCase()
//         })),
        
//     },
//     {
//         name: 'label',
//         description: "label",
//         type: "STRING",
//         required: true
//     }
// ],

// init: (client: Client) => {
// client.on('interactionCreate', (interaction) => {
//     if (interaction.isButton()) {
//         return
//     }
   
// const { guild, id } = interaction
// if(!guild || id.startsWith(prefix)) {
//     return
// }
// const roleId = id.replace(prefix, '')
// const member = interaction.member as GuildMember
// if(member.roles.cache.has(roleId)) {
//     member.roles.remove(roleId)


// } else {
//     member.roles.add(roleId)
// }



          

// })
// },
// callback: async ({guild, message, interaction, args}) => {
// args.shift()

// let role:Role
// if(message) {
// role = message.mentions.roles.first() as Role
// } else {
// role = interaction.options.getRole('role') as Role
// }

// const emoij = args.shift()

// const buttonStyle = args.shift() || 'primary'
// if(!styles.includes(buttonStyle.toLowerCase())) {
//     return `Geen/ongeldige style gebruik:
//     )} `
// }
// const buttonlabel = args.join(' ')

// const data = await schema.findById(guild!.id)
// if(!data ) {
//     return {
//         content: 'Geen role message gevonden maak er 1 met !btnmsg'
//     }
// }
// const {channelID, messageID} = data
// const channel = guild!.channels.cache.get(channelID) as TextChannel
// const roleMessage = await channel.messages.fetch(messageID)

// const rows = roleMessage.components
// const Button = new MessageButton()
// .setLabel(buttonlabel)
// .setEmoji(emoij as EmojiIdentifierResolvable)
// .setStyle(buttonStyle as MessageButtonStyle)
// .setCustomId(`${prefix}${role.id}`)
// let added = false

// for (const row of rows) {
//     if(row.components.length  < 5) {
// row.addComponents(Button)
// added = true
// break
//     }
// }

// if (!added) {
//     if(rows.length >= 5) {
//         return {
//             content: 'button kan niet worden toegevoegd'
//         }
//     }

//     rows.push(new MessageActionRow().addComponents(Button))
// }
// roleMessage.edit({
//     components: rows,
// })
// return {
//     content: 'Button toegevoegd'
// }
// }
} as ICommand