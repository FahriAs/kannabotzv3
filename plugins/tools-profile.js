let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = '../system/src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let { name, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *PROFILE* ❭❀°━━┓
┃
┃• Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})
┃ •Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┃• Link: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
┃• Uang: ${exp}
┃• Limit: ${limit}
┃• Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

