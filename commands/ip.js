module.exports = {
    name: 'ip',
    description: 'Dit is een ding-dong command!',
    aliases: ['server-ip', 'serverip'],
    permissions: [],
    execute(message, args, client) {
        message.channel.send('Ga naar F8 > type daar het volgende: `connect 193.189.89.113:30136` > klik op enter.')
    }
}
