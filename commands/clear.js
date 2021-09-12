module.exports = {
    name: 'clear',
    aliases: ['purge', 'verwijder'],
    permissions: ['MANAGE_MESSAGES'],
    description: 'Clear messages!',
    async execute(message, args, client) {
        if (!args[0]) return message.reply('Alstublieft, geef een getal op van aantal berichten er verwijderd moeten worden.');
        if (isNaN(args[0])) return message.reply('Alstublieft, zet het aantal berichten er achter.');

        if (args[0] > 100) return message.reply('Het aantal berichten dat u wilt verwijderen moet minder zijn dan: 100');
        if (args[0] < 1) return message.reply('Je moet minstens 1 bericht verwijderen!');

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
            message.reply('succesvol messages verwijderd.')
        });
    }

}