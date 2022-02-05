const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login('OTI3MjExODI0MjU0OTU5NzA3.YdG7TQ.Wmmkt53whzfOomkKPKEEIESKy4Q');

// process.env.token
// dO U SSE,


// invite your bot
// https://discordapp.com/oauth2/authorize?client_id=your_client_id&scope=bot&permissions=1099511627775s