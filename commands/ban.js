const { Channel } = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'Ban a user from a server',
    aliases: [],
    permissions: ['BAN_MEMBERS'],
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();

        let memberTarget = message.guild.members.cache.get(target.id)
        const userDeleter = memberTarget.ban()

        if (!args[1]) {

            message.channel.send("De opgegeven gebruiker is verbannen van de **Server****!**");

            message.guild(memberTarget, {
                userDeleter
            })
        }

    }

}