import DiscordJS, {  Client, Guild, Intents, ThreadChannel } from  "discord.js"
import dotenv from "dotenv"
import wok  from "wokcommands"
import path  from "path"
import pm2  from "pm2"
const mongoUri = ""
dotenv.config()
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})



client.on("ready", async() => {
        const guildid = "928379498079084554"
        const guild = client.guilds.cache.get(guildid)
        try {
            new wok(client, {
               commandDir: path.join(__dirname, 'commands'),
                featureDir: path.join(__dirname, 'feature'),
                typeScript: true,
                botOwners: "654754089909092362",
                mongoUri: `${process.env.MONGO_URI}`,
                dbOptions: {
                    keepAlive: true
                },
                ephemeral: true,

            })
        } catch (error) {
            if (error) {
                pm2.start
                console.log(pm2.reloadLogs)
            }
        }








    
    })




   



     console.log(`Bot ${client.user?.username} is Online op token: ${process.env.TOKEN}`)
    console.log("-".repeat(50))







client.login(process.env.TOKEN)