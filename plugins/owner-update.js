let { execSync } = require('child_process')
let handler = async (m, { conn, text }) => {
  if (global.conn.user.jid == conn.user.jid) {
    let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
    require('fs').readdirSync('plugins').map(v=>global.reload('', v))
    conn.reply(m.chat, stdout.toString(), m)
  }
}
handler.help = ['roload']
handler.tags = ['owner']
handler.command = /^roload$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

