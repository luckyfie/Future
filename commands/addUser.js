const { Channel } = require("discord.js");

module.exports = {
    name: 'add',
    description: 'adds a user from a channel',
    aliases: ['adduser', 'add-user'],
    permissions: ['MOVE_MEMBERS', 'MANAGE_CHANNELS'],
    execute(message, args, client, Discord) {
        const target = message.mentions.users.first();

        let memberTarget = message.guild.members.cache.get(target.id)

        if (!args[1]) {

            message.channel.send("De opgegeven gebruiker is toegevoegd aan dit kanaal!");

            message.channel.updateOverwrite(memberTarget, {
                VIEW_CHANNEL: true,
            })
        }

    }

}