module.exports = {
    name: 'fmesay',
    description: 'Zegt onderstaande bericht',
    aliases: ['zeg'],
    permissions: [],
    execute(message, args, cmd, client, discord) {

        let channelUitslagen = message.guild.channels.cache.find(c => c.name === '『💼』uitslagen');
        const channel = message.guild.channels.cache.find(c => c.name === '『💼』uitslagen');
        let channelBugreports = message.guild.channels.cache.find(c => c.name === '『⛔』bug-report');
        let channelSuggestie = message.guild.channels.cache.get('884200590001967174');

        let channelMentionTicketAanmaken = message.guild.channels.cache.get('889518832727785522').toString();

        const messageFormulierenHulpdienstenEmbed = new discord.MessageEmbed()
        .setColor('00feff')
        .setAuthor('ZevenDijk RolePlay | Waar jouw toekomst begint.')
        .setTitle('Bug Report')
        .setDescription('Heb jij een suggestie voor de server? Type `?suggestie <JouwSuggestie>` en we zullen om **jouw** suggestie stemmen!');


        channelSuggestie.send(messageFormulierenHulpdienstenEmbed).then((msg) => {
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}