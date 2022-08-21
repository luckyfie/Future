module.exports = {
    name: 'unmute',
    permissions: ['MUTE_MEMBERS'],
    description: "This unmutes a member",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();

        const Error1 = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`I can't find that user!`)
            .setTitle(`**Error**`)
            .setColor('#FF0000');
        if (!args[0]) return message.channel.send(Error1);


        const PrivateMessageEmbed = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`You are **unmuted** in **Arizona State Roleplay!**`)
            .setTitle(`**Unmuted | Arizona State Roleplay**`)
            .setColor('#FF0000');

        let memberTarget = message.guild.members.cache.get(target.id);

        const EmbedMessage = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`<@${memberTarget.user.id}> is unmuted!`)
            .setTitle(`✅ | Command Successful Executed`)
            .setColor('#0eff00');


        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'NOT_IN_USE');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');



            memberTarget.roles.remove(muteRole.id);
            //            memberTarget.roles.add(mainRole.id);
            message.channel.send(EmbedMessage);
            memberTarget.user.send(PrivateMessageEmbed)
        } else {
            message.channel.send(Error1);
        }
    }
}