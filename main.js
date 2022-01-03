const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


// Server Status
const { Client } = require('discord.js');
const { updatePlayerCount } = require("./utils/")
global.config = require("./config.json")

client.on('ready', () => {
    console.log(`Discord Bot logged in als ${client.user.tag}`);
    updatePlayerCount(client, 5)
})

// Einde server status

client.login(process.env.token);

// process.env.token
// dO U SSE,
// ODYxMTc1NDAyNTcwNTc5OTY5.YOF-Fw.hlvZKY59e5Bp6OdrMb_pQrRncFY


// invite your bot
// https://discordapp.com/oauth2/authorize?client_id=your_client_id&scope=bot&permissions=1099511627775