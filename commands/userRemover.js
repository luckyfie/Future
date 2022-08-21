const { Channel } = require("discord.js");

module.exports = {
    name: 'removeuser',
    description: 'remove a user from a channel',
    aliases: [],
    permissions: ['MOVE_MEMBERS', 'MANAGE_CHANNELS'],
    execute(message, args, client, Discord) {
        const target = message.mentions.users.first();

        let memberTarget = message.guild.members.cache.get(target.id)

        var succesvol = new Discord.MessageEmbed()
            .setColor('#0eff00')
            .setTitle('✅ | Command Successful Executed')
            .setDescription(`<@${memberTarget.user.id}> is deleted from this channel!`);

        if (!args[1]) {

            message.channel.send(succesvol);

            message.channel.updateOverwrite(memberTarget, {
                VIEW_CHANNEL: false,
            })
        }

    }

}