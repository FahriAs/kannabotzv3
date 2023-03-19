import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
	let url = 'https://telegra.ph/file/c78b2ae0ccc5e2b355623.jpg'
let wm = 'Hai Saya Kanna Jangan Lupa Suscribe Youtube FahriXz \n\nAtau bisa klik link Youtube : https://www.youtube.com/@FahriXz_'
let cap = `*S U B S C R I B E 😁*`
	conn.sendButton(m.chat, cap, wm, await(await fetch(url)).buffer(), [['OTW SUB',`ombaik`]],m)
}

handler.command = /^(zykomd)$/i
handler.premium = false
handler.limit = true

export default handler