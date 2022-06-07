import { ICommand } from "wokcommands";

export default {
category: 'informatie',
description: 'ponger',
slash: "both",
testOnly: false,

callback: ({message, interaction, client}) => {

if(message){
    message.reply(`Pong: ${client.ws.ping}ms `)
} else {
    interaction.reply(`Pong: ${client.ws.ping}ms`)  
    interaction.ephemeral = true
}







}
} as ICommand