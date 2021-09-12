module.exports = {
    name: 'kick-user',
    description: 'Kicks an user',
    aliases: ['kick'],
    permissions: ['KICK_MEMBERS'],
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();

        let memberTarget = message.guild.members.cache.get(target.id)
        const userDeleter = memberTarget.kick()

        if (!args[1]) {

            message.channel.send("De opgegeven gebruiker is verbannen van de **Server****!**");

            message.guild(memberTarget, {
                userDeleter
            })
        }
    }
}