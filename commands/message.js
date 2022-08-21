module.exports = {
    name: 'say',
    description: 'Say Something',
    aliases: [],
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