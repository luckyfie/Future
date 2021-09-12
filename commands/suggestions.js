module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'suggestie'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, discord) {
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestie');
        if (!channel) return message.channel.send('suggestie channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('FADF2E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
            message.channel.send('Jouw suggestie is verzonden!');
        }).catch((err) => {
            throw err;
        });
    }
}