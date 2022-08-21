const ms = require('ms');

module.exports = {
    name: 'mute',
    aliases: ["mutemember"],
    permissions: ['MUTE_MEMBERS'],
    description: "This mutes a member",
    execute(message, args, cmd, client, Discord) {


        const target = message.mentions.users.first();

        var reasonArgs = args.slice(2).join(" ");



        // Makes sure everything is fill in and the bot doesn't crashes.

        const Error1 = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`I can't find that user!`)
            .setTitle(`**Error**`)
            .setColor('#FF0000');

        const Error2 = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`**No Time given.**\nUse the template: **!mute {@user} {time: m, d, h, y} {Reason}**`)
            .setTitle(`**Error**`)
            .setColor('#FF0000');

        const Error3 = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`No reason given.`)
            .setTitle(`**Error**`)
            .setColor('#FF0000');

        if (!args[0]) return message.channel.send(Error1);

        if (!args[1]) return message.channel.send(Error2);

        if (!args[2]) return message.channel.send(Error3);

        // 

        let memberTarget = message.guild.members.cache.get(target.id);


        const EmbedMessage = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`<@${memberTarget.user.id}> is muted by **<@${message.author.id}>**!`)
            .setTitle(`✅ | Command Successful Executed`)
            .setColor('#0eff00');

        const PrivateMessageEmbed = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`You are **muted** in **Arizona State Roleplay** for ${reasonArgs}!`)
            .setTitle(`**Muted | Arizona State Roleplay**`)
            .setColor('#FF0000');


        if (target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === 'DONT_IN_USE');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');


            // if (!args[1]) {
            //     //                memberTarget.roles.remove(mainRole.id);
            //     memberTarget.roles.add(muteRole.id);
            //     message.channel.send(EmbedMessage);
            //     memberTarget.user.send(PrivateMessageEmbed);
            //     return
            // }



            const EmbedMessageWithTimer = new Discord.MessageEmbed()
                .setFooter("AS:RP Arizona State Roleplay")
                .setDescription(`<@${memberTarget.user.id}> is **muted** for ${ms(ms(args[1]))} by **<@${message.author.id}>**!\n**Reason:** ${reasonArgs}`)
                .setTitle(`✅ | Command Successful Executed`)
                .setColor('#0eff00');

            const PrivateMessageEmbedWithTimer = new Discord.MessageEmbed()
                .setFooter("AS:RP Arizona State Roleplay")
                .setDescription(`You are **muted** in **Arizona State Roleplay** for **${ms(ms(args[1]))}!**\n**Reason:** ${reasonArgs}`)
                .setTitle(`**Muted | Arizona State Roleplay**`)
                .setColor('#FF0000');







            //            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(EmbedMessageWithTimer);
            memberTarget.user.send(PrivateMessageEmbedWithTimer);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                //                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send(Error1);

        }
    }
}