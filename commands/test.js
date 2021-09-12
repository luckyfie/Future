module.exports = {
    name: 'test',
    description: 'het is gewoon een test ja, nieuwsgierige kloot',
    aliases: [],
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        const mes = 'Ok, krijg je dit bericht dan is alles goed! Ook met de const systeem!'
        const mes2 = '***Je kunt er dus gewoon vanuit gaan dat deze bot door een top scripter is gemaakt! ***'
        message.reply('Hi! alles werkt hier perfect! Maar omdat jij zo ongerust bent... zal ik nog een test doen!')

        message.channel.send(mes)
        message.channel.send(mes2)
    }
}