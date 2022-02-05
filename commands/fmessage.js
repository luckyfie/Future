module.exports = {
    name: 'fmesay',
    description: 'Zegt onderstaande bericht',
    aliases: ['zeg'],
    permissions: [],
    execute(message, args, cmd, client, discord) {

        let channelUitslagen = message.guild.channels.cache.find(c => c.name === '『💼』uitslagen');

        let channelMention = message.guild.channels.cache.get('889518832727785522').toString();

        const messageFormulierenHulpdienstenEmbed = new discord.MessageEmbed()
        .setColor('00feff')
        .setAuthor('ZevenDijk RolePlay')
        .setDescription(`Je kunt solliciteren bij een hulpdienst doormiddel van een ticket aan te maken in  ${channelMention}, veel succes!`);

        const channel = message.guild.channels.cache.find(c => c.name === '『💼』uitslagen');

        channelUitslagen.send(messageFormulierenHulpdienstenEmbed).then((msg) => {
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}