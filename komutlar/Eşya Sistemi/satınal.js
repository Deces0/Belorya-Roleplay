const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
    const { JsonDatabase, YamlDatabase } = require("wio.db");
    const db = new JsonDatabase("./database/özeleşya.json");
    const qdb = new JsonDatabase("./database/bakiye");
    const adb = new JsonDatabase("./database/telefon");
    const gt = new JsonDatabase("./database/global_telefon");
    const sdb = new JsonDatabase("./database/silah")
    const hdb = new JsonDatabase("./database/hayvan")
    const mdb = new JsonDatabase("./database/mülk");
    const rdb = new JsonDatabase("./database/araba");

    let eşya = args[0]
    let silah = args[0]
    let mülk = args[0]
    let araba = args[0]
    let user = message.author
    let para = qdb.get(`${message.guild.id}_${user.id}_bakiye`)
    if(!eşya || !silah || !mülk || !araba) return message.reply('Bir eşya belirt! (Liste için !fiyat)')

    if(araba === 'tofaş'){
        let miktar = '35000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'opel-astra'){
        let miktar = '67500'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'bwm'){
        let miktar = '95700'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'range-rover'){
        let miktar = '100000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'dacia'){
        let miktar = '130000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'auidi'){
        let miktar = '205000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'ninja250'){
        let miktar = '20000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'hondacbr'){
        let miktar = '30000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(araba === 'harley'){
        let miktar = '65000'
        if(rdb.fetch(`${message.guild.id}_${user.id}_araba`, araba ) === true) {
            return message.reply('Bu araba sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        rdb.push(`${message.guild.id}_${user.id}_araba`, araba )
        message.reply('Araba satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'malikane'){
        let miktar = '1000000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'daire'){
        let miktar = '150000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'bahçeliev'){
        let miktar = '350000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(mülk === 'villa'){
        let miktar = '500000'
        if(mdb.fetch(`${message.guild.id}_${user.id}_mülk`, mülk ) === true) {
            return message.reply('Bu mülk sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        mdb.push(`${message.guild.id}_${user.id}_mülk`, mülk )
        message.reply('mülk satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }

    if(eşya === 'kedi'){
        let miktar = '1760'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(eşya === 'pitbull'){
        let miktar = '2280'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(eşya === 'golden'){
        let miktar = '3100'
        if(hdb.fetch(`${message.guild.id}_${user.id}_hayvan`, eşya ) === true) {
            return message.reply('Bu hayvan sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanızda yok!')  
        }
        hdb.push(`${message.guild.id}_${user.id}_hayvan`, eşya )
        message.reply('Hayvan satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'kelebek'){
        let miktar = '1000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'glock19'){
        let miktar = '3700'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'baretta'){
        let miktar = '4280'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'ak47'){
        let miktar = '12000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'm4a4'){
        let miktar = '18000'
        if(sdb.fetch(`${message.guild.id}_${user.id}_silah`, silah ) === true) {
            return message.reply('Bu silah sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        sdb.push(`${message.guild.id}_${user.id}_silah`, silah )
        message.reply('Silah satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'hat'){
        let miktar = '500'
        if(db.fetch(`${message.guild.id}_${user.id}_özeleşya`, silah ) === true) {
            return message.reply('Bu eşya sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        function randomNumber(min, max){
            const r = Math.random()*(max-min) + min
            return Math.floor(r)
        }
        
        let numaram = `0${randomNumber(499, 599)}${randomNumber(99, 999)}${randomNumber(99, 999)}`
        db.push(`${message.guild.id}_${user.id}_özeleşya`, silah )
        adb.set(`${message.guild.id}_${user.id}_hat`, true )
        adb.set(`${message.guild.id}_${user.id}_numaram`, `${numaram}` )
        gt.set(`${message.guild.id}_${numaram}`, `${user.id}`)
        message.reply('Hat satın alındı!')
        message.guild.members.cache.get(user.id).roles.add("811906030149173249")
        user.send(`Numaranız: ${numaram}`)
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
    if(silah === 'telefon'){
        let miktar = '3000'
        if(db.fetch(`${message.guild.id}_${user.id}_özeleşya`, silah ) === true) {
            return message.reply('Bu eşya sende var!')  
        }
        if(para < miktar) {
            return message.reply('Yeterli para bankanda yok!')  
        }
        adb.set(`${message.guild.id}_${user.id}_telefontürü`,silah )
        message.reply('Telefon satın alındı!')
        let kalan = para - miktar
        qdb.set(`${message.guild.id}_${user.id}_bakiye`, kalan)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['satınal'],
    permLevel: 0
   };
   
   exports.help = {
    name: 'satın-al',
    description: 'Botun Pingini Resimle Gösterir.',
    usage: 'ping'
   };