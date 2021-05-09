const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Kayıt Ekibi Çağrıldı')
    .setImage('https://media.discordapp.net/attachments/806133001737469952/835503279307620403/609601f80d4c9e3c9a740ef903da87e7.gif')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
message.channel.send('<@&825913063270121485>')
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
