module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion', 'suggestie'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, cmd, client, discord) {
        let sKanaal = '『🎯』server-suggesties'
        const zevenDijk = '『🎯』server-suggesties'

        const channel = message.guild.channels.cache.find(c => c.name === sKanaal);
        if (!channel) return message.channel.send(`${sKanaal} bestaat niet!`);

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('FADF2E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);


        const geluktEmbed = new discord.MessageEmbed()
            .setColor('ff0000')
            .setDescription('Je suggestie is succesvol verzonden!')



        channel.send(embed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
            message.channel.send(geluktEmbed)
        }).catch((err) => {
            throw err;
        });
    }
}