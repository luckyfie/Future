module.exports = {
    name: 'serveruit',
    aliases: [],
    permissions: ['ADMINISTRATOR'],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, discord) {

        let servStatusChannelTag = message.guild.channels.cache.get('935138644983951360').toString();

        let sKanaal = '『🔴』server-status'

        const channel = message.guild.channels.cache.find(c => c.name === sKanaal);

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('ff0000')
            .setAuthor('Server gesloten!')
            .setDescription(messageArgs)
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

            

        const geluktEmbed = new discord.MessageEmbed()
            .setColor('ff0000')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${message.author.tag} Het bericht is succesvol verzonden naar  ${servStatusChannelTag}!`)



        channel.send(embed).then((msg) => {
            msg.react('👍');
            message.delete();
            message.channel.send(geluktEmbed)
        }).catch((err) => {
            throw err;
        });
    }
}