const Discord = require('discord.js')

var prefix = '!';

const client = new Discord.Client()

// const client = new Discord.Client({
//     allowedMentions: {
//         parse: [`users`, `roles`],
//         repliedUser: true
//     },

//     intents: [
//         "GUILDS",
//         "GUILD_MESSAGES",
//         "GUILD_PRESENCES",
//         "GUILD_MEMBERS",
//         "GUILD_MESSAGE_REACTIONS"
//     ]

// });

client.on("ready", () => {
    console.log("Bot is online!")

});

client.login("MTAxMDE2NjY4MTM4NzEzOTEyMg.GIBHC8.sCWdMqTmoNXbPs3snck9BCnUmybL-v10-fke2E")