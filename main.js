const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgwNzIxNjg3NDcxNDcyNzAw.GG3KBs.R7TV-n_j4KAR3nVKCIZuP8QpQRAlMkCjt85dns"

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("I am online")
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello Killa")
    }
})

client.login(process.env.TOKEN)