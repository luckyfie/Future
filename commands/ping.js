module.exports = {
    name: 'ping',
    description: 'Dit is een ping/mss command!',
    permissions: [],
    execute(message, args, client) {
        message.channel.send('Pong! :ping_pong:')
    }
}