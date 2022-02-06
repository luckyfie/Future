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

        let channelSend = message.channel.send

        const messageUitgevoerdEmbed = new Discord.MessageEmbed()
            .setColor('0eff00')
            .setAuthor('Commando Uitgevoerd!')
            .setDescription(`${memberTarget} Is succesvol verbannen van de server!`)
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

        if (!args[1]) {

            channelSend(messageUitgevoerdEmbed)

            message.guild(memberTarget, {
                userDeleter
            })
        }

    }

}