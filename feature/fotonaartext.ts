    import { Client } from "discord.js";
    import { createWorker } from "tesseract.js"

    export default (client:Client) => {
      client.on("messageCreate", async (message) => {
          if(message.content == "!foto") {
            const image = message.attachments.first()
            if (!image) {
                message.reply("geen foto")
                return
            }

            try {
                const worker = createWorker()
                await worker.load()
                await worker.loadLanguage("fra")
                await worker.initialize("fra")
                const {
                    data: { text  }
                } = await worker.recognize(image.url)
                await worker.terminate()

                console.log(text)
                message.reply(text)
            } catch (error) {
                console.log("-".repeat(100))
                console.error("Error in file: fotonaartext.ts - feature")
                console.error(error)
                console.log("-".repeat(100))
            }
          }
      })
    }
    export const config = {
        dbName: 'IMAGE_TO_TEXT',
        displayName: "Foto naar text"
    }