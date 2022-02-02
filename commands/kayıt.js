const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const config = require("../settings.json")
const ownerdata = require('../models/ownerdata');
const taglıdata = require("../models/taglı")
const Data = require("../models/MemberData")
let tag = new RegExp(config.tag)
exports.execute = async (client, message, args) => {
    if (!message.member.roles.cache.has(config.registery) && !message.member.permissions.has("ADMINISTRATOR")) return message.reply("Yetkiniz Yeterli Değil")
    let embed = new MessageEmbed()
        .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
        .setFooter({ text: config.footer.toString(), iconURL: "https://cdn.discordapp.com/avatars/925505428081758278/a_b8d858243955b8d395a45050d941b7e8.gif?size=80" })
        .setColor("RANDOM")
    const chaoscomp = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('erkek')
                .setEmoji(`${client.emojis.cache.find(chaos => chaos.name === "man")}`)
                .setStyle('PRIMARY'))
        .addComponents(
            new MessageButton()
                .setCustomId('kız')
                .setStyle('SUCCESS')
                .setEmoji(`${client.emojis.cache.find(chaos => chaos.name === "girl")}`))
        .addComponents(
            new MessageButton()
                .setCustomId('iptal')
                .setEmoji(`${client.emojis.cache.find(chaos => chaos.name === "warn")}`)
                .setStyle('DANGER'))
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let Name = args[1]
    let Age = args[2]

    if (!member || !Age || !Name) return message.reply({ embeds: [embed.setDescription(`[${client.emojis.cache.find(chaos => chaos.name === "warn")} **[HATA]** Yanlış Kullanım \`Örnek: .Kayıt <@Chaos/ID> Isim Yaş\` `)] }).then(msg => {setTimeout(() => msg.delete(), 5000);});
    if (!Age || isNaN(Age)) return message.reply({ embeds: [embed.setDescription("Geçerli Bi Yaş Belirleyin")] }).then(msg => {setTimeout(() => msg.delete(), 5000);});
    if (Name.lenght > 12) return message.reply(`uzunluk 12den fazla olamaz`).then(msg => {setTimeout(() => msg.delete(), 5000);});
    if (Age < config.yaşsınırı) return message.reply(`${config.yaşsınırı} yaş altı kullanıcı kayıt edilemez.`).then(msg => {setTimeout(() => msg.delete(), 5000);});
    let taglıdatas = await taglıdata.findOne({ guildId: message.guild.id });

    if (taglıdatas.taglıalım) {
        if (!tag.test(member.user.username) && !member.roles.cache.has(config.vip)) {
            return message.reply("Taglı Alim Açıktır Lütfen Tag Almayi Deneyin").then(msg => {setTimeout(() => msg.delete(), 9000);});
        }
    } else {
        await taglıdata.updateOne({ guildId: message.guild.id }, { $set: { taglıalım: false } }, { upsert: true });
    }

 


    if (member.roles.cache.get(config.man) || member.roles.cache.get(config.woman)) return message.reply({ embeds: [embed.setDescription(`kayıtlı user tekrar kayıt edemezsin`)] }).then(msg => {setTimeout(() => msg.delete(), 5000);});
    if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply({ embeds: [embed.setDescription(`İşlem geçersiz, senden üst && aynı pozisyonda birisine bunu yapamazsın.`)] }).then(msg => {setTimeout(() => msg.delete(), 5000);});
    let UyeData = await Data.find({ guildId: message.guild.id, member: member.id });
    let WomanRole = config.woman
    let ManRole = config.man
    let sikiyimv13ü = "Lütfen 30 saniye içerisinde alttaki butonlara basarak kullanıcının cinsiyetini belirleyin."
    const ChaosData = `${UyeData.map(x => `• ${member} Üyesi \`${x.Name}\` Adıyla ${x.role === "Erkek" ? `<@&${ManRole}>` : `<@&${WomanRole}>`} Olarak Kayıt Oldu`).join("\n ")}`
    if (ChaosData) {
        message.reply({ embeds: [embed.setDescription(`${member} üyesinin ismi \`${Name} ${Age}\` olarak değiştirildi, bu üye daha önce bu isimlerle kayıt olmuş. \n\n Üyesinin toplamdaki isim kayıtı aşağıda göstermektedir. \n\n ${ChaosData} \n\n Üyesinin önceki isimlerine \`.isimler <@Chaos/ID>\` komutuyla bakarak kayıt işlemini gerçekleştirmeniz önerilir.`).setFooter(`${sikiyimv13ü}`)], components: [chaoscomp] }).then(msg => {
        })

    } else {
        message.reply({ embeds: [embed.setDescription(`${member} üyesinin ismi \`${Name} ${Age}\` olarak değiştirildi, bu üye daha önce bu isimlerle kayıt olmuş. \n\n Üyesinin toplamdaki isim kayıtı aşağıda göstermektedir.\n\n ${ChaosData} \`Kullanıcının Sunucumuz'da bir verisi yok\` \n\n Üyesinin önceki isimlerine \`.isimler <@Chaos/ID>\` komutuyla bakarak kayıt işlemini gerçekleştirmeniz önerilir.`).setFooter(`${sikiyimv13ü}`)], components: [chaoscomp] }).then(msg => {
        })
////////////////arkadaşlar v13 anlamıyorum kütüphaneye bakmaya üşendim
////////////////cmdde eğer --trace-deprecation gibi bir hata görürseniz anlayın ki embeddeki .setfooter yüzündendir önemli bir hata değil sadece uyarıyor
////////////////isterseniz düzeltin isterseniz bırakın keyfinize göre ben sinirlendim saldım v12 candır v13 aptallıktır
    }
    const filter = i => i.user.id === message.member.id;
    const collector = message.channel.createMessageComponentCollector({ filter, time: 30000 });
    collector.on('collect', async b => {
        if (b.isButton()) {
            if (b.customId === "erkek") {
                await member.setNickname(`${config.tag} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` - ${Age}` : ``}`).catch(e => { })
                if (member.user.username.includes(config.tag)) {
                    await member.setNickname(`${config.tag} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` - ${Age}` : ``}`).catch(e => { })
                    await member.roles.set([config.man, config.man2, config.family])
                } else {
                    await member.setNickname(`${config.tagsız} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` | ${Age}` : ``}`).catch(e => { })
                    await member.roles.set([config.man, config.man2])
                }

                new Data({ guildId: message.guild.id, executor: message.member.id, member: member.id, Name: `${member.displayName}`, role: "Erkek" }).save().catch(t => { })
                message.reply({ embeds: [embed.setDescription(`${member} sunucumuza <@${message.author.id}> tarafından, \`${member.displayName}\` ismiyle <@&${config.man}> ve <@&${config.man2}> rolleri verilerek kayıt edildi!`)] })
                let ManReg = new ownerdata({ GuildId: message.guild.id, Member: message.member.id, TotalReg: 1, ManReg: 1, WomanReg: 0 })
                let modkızDB = await ownerdata.findOne({ GuildId: message.guild.id, Member: message.member.id })
                if (!modkızDB) {
                    ManReg.save().catch(e => { console.error(e) })
                } else {
                    modkızDB.TotalReg++
                    modkızDB.ManReg++
                    modkızDB.save().catch(e => { console.error(e) })
                }
                let RegData = await ownerdata.findOne({ GuildId: message.guild.id, Member: message.member.id })
                if(RegData) {
                    if (RegData.TotalReg == 15) {
                        message.member.roles.add(config.Onelevelreg)
                    } 
                    if (RegData.TotalReg == 30) {
                        message.member.roles.add(config.Twolevelreg)
                    } 
                } //else return console.log("data yok");
                   
                
            }

            if (b.customId === "kız") {
                if (member.user.username.includes(config.tag)) {
                    await member.setNickname(`${config.tag} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` - ${Age}` : ``}`).catch(e => { })
                    await member.roles.set([config.woman, config.woman2, config.family])
                } else {
                    await member.setNickname(`${config.tagsız} ${Name.charAt(0).toUpperCase() + Name.slice(1).toLowerCase()}${Age ? ` | ${Age}` : ``}`).catch(e => { })
                    await member.roles.set([config.woman, config.woman2])
                }
                new Data({ guildId: message.guild.id, executor: message.member.id, member: member.id, Name: `${member.displayName}`, role: "Kız" }).save().catch(t => { })
                message.reply({ embeds: [embed.setDescription(`${member} sunucumuza <@${message.author.id}> tarafından, \`${member.displayName}\` ismiyle <@&${config.woman}> ve <@&${config.woman2}> rolleri verilerek kayıt edildi!`)] })
                let WomanReg = new ownerdata({ GuildId: message.guild.id, Member: message.member.id, TotalReg: 1, ManReg: 1, WomanReg: 0 })
                let haveUserDB = await ownerdata.findOne({ GuildId: message.guild.id, Member: message.member.id })
                if (!haveUserDB) {
                    WomanReg.save().catch(e => { console.error(e) })
                } else {
                    haveUserDB.TotalReg++
                    haveUserDB.WomanReg++
                    haveUserDB.save().catch(e => { console.error(e) })
                }

                let RegData = await ownerdata.findOne({ GuildId: message.guild.id, Member: message.member.id })
                if(RegData) {
                    if (RegData.TotalReg == 15) {
                        message.member.roles.add(config.Onelevelreg)
                    } 
                    if (RegData.TotalReg == 30) {
                        message.member.roles.add(config.Twolevelreg)
                    } 
                } else {
                    console.log("data yok");
                }
                
            }
            if (b.customId === "iptal") {
                message.delete();
                message.channel.send('İşlem iptal edildi')
                    .then(msg => {
                        setTimeout(() => msg.delete(), 5000);
                    });
            }
            collector.stop()
            b.message.delete().catch(e => { console.error(e) })
        }
    })
}
exports.conf = {
    command: "kayıt",
    description: "",
    aliases: ["reg"]
}