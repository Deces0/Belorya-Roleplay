const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");
const qdb = new JsonDatabase("./database/kimlik");
 
exports.run = async (client, message, args) => {
    if(message.member.roles.cache.has('825913063270121485')) {
        return message.reply("**Kayıt Yapmak İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }
    let kişi = message.mentions.members.first()
    if(!kişi) return message.reply('Lütfen bir kişi girin!')

    let cinsiyet2 = await db.fetch(`${message.guild.id}_${kişi.id}_cinsiyet`)
    let cinsellik2 = await db.fetch(`${message.guild.id}_${kişi.id}_cinsellik`)
    let din2 = await db.fetch(`${message.guild.id}_${kişi.id}_din`)
    let şehir2 = await db.fetch(`${message.guild.id}_${kişi.id}_şehir`)

    kişi.roles.remove(cinsiyet2)
    kişi.roles.remove(cinsellik2)
    kişi.roles.remove(din2)    
    kişi.roles.remove(şehir2) 

    await db.delete(`${message.guild.id}_${kişi.id}_ad`)
    await db.delete(`${message.guild.id}_${kişi.id}_soyad`)
    await db.delete(`${message.guild.id}_${kişi.id}_cinsiyet`)
    await db.delete(`${message.guild.id}_${kişi.id}_cinsellik`)
    await db.delete(`${message.guild.id}_${kişi.id}_şehir`)
    await db.delete(`${message.guild.id}_${kişi.id}_din`)
    await db.delete(`${message.guild.id}_${kişi.id}_tc`)
    await db.delete(`${message.guild.id}_${kişi.id}_kayıt`)

    message.replys('Kimlik silindi!')

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'kimlik-sil',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };
