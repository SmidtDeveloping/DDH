import { ICommand } from "wokcommands";

export default {
category: "Moderation",
description: "Clear Command",
// permissions: ["ADMINISTRATOR"],
requireRoles: true,

maxArgs: 1,
expectedArgs: '[amount]',

slash: "both",
testOnly: false,

callback: async ({message, interaction, channel, args}) => {
    const amount = args.length ? parseInt(args.shift()!) : 100

    if(message) {
        await message.delete()
    }

    const { size } =  await channel.bulkDelete(amount, true)
    const reply = `Ik heb ${size} bericht(en) verwijderd`

    if(interaction) {
        return reply
    }
    channel.send(reply)
}

} as ICommand