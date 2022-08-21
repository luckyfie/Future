module.exports = {
  name: 'test',
  description: 'het is gewoon een test ja, nieuwsgierige kloot',
  aliases: [],
  permissions: [],
  execute(message, args, cmd, client, Discord) {

    message.reply('Getting all info...').then(resultMessage => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      //  message.channel.send(`**System working perfect!**\nPing: **${ping} ms**\ndiscordjs Version: **^12.5.3**\nFFMPEG Version (music): **^4.4.0**\nfs: **0.0.1-security**\nyt-search: **^2.10.1**\nytld-core: **^4.11.0**\nPrefix: **command!**\nLicense: **ISC**`)


      var successEmbed = new Discord.MessageEmbed()
        .setColor('#fff900')
        .setTitle('✅ | Command Successful Executed')
        .setDescription(`**System working perfect!**\nPing: **${ping} ms**\ndiscordjs Version: **^12.5.3**\nFFMPEG Version (music): **^4.4.0**\nfs: **0.0.1-security**\nyt-search: **^2.10.1**\nytld-core: **^4.11.0**\nPrefix: **#**\nLicense: **ISC**`);

      message.reply(successEmbed)

    })



    //    const mes = `System working perfect!\nPing: ${ping} ms\ndiscordjs Version: ^12.5.3\nFFMPEG Version (music): ^4.4.0\nfs: 0.0.1-security\nyt-search: ^2.10.1\nytld-core: ^4.11.0\nPrefix: command!\nLicense: ISC`


    //  message.channel.send(mes)
  }
}