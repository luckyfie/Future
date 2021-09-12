module.exports = {
    name: 'delete-channel',
    description: 'Deleting a channel',
    aliases: ['deletechannel'],
    permissions: ['MANAGE_CHANNELS'],
    execute(message, args, client) {
        message.channel.delete();
    }
}