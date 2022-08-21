module.exports = {
    name: 'ping',
    description: 'Dit is een ping/mss command!',
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        message.reply('Pong! 🏓').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            //     message.reply(`Bot Ping: **${ping} ms**`)

            var successEmbed = new Discord.MessageEmbed()
                .setColor('#0500ff')
                .setTitle('✅ | Command Successful Executed')
                .setDescription(`Bot Ping: **${ping} ms**`);

            message.reply(successEmbed)
        })
    }
}
