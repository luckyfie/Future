module.exports = {
    name: 'embed',
    description: 'lul',
    aliases: [],
    permissions: ["MANAGE_MESSAGES"],
    execute(message, args, cmd, client, Discord) {

        //    let membermessage = message.args([1])

        let messageArgs = args.join(' ');


        const EmbedMessage = new Discord.MessageEmbed()
            .setFooter("AS:RP Arizona State Roleplay")
            .setDescription(`${messageArgs}`)
            .setTitle(`Message`)
            .setColor('#00feff');

        var ErrorCode1 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("Error");

        var ErrorCode2 = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("Error");

        var noPerms = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('**Error**')
            .setDescription("You don't have the permissions to do this!");


        //

        // let sendEmbedMessage = message.channel.send(EmbedMessage)

        message.delete()
        message.channel.send(EmbedMessage)
    }
}