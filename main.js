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


// https://discordapp.com/oauth2/authorize?client_id=your_client_id&scope=bot&permissions=1099511627775s