import {
Interaction,
Message,
MessageActionRow,
MessageButton,
MessageEmbed
} from "discord.js"
import { ICommand } from "wokcommands"

const embeds: MessageEmbed[] = []
const pages = {} as { [key: string]: number}

for (let a = 0; a < 2; ++a) {
embeds.push(new MessageEmbed().setTitle(`page ${a + 1}`))    
}

const getRow = (id: string) => {

    const row = new MessageActionRow

    row.addComponents(
    new MessageButton()
    .setCustomId('prev_embed')
    .setStyle('SECONDARY')
    .setEmoji('🔙')
    .setDisabled(pages[id] === 0)
    )

    row.addComponents(
        new MessageButton()
        .setCustomId('next_embed')
        .setStyle('SECONDARY')
        .setEmoji('➡')
        .setDisabled(pages[id] === embeds .length - 1)
        )

        return row
}

export default {
category: "Info",
description: "Geeft je een emebd met paginas",
slash: "both",

callback: async ({user, message, interaction, channel }) => {
    const id = user.id
    pages[id] = pages[id] || 0

    const embed = embeds[pages[id]]
    let reply: Message | undefined
    let collector

    const filter = (i: Interaction) => i.user.id === user.id
    const time = 1000 * 60 * 5 

    if (message) {
        reply = await message.reply({
            embeds: [embed],
            components: [getRow(id)]
        })

        collector = reply.createMessageComponentCollector({ filter, time})
    } else {
        interaction.reply({
            ephemeral: false,
            embeds: [embed],
            components: [getRow(id)]
        })
        collector = channel.createMessageComponentCollector({ filter, time})

    }
    collector.on('collect', (btnInt) => {
        if(!btnInt) {
            return
        }
        btnInt.deferUpdate()

        if (
            btnInt.customId !== 'prev_embed' &&
            btnInt.customId !== 'next_embed'
        ) {
            return
        }

        if(btnInt.customId === 'prev_embed' && pages[id] > 0) {
            --pages[id]
        } else if (
            btnInt.customId === 'next_embed' &&
            pages[id] < embeds.length - 1
        ) {
            ++pages[id]
        }

        if (reply) {
            reply.edit({
                embeds: [embeds[pages[id]]],
                components: [getRow(id)]

            })
        } else {
            interaction.editReply({
                embeds: [embeds[pages[id]]],
                components: [getRow(id)]
                
        }
            )}})

            if(pages[id] === 1) {
                embeds.push(new MessageEmbed().setDescription("tEST"))
            }
}
 
}as ICommand