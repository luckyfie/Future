module.exports = {
    name: 'credit',
    description: 'Toont de bot coder',
    aliases: ['credits', 'scripter'],
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        const scripter = "Coded by **'****@luckyfie#3435****'**\nAll credits to CodeLyon for command handler."
        message.channel.send(scripter)
    }
}