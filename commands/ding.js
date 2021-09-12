module.exports = {
    name: 'ding',
    description: 'Dit is een ding-dong command!',
    permissions: [],
    execute(message, args, client) {
        message.channel.send('Dong! :bell:')
    }
}