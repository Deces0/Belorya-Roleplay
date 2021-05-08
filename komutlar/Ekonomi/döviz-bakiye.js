
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");
    
    let birim = args[0]
    let user = message.author || message.mentions.users.first();

    if(!birim) return message.channel.send('Birim girmelisin!(dolar/euro/sterlin/yen)')
   
    let bakiye = db.fetch(`${message.guild.id}_${user.id}_döviz_${birim}`) || "0"

    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle(`Aktif ${birim} bakiyen`)
    .setThumbnail(user.avatarURL({dynamic:true}))
    .addField('Döviz Bakiyen', bakiye)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'döviz',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };