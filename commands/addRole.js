const { Channel } = require("discord.js");

module.exports = {
    name: 'add',
    description: 'adds a user from a channel',
    aliases: ['Y', 'N'],
    permissions: ['MOVE_MEMBERS', 'MANAGE_CHANNELS'],
    execute(message, args, client, Discord) {
        const target = message.mentions.users.first();
        let memberTarget = message.guild.members.cache.get(target.id)

        const giveRole = message(!args[2])

        if (!args[2]) {
            message.channel.send(`Gaat het om gebruiker ${memberTarget} en role ${giveRole}? (reply met ***,Y or ,N***)`)
        }

        else if (cmd === 'Y') {
            memberTarget.roles.add(giveRole)
        }

    }

}