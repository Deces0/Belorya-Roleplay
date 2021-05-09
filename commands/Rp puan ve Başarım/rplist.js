const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/rppuan");
exports.run = async (client, message, args) => {
  

    let sıralama = message.guild.members.cache.filter(a => a.user.bot == false).array().sort((a , b) => {return db.fetch(`kelime_${message.guild.id}_${b.user.id}`) - db.fetch(`kelime_${message.guild.id}_${a.user.id}`) })
    let sırala= ""
    for (let i = 0 ; i < 10 ; i++){ //i < 10 sıralamanın boyutunu belirler arttırırsanız listede daha çok üye gözükür
        if(db.fetch(`kelime_${message.guild.id}_${sıralama[i].id}`) != null && db.fetch(`kelime_${message.guild.id}_${sıralama[i].id}`) != 0){
            sırala+= `**${i+1}**: <@`+sıralama[i]+`>` + ' | ' + db.fetch(`kelime_${message.guild.id}_${sıralama[i].id}`).toLocaleString() + " RP Puan\n"
        }
    }

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name} Roleplay Listesi`)
    .setDescription(`${sırala == "" ? "Kimse roleplay yapmamış." : sırala}`)
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
    name: 'rplist',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };