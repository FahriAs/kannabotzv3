const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../system/lib/sticker')

let handler  = async (m, { conn, text }) => {
   pp = `https://xteam.xyz/videomaker/poly?text=${text}&APIKEY=${Apikey}`
                     await sticker(false, pp, 'Poly Text', global.botname).then(gege => {
                     conn.sendMessage(m.chat, gege, 'stickerMessage', { quoted: m })
                     })
  if (!text) throw 'Teksnya.. mana sayang?'
}
handler.help = ['poly <teks>']
handler.tags = ['sticker']
handler.command = /^sleding$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
