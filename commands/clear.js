module.exports = {
    name: 'clear',
    aliases: ['purge', 'verwijder'],
    permissions: ['MANAGE_MESSAGES'],
    description: 'Clear messages!',
    async execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.reply('No Message Value: NULL');
        if (isNaN(args[0])) return message.reply('Place numbers.');

        if (args[0] > 100) return message.reply('You need to delete less then: 100 messages.');
        if (args[0] < 1) return message.reply('You need to delete atleast 1 message.');

        var successEmbed = new Discord.MessageEmbed()
            .setColor('#30ff00')
            .setTitle('✅ | Command Successful Executed')
            .setDescription(`**${args[0]}** Messages Deleted.`);

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
            message.reply(successEmbed)
        });
    }

}