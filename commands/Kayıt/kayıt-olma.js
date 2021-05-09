const Discord = require("discord.js");
const { JsonDatabase, YamlDatabase } = require("wio.db");
const db = new JsonDatabase("./database/kimlik");
const qdb = new JsonDatabase("./database/bakiye");
exports.run = async (client, message, args) => {
    let kişi = message.mentions.members.first()
let kayıt = await db.fetch(`${message.guild.id}_${kişi.id}_kayıt`)
    if(kayıt) {
        return message.reply("**Zaten Kaydolmuşsunuz!**").then(msg => msg.delete({timeout:20000}))
    }

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

let şehir1 = şehir.replace('<@&', '')
let şehir2 = şehir1.replace('>', '')

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}

let tc = randomNumber(9999999999, 99999999999)

await db.set(`${message.guild.id}_${kişi.id}_ad`, ad)
await db.set(`${message.guild.id}_${kişi.id}_soyad`, soyad)
await db.set(`${message.guild.id}_${kişi.id}_cinsiyet`, cinsiyet2)
await db.set(`${message.guild.id}_${kişi.id}_cinsellik`, cinsellik2)
await db.set(`${message.guild.id}_${kişi.id}_şehir`, şehir2)
await db.set(`${message.guild.id}_${kişi.id}_din`, din2)
await db.set(`${message.guild.id}_${kişi.id}_tc`, tc)
await db.set(`${message.guild.id}_${kişi.id}_kayıt`, true)

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
.addField('Şehir', `<@&${şehir2}>`)
.addField('Din', `<@&${din2}>`)
.setFooter(message.guild.name , message.guild.iconURL({dynamic : true}))
.setTimestamp()
message.channel.send(embed)
qdb.add(`${message.guild.id}_${kişi.id}_bakiye`, 3000)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
   
   exports.help = {
    name: 'kimlik-oluşturma',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };