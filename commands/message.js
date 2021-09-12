module.exports = {
    name: 'serverdown',
    description: 'Zegt dat er server problemen zijn.',
    aliases: ['probleem', 'hostingdown'],
    permissions: ['MANAGE_MESSAGES'],
    execute(message, args, cmd, client, Discord) {
        const scripter = "Beste @here! \n\nDe problemen met de host zijn opgelost. U kunt terug spelen! type connect 185.227.243.25:30250 in F8! \n\nMet Vriendelijke Groeten\nNederbelgen Development"

        message.channel.send(scripter)
        message.delete()
    }
}