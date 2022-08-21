const { Channel } = require("discord.js");

module.exports = {
    name: 'ban',
    description: 'Ban a user from a server',
    aliases: [],
    permissions: ['BAN_MEMBERS'],
    execute(message, args, cmd, client, Discord) {


        var ErrorCode1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("No user founded.");

        var ErrorCode2 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("No reason founded.");


        if (!args[0]) return message.channel.send(ErrorCode1);
        if (!args[1]) return message.channel.send(ErrorCode2);


        const target = message.mentions.users.first();

        var reden = args.slice(1).join(" ");

        let memberTarget = message.guild.members.cache.get(target.id)
        const userDeleter = memberTarget.ban()

        var succesvol = new Discord.MessageEmbed()
            .setColor('#0500ff')
            .setTitle('✅ | Command Successful Executed')
            .setDescription(`**Banned:** <@${memberTarget.user.id}> (${memberTarget.user.id})
            **Banned by:** ${message.author}
            **Reason: ** ${reden}`);

        const PrivateMessageEmbed = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`You are **banned** from **Arizona State Roleplay** for **${reden}**!`)
            .setTitle(`**Banned | Arizona State Roleplay**`)
            .setColor('#FF0000');

        var noPerms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("You don't have the permissions to ban him!");

        if (args[1]) memberTarget.user.send(PrivateMessageEmbed);
        if (args[1]) memberTarget.ban(reden);
        if (args[1]) return message.reply(succesvol);


    }

}

