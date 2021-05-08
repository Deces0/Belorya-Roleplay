const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");
const qdb = new JsonDatabase("./database/kimlik");

exports.run = async (client, message, args) => {

    let kişi = message.mentions.members.first() || message.author

let ad = await db.fetch(`${message.guild.id}_${kişi.id}_ad`)
let soyad = await db.fetch(`${message.guild.id}_${kişi.id}_soyad`)
let cinsiyet2 = await db.fetch(`${message.guild.id}_${kişi.id}_cinsiyet`)
let cinsellik2 = await db.fetch(`${message.guild.id}_${kişi.id}_cinsellik`)
let şehir = await db.fetch(`${message.guild.id}_${kişi.id}_şehir`)
let din2 = await db.fetch(`${message.guild.id}_${kişi.id}_din`)
let tc = await db.fetch(`${message.guild.id}_${kişi.id}_tc`)

if(ad === null) return message.reply('Bir kimliğiniz yok!')
if(soyad === null) return message.reply('Bir kimliğiniz yok!')
if(cinsiyet2 === null) return message.reply('Bir kimliğiniz yok!')
if(cinsellik2 === null) return message.reply('Bir kimliğiniz yok!')
if(şehir === null) return message.reply('Bir kimliğiniz yok!')
if(din2 === null) return message.reply('Bir kimliğiniz yok!')
if(tc === null) return message.reply('Bir kimliğiniz yok!')

let embed =  new Discord.MessageEmbed()
.setColor('DARKBLUE')
.setTitle('Kimlik Bilgileri')
.addField('TC Kimlik', tc)
.addField('İsim', ad)
.addField('Soyisim', soyad)
.addField('Cinsiyet', `<@&${cinsiyet2}>`)
.addField('Cinsellik', `<@&${cinsellik2}>`)
.addField('Şehir', şehir)
.addField('Din', `<@&${din2}>`)
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
    name: 'kimlik',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };