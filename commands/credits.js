module.exports = {
    name: 'credit',
    description: 'Toont de bot coder',
    aliases: ['credits', 'scripter', 'owner', 'maker'],
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        const scripter = "Deze bot is gemaakt door **'****@luckyfie#3435****'**"
        message.channel.send(scripter)
    }
}