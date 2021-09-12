module.exports = {
    name: 'say',
    description: 'lul',
    aliases: ['zeg'],
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        const mSend = message
        let value = mSend.args
        message.reply(value)
    }
}