let imageToBase64 = require('image-to-base64')
let uploadImage = require('../system/lib/uploadImage')
let fetch = require('node-fetch')

let handler = async (m, { conn }) => {

  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
      if (!m.quoted) return conn.reply(m.chat, 'Foto/Video tidak ditemukan!', m)
      let q = m.quoted ? m.quoted : m
      let file = await q.download()
      if (!file) throw 'Foto/Video tidak ditemukan!'
      let upload = await uploadImage(file)
      let base64 = await imageToBase64(upload)

  conn.reply(m.chat, 'Nihh Hasilnya\n\n' + base64, m)
}
handler.help = ['imagetobase64 (caption|reply)']
handler.tags = ['tools']
handler.command = /^(imagetobase64)$/i

handler.limit = true

module.exports = handler
