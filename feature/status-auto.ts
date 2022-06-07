import { Client } from "discord.js";

export default (client:Client) => {
    const guild = client.guilds.cache.get("928379498079084554")

const options = [
`De Officele ${guild?.name} bot`,
`Bot owner/maker Moi#6084`,
`${guild?.name} heeft nu ${guild?.memberCount.toString()} Members`,
`De owner van ${guild?.name} is OG#9753`
]

let counter = 0

const UpdateStatus = () => {

    client.user?.setPresence({
        
        status: "online",
        activities: [
            {
                name: options[counter]
            }
        ]
    })

    if (++counter >= options.length) {
        counter = 0
    }
setTimeout(UpdateStatus, 1000 * 5)
}
UpdateStatus()

}

export const config = {
    dbName: 'STATUS_CHANGER',
    displayName: 'status Changer'
}