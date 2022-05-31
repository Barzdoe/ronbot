const Discord = require("discord.js")

const TOKEN = "OTgwNzIxNjg3NDcxNDcyNzAw.G5RuiC.b1MnPKxs1E424NesAZiiSCS0faOEepgBGZELX8"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on('ready', () => {
    console.log(`I am online!`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Wassup Killa!")
    }
})

client.login(TOKEN)