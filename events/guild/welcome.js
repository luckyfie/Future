module.exports = (Discord, client, message) => {
    client.on('guildMemberAdd', guildMember => {
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '');

        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('839183860910260234').send(`Welcome <@${guildMember.user.id}> bij onze server **zoetermeer**! Lees zeker de <#${839237719426596894} en voorkom waarschuwingen!`)
    });
}