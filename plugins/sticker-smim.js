//by akbar
const uploadImage = require('../system/lib/uploadImage') 
const { sticker } = require('../system/lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
//  let [teks, teks2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Reply image dengan caption *#smim teks*'
 try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://api.memegen.link/images/custom/_/${text}.png?background=${url}`
  let stiker = await sticker(null, wasted, packname, author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply(mess.error)
  }
}
handler.help = ['smim']
handler.tags = ['sticker']
handler.command = /^smim$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler