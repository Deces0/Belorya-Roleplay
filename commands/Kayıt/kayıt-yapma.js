const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");
const qdb = new JsonDatabase("./database/bakiye");

exports.run = async (client, message, args) => {
    if(message.member.roles.cache.has('811836325120573450')) {
        return message.reply("**Kayıt Yapmak İçin Yetkin Yok**").then(msg => msg.delete({timeout:20000}))
    }
let kişi = message.mentions.members.first()
let ad = args[1]
let soyad = args[2] 
let cinsiyet = args[3]
let cinsellik = args[4]
let şehir = args[5]
let din = args[6]

if(!kişi) return message.reply('Lütfen bir kişi girin!')
if(!ad) return message.reply('Lütfen bir isim girin!')
if(!soyad) return message.reply('Lütfen bir soyisim girin!')
if(!cinsiyet) return message.reply('Lütfen bir cinsiyet girin!')
if(!cinsellik) return message.reply('Lütfen bir cinsellik girin!')
if(!şehir) return message.reply('Lütfen bir şehir girin!')
if(!din) return message.reply('Lütfen bir din girin!')


let cinsiyet1 = cinsiyet.replace('<@&', '')
let cinsiyet2 = cinsiyet1.replace('>', '')

let cinsellik1 = cinsellik.replace('<@&', '')
let cinsellik2 = cinsellik1.replace('>', '')

let din1 = din.replace('<@&', '')
let din2 = din1.replace('>', '')

await db.set(`${message.guild.id}_${kişi.id}_ad`, ad)
await db.set(`${message.guild.id}_${kişi.id}_soyad`, soyad)
await db.set(`${message.guild.id}_${kişi.id}_cinsiyet`, cinsiyet2)
await db.set(`${message.guild.id}_${kişi.id}_cinsellik`, cinsellik2)
await db.set(`${message.guild.id}_${kişi.id}_şehir`, şehir)
await db.set(`${message.guild.id}_${kişi.id}_din`, din2)
let tc = await db.fetch(`${message.guild.id}_${kişi.id}_tc`)

kişi.roles.add(cinsiyet2)
kişi.roles.add(cinsellik2)
kişi.roles.add(din2)

let embed =  new Discord.MessageEmbed()
.setColor('DARKBLUE')
.setTitle('Kimlik Oluşturuldu')
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
    name: 'kayıt-yap',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };