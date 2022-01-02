module.exports = {
    name: 'bugs',
    aliases: ['bug'],
    permissions: [],
    description: 'creates a bug!',
    execute(message, args, cmd, client, discord) {
        let bKanaal = '『⛔』bug-report'
        const channel = message.guild.channels.cache.find(c => c.name === bKanaal);
        if (!channel) return message.channel.send(`**${bKanaal}** is niet gevonden! Je kunt dit melden bij een staff-lid.`);

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
            .setColor('00feff')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs);

        const geluktEmbed = new discord.MessageEmbed()
            .setColor('ff0000')
            .setDescription('Je bug is succesvol verzonden!')
        
        channel.send(embed).then((msg) => {
            message.delete();
            message.channel.send(geluktEmbed)
        }).catch((err) => {
            throw err;
        });
    }
}