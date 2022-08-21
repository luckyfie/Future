const { Channel } = require("discord.js");

module.exports = {
    name: 'adduser',
    description: 'adds a user from a channel',
    aliases: [],
    permissions: ['MOVE_MEMBERS', 'MANAGE_CHANNELS'],
    execute(message, args, client, Discord) {
        const target = message.mentions.users.first();

        let memberTarget = message.guild.members.cache.get(target.id)

        const EmbedMessage = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`<@${memberTarget.user.id}> can now see this channel!`)
            .setTitle(`✅ | Command Successful Executed`)
            .setColor('#0eff00');

        if (!args[1]) {

            message.channel.send(EmbedMessage);

            message.channel.updateOverwrite(memberTarget, {
                VIEW_CHANNEL: true,
            })
        }

    }

}