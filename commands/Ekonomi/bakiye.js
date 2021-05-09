
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");
    let user =  message.mentions.members.first() || message.member 
    let bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`) || 0
    let cüzdan = db.fetch(`${message.guild.id}_${user.id}_cüzdan`) || 0
    
    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Aktif Bakiyen')
    .addField('Banka Bakiyen', bakiye )
    .addField('Cüzdan Bakiyen', cüzdan)
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
    name: 'bakiye',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };
