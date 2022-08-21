module.exports = {
    name: 'serverrestart',
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, discord) {

        let servStatusChannelTag = message.guild.channels.cache.get('935138644983951360').toString();

        let logger = message.guild.channels.cache.get('939819825662930954');

        let sKanaal = '『🔴』server-status'

        const channel = message.guild.channels.cache.find(c => c.name === sKanaal);

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('00ffean')
            .setAuthor('Server re-start!')
            .setDescription(messageArgs)
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

            

        const geluktEmbed = new discord.MessageEmbed()
            .setColor('ff0000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${message.author.tag} Het bericht is succesvol verzonden naar  ${servStatusChannelTag}!`)

        const logEmbed = new discord.MessageEmbed()
            .setColor('ff0000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${message.author.tag} heeft een bericht gestuurd naar  ${servStatusChannelTag} met als bericht Server Re-start:  ${messageArgs}!`)



        channel.send(embed).then((msg) => {
            channel.send(`@here`)
            msg.react('👍');
            message.delete();
            message.channel.send(geluktEmbed)
            logger.send(logEmbed)
        }).catch((err) => {
            throw err;
        });
    }
}