module.exports = {
    name: 'kick',
    description: 'Kicks an user',
    aliases: [],
    permissions: ['KICK_MEMBERS'],
    execute(message, args, cmd, client, Discord) {

        var ErrorCode1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("No user founded.");

        var ErrorCode2 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("No reason founded.");






        if (!args[0]) return message.reply(ErrorCode1);
        if (!args[1]) return message.reply(ErrorCode2);


        var kickGebruiker = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        var reden = args.slice(1).join(" ");

        var succesvol = new Discord.MessageEmbed()
            .setColor('#0eff00')
            .setTitle('✅ | Command Successful Executed')
            .setThumbnail(kickGebruiker.user.displayAvatarURL)
            .setDescription(`**Kicked:** ${kickGebruiker} (${kickGebruiker.id})
    **Kicked by:** ${message.author}
    **Reason: ** ${reden}`);

        const PrivateMessageEmbed = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`You are **kicked** from **Arizona State Roleplay** for **${reden}**!`)
            .setTitle(`**Kicked | Arizona State Roleplay**`)
            .setColor('#FF0000');

        var noPerms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("You don't have the permissions to kick him!");


        if (!args[0]) return message.reply(ErrorCode1);
        if (!args[1]) return message.reply(ErrorCode2);

        if (args[1]) kickGebruiker.user.send(PrivateMessageEmbed)
        if (args[1]) kickGebruiker.kick(reden);
        if (args[1]) return message.reply(succesvol);


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