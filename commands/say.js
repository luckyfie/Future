module.exports = {
    name: 'say',
    description: 'lul',
    aliases: ['zeg'],
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        let value = message.args
        message.reply(value)
    }
}