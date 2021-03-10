console.log("Démarage du bot")
const Discord = require("discord.js")
const client = new Discord.Client()

const token = require("./json/token.json")

client.login(token.token).catch(err => {
    if (err){
        console.log(err)
    }
})

client.on("ready", () => {
    require("./handlers/ready")(client)
})

client.on("message", message => {
    if (message.author.bot || !message.channel.guild) return;

    require("./commands/say")(message, client)
    require("./commands/help")(message, client)
    require("./commands/credit")(message, client)
})
