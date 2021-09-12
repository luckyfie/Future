module.exports = {
    name: 'bugs',
    aliases: ['bug'],
    permissions: [],
    description: 'creates a bug!',
    execute(message, args, cmd, client, discord) {
        const channel = message.guild.channels.cache.find(c => c.name === 'bugs');
        if (!channel) return message.channel.send('*Bugs* channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('FADF2E')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        channel.send(embed).then((msg) => {
            message.delete();
            message.channel.send('Jouw bug is verzonden!');
        }).catch((err) => {
            throw err;
        });
    }
}