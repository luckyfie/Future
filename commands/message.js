module.exports = {
    name: 'say',
    description: 'Zegt dat er server problemen zijn.',
    aliases: ['zeg'],
    permissions: ['MANAGE_MESSAGES'],
    execute(message, args, cmd, client, discord) {

        let messageArgs = args.join(' ');

        message.channel.send(messageArgs).then((msg) => {
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}