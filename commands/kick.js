module.exports = {
    name: 'kick-user',
    description: 'Kicks an user',
    aliases: ['kick'],
    permissions: ['KICK_MEMBERS'],
    execute(message, args, cmd, client, Discord) {
        var ErrorCode1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("Er is iets fout hier");



        if(!args[1]) return message.reply('test');
        if(!args[2]) return message.reply('test reden');

        var kickGebruiker = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

        var reden = args.slice(1).join(" ");
        
        if(kickGebruiker.hasPermission("MANAGE_MESSAGES")) return message.reply('Je bent niet bevoegd!')
    }
}






//         const target = message.mentions.users.first();

let memberTarget = message.guild.members.cache.get(target.id)
const userDeleter = memberTarget.kick()

if (!args[1]) {

    message.channel.send("De opgegeven gebruiker is verbannen van de **Server****!**");

    message.guild(memberTarget, {
        userDeleter
    })
} else {
    message.reply(memberTarget, 'is niet gevonden!');