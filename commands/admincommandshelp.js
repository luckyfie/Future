module.exports = {
    name: 'admincommands',
    description: 'Helps an user from the server',
    aliases: ['adminhelp'],
    permissions: [],
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#006300')
            .setTitle("Help! | Admin Commando's:")
            .setDescription('Alle Admin commands!')
            .addFields(
                { name: 'serveraan', value: 'Benodigdheden: Adminstrator | De server openen in server-status! schrijf `?serveraan <toevoegendBericht>`!' },
                { name: 'serveruit', value: 'Benodigdheden: Adminstrator | De server sluiten in server-status! schrijf `?serveruit <toevoegendBericht>`!' },
                { name: 'serverrestart', value: 'Benodigdheden: Adminstrator | Een server re-start aankondigen in server-status! schrijf `?serverrestart <toevoegendBericht>`!' },

            )
            .setImage('https://cdn.discordapp.com/icons/850469665988804668/d83db43b6b8e811cf0996f450a816d0d.jpg?size=512')
            .setFooter('Ik hoop dat ik je heb kunnen helpen! ^.^ | ZevenDijk Roleplay')




        message.channel.send(newEmbed)
    }
}