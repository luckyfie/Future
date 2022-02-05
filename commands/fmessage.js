module.exports = {
    name: 'say',
    description: 'Zegt onderstaande bericht',
    aliases: ['zeg'],
    permissions: [],
    execute(message, args, cmd, client, discord) {
        const channel = message.guild.channels.cache.find(c => c.name === '『💼』uitslagen');
        
        const messageFormulierenHulpdienstenEmbed = new discord.MessageEmbed()
        .setColor('00feff')
        .setAuthor('ZevenDijk RolePlay')
        .setDescription(`Je kunt solliciteren bij een hulpdienst doormiddel van een ticket aan te maken in ${889518832727785522} veel succes!`);

        const channel = message.guild.channels.cache.find(c => c.name === '『💼』uitslagen');

        channel.send(messageFormulierenHulpdienstenEmbed).then((msg) => {
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}