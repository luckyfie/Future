const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})







client.login(process.env.token);

// process.env.token
// dO U SSE,
// MTAwOTUwMTc5MTU4ODcyODg3Mw.GWsSjo.SAI6T-OOzvwpY-qpxoWsG6w-GMuwz2rpGJG62Q

////////////////////////////////////////////////////////////////////

// const Discord = require('discord.js')

// var prefix = '!';

// const client = new Discord.Client()

// // const client = new Discord.Client({
// //     allowedMentions: {
// //         parse: [`users`, `roles`],
// //         repliedUser: true
// //     },

// //     intents: [
// //         "GUILDS",
// //         "GUILD_MESSAGES",
// //         "GUILD_PRESENCES",
// //         "GUILD_MEMBERS",
// //         "GUILD_MESSAGE_REACTIONS"
// //     ]

// // });

// client.on("ready", () => {
//     console.log("Bot is online!")

// });

// client.login("MTAxMDE2NjY4MTM4NzEzOTEyMg.GP_FL4.uCfgrAoo52M-FICjOyAbtE53JqTmxIIYchEwqA")