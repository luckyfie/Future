module.exports = {
    name: 'credit',
    description: 'Toont de bot coder',
    aliases: ['credits', 'scripter'],
    permissions: [],
    execute(message, args, cmd, client, Discord) {

        const scripterEmbed = new discord.MessageEmbed()
        .setColor('ff00eb')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Deze bot is gemaakt door **@luckyfie#3435**`);

        const scripter = "Deze bot is gemaakt door '****@luckyfie#3435****'"

        message.channel.send(scripterEmbed)

    }
}