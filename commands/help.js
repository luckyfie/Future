module.exports = {
    name: 'help',
    description: 'Helps an user from the server',
    aliases: [],
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#006300')
            .setTitle("Help! | Commando's:")
            .setDescription('Help! Ik weet niet wat of hoe!')
            .addFields(
                { name: 'suggestie', value: 'Laat een sugestie achter voor de bouwvakkers van de game!' },
                { name: 'Bug', value: 'Laat een bug achter die opgelost moet worden!' },
                { name: 'ping', value: 'Laat zien hoeveel ping/ms de bot heeft! Heel handig om te kijken of de bot vertraging heeft' },
                { name: 'image, afbeelding, zoekimage of zoekafbeelding', value: 'Laat een afbeelding zien met de naam dat jij achter **NULL** schreef!' },
                { name: 'play', value: 'Speelt een liedje af als je in een spraakkanaal zit!' },
                { name: 'ding', value: 'Ik weet niet wat dit is, maar als jij dit wilt weten, dan hoef je alleen maar dit commando uit te voeren!' },

            )
            .setImage('https://cdn.discordapp.com/icons/850469665988804668/d83db43b6b8e811cf0996f450a816d0d.jpg?size=512')
            .setFooter('Ik hoop dat ik je heb kunnen helpen! ^.^ | Nederbelgen RP V2 - Future')




        message.channel.send(newEmbed)
    }
}