
const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/bakiye");
   
    if(!message.member.roles.cache.has('836881916674048012')) {
        return message.reply("**Para Eklemek İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }

    let user = message.mentions.users.first();
    const bakiye = db.fetch(`${message.guild.id}_${user.id}_bakiye`)
    let para1 = args[1]
    let para = parseInt(para1)
    let sonpara = bakiye - para

    await db.set(`${message.guild.id}_${user.id}_bakiye`, sonpara)

    let embed = new Discord.MessageEmbed()
    .setColor('DARKBLUE')
    .setTitle('Bakiye silindi')
    .setThumbnail(user.avatarURL({dynamic:true}))
    .setDescription(`Yeni Bakiye: ${sonpara} TL`)
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
    message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['parasil'],
    permLevel: 0
   };
   
   exports.help = {
    name: 'para-sil',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };