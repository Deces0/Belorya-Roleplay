
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");
if(!message.member.roles.cache.has('825913063270121485')) {
        return message.reply("**Para Eklemek İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }
    let user = message.mentions.users.first();
    let para1 = args[1]
    if (isNaN(para1)) return message.channel.send('Bir sayı olmalı!')
    let para = parseInt(para1)

    await db.add(`${message.guild.id}_${user.id}_bakiye`, para)

    const bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`)
    
    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Bakiye eklendi')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`Yeni Bakiye: ${bakiye} Frang`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['para-ekle'],
    permLevel: 0
   };
   
   exports.help = {
    name: 'paraekle',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };
