module.exports = {
    name: 'kick-user',
    description: 'Kicks an user',
    aliases: ['kick'],
    permissions: ['KICK_MEMBERS'],
    execute(message, args, cmd, client, Discord) {

    var ErrorCode1 = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('**Error**')
        .setDescription("Er is geen gebruiker gevonden!");

    var ErrorCode2 = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('**Error**')
        .setDescription("Er is geen reden gevonden!");

        var kickGebruiker = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var succesvol = new Discord.MessageEmbed()
        .setColor('#ABC3F3')
        .setTitle('**Error**')
        // .setThumbnail(kickGebruiker.user.displayAvatarURL)
        .setDescription(`**Kicked:** ${kickGebruiker} (${kickGebruiker.id})
        **Kicked bij:** ${message.author}
        **Reden: ** ${reden}`);

    var noPerms = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('**Error**')
        .setDescription("Je bent niet bevoegd!");

        if (!args[1]) return message.reply(ErrorCode1);
        if (!args[2]) return message.reply(ErrorCode2);
        if (args[2]) kickGebruiker.kick(reden);


        // if (args[2]) return message.reply(succesvol);

    // Locales
        



        var reden = args.slice(1).join(" ");
        if (!kickGebruiker) return message.reply(ErrorCode1);

        if (kickGebruiker.hasPermission("MANAGE_MESSAGES")) return message.reply(noPerms);


    }
}






//         const target = message.mentions.users.first();

// let memberTarget = message.guild.members.cache.get(target.id)
// const userDeleter = memberTarget.kick()

// if (!args[1]) {

//     message.channel.send("De opgegeven gebruiker is verbannen van de **Server****!**");

//     message.guild(memberTarget, {
//         userDeleter
//     })
// } else {
//     message.reply(memberTarget, 'is niet gevonden!');