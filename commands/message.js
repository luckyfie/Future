module.exports = {
    name: 'serverdown',
    description: 'Zegt dat er server problemen zijn.',
    aliases: ['probleem', 'hostingdown'],
    permissions: ['MANAGE_MESSAGES'],
    execute(message, args, cmd, client, Discord) {
        const scripter = "Beste @here! \n\nDe server ondervindt enkele problemen met de vatse hosting. Hier is echter niet veel aan te doen. We wachten rustig af tot reactie van de Hosting. \n\nMet Vriendelijke Groeten\nNederbelgen Development"

        message.channel.send(scripter)
        message.delete()
    }
}