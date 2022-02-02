const { Discord, client, MessageEmbed } = require("discord.js");
const config = require("../settings.json");
const moment = require("moment");
const ms = require("ms")
require("moment-duration-format");
moment.locale("tr");
exports.execute = async (member) => {

  let embed = new MessageEmbed().setAuthor(member.guild.name, member.guild.iconURL({ dynamic: true })).setFooter(config.footer)
    .setColor(`#313136`)

    let memberGün = moment(member.user.createdAt).format("DD");
    let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
    let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");
  
  var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-999])/g)
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
      return {
        "0": `${config.sifir}`,
        "1": `${config.bir}`,
        "2": `${config.iki}`,
        "3": `${config.uc}`,
        "4": `${config.dort}`,
        "5": `${config.bes}`,
        "6": `${config.alti}`,
        "7": `${config.yedi}`, 
        "8": `${config.sekiz}`,
        "9": `${config.dokuz}`
      }[d];
    })
  }
  const teyitkanali1 = member.guild.channels.cache.get(config.hg)
  const suphelikanali = member.guild.channels.cache.get(config.süphelilog)
  const kurallar = member.guild.channels.cache.get(config.kurallar);
  const rolalma = member.guild.channels.cache.get(config.rolalma);
  if (member.user.username.includes(config.tag)) {
    await member.roles.set([config.family,config.unregister]).catch(() => false)
    member.setNickname(`${config.tag} ${config.kayıtsızverileri}`).catch(() => false)
  } else {
    member.roles.set([config.unregister]).catch(() => false)
    member.setNickname(`${config.tagsız} ${config.kayıtsızverileri}`).catch(() => false)
  } 
  if (Date.now() - member.user.createdAt < ms("7d")) {
    member.setNickname(`${config.tag} Şüpheli Hesap`).catch(() => false)
    member.roles.set([config.ceza])
    suphelikanali.send(`<@${member.id}> - \`(${member.id})\` kişisinin hesabı 7 günden önce açıldığı için şüpheliye atıldı.`).catch(() => false )
  } else {

    teyitkanali1.send(`
    ${config.hg1} ${member.guild.name}'a Hoş geldin ${member} biz de seni bekliyorduk, hesabın __${memberGün} ${memberAylar} ${memberTarih}__ tarihinde yani :\`${moment(member.user.createdTimestamp).fromNow()}\` \n
    ${config.hg2} Sunucumuz seninle birlikte ailemiz ${üyesayısı} kişi oldu!\n
    ${config.hg3} Sunucu kurallarımız ${kurallar} kanalında belirtilmiştir. Unutma sunucu içerisinde ki \`ceza-i işlemler\` kurallarını okuduğunu varsayarak gerçekleştirilecek.\n
    ${config.hg4} Sunucumuzda etkinliklerden, turnuvalardan veya da oyun etkinliklerinden haberdar olmak için ${rolalma} kanalından rolleri alabilirsiniz.\n
    ${config.hg5} <@&${config.registery}> Rollerine sahip yetkililer ilgilenecektir, lütfen sese geçiniz ve seste teyit veriniz.
    ${config.hg6} Tagımıza ulaşmak için herhangi bir kanala \`.tag\` yazabilirsiniz. Şimdiden iyi eğlenceler! ${config.hg7}`)
    teyitkanali1.send(`https://cdn.discordapp.com/attachments/922615386640355369/937385745910489088/standard_1.gif`)


    /*

      teyitkanali1.send(`${member} <@&${config.registery}>`)
      teyitkanali1.send({
        embeds: [embed.setDescription(`
        ${config.hg1} ${member.guild.name}'a Hoş geldin ${member} biz de seni bekliyorduk, hesabın __${memberGün} ${memberAylar} ${memberTarih}__ tarihinde yani :\`${moment(member.user.createdTimestamp).fromNow()}\` \n
        ${config.hg2} Sunucumuz seninle birlikte ailemiz ${üyesayısı} kişi oldu!\n
        ${config.hg3} Sunucu kurallarımız ${kurallar} kanalında belirtilmiştir. Unutma sunucu içerisinde ki \`ceza-i işlemler\` kurallarını okuduğunu varsayarak gerçekleştirilecek.\n
        ${config.hg4} Sunucumuzda etkinliklerden, turnuvalardan veya da oyun etkinliklerinden haberdar olmak için ${rolalma} kanalından rolleri alabilirsiniz.\n
        ${config.hg5} <@&${config.registery}> Rollerine sahip yetkililer ilgilenecektir, lütfen sese geçiniz ve seste teyit veriniz.
        ${config.hg6} Tagımıza ulaşmak için herhangi bir kanala \`.tag\` yazabilirsiniz. Şimdiden iyi eğlenceler! ${config.hg7}`).setImage("https://cdn.discordapp.com/attachments/922615386640355369/937385745910489088/standard_1.gif").setThumbnail("https://cdn.discordapp.com/attachments/922615386640355369/937833230978142248/XyVO.gif")]
      }).catch(() => false )

      */
};

}

exports.conf = {
  event: "guildMemberAdd"
};

