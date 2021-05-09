const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Kayıt Ekibi Çağrıldı')
    .setImage('https://cdn.discordapp.com/attachments/837801359649538088/838375343102492732/NIRVANA_ROLEPLAY_3-1.png')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
message.channel.send('<@&836916575839715348>')
message.channel.send(embed)

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'kayıt',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };