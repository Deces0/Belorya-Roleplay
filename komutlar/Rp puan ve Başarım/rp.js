const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/rppuan");
exports.run = async (client, message, args) => {
  

    let user = message.mentions.users.first() || message.author;
let kullanıcı = message.mentions.members.first()

    let sorted = message.guild.members.cache.filter(a => a.user.bot == false).array().sort((a , b) => {return db.fetch(`kelime_${message.guild.id}_${b.user.id}`) - db.fetch(`kelime_${message.guild.id}_${a.user.id}`) })

    let sira = "";
    for (var i = 0; i < sorted.length; i++) {
        if (sorted[i].id === user.id) {
            sira += `${i + 1}`
        }
    }
    let kelimeler = db.fetch(`kelime_${message.guild.id}_${user.id}`)
    
    const embed = new Discord.MessageEmbed()
    .setAuthor(user.tag , user.displayAvatarURL({dynamic : true}))
    .setDescription(`Sayın ${user}, **${sorted.length}** kişi arasından **${(kelimeler == null ? 0 : kelimeler).toLocaleString()} kelime** ile **${sira}.** sıradasınız!`)
    .setColor('BLUE')
    .setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
    .setTimestamp()
  
    message.channel.send(embed)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'rppuan',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };