const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['918010431346'] //ur owner number
global.ownernomer = "918010431346" //ur owner number2
global.ownername = "Pratap" //ur owner name
global.ytname = "YT: " //ur yt chanel name
global.socialm = "GitHub: Pratap0707" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "𓆩‎☆𝚩𝚫𝚩𝐘♕︎☦︎⚠︎𓆪🥂"
global.ownernumber = '918010431346'
global.ownername = 'Pratap🧸💌'
global.ownerNumber = ["918010431346@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@DGXeon"
global.websitex = "https://youtu.be/ecl-JDVDz3E"
global.wagc = "https://chat.whatsapp.com/DGKO8EX70FCGqrRVRatwy5"
global.themeemoji = '🥀'
global.wm = "Pratap 💌⚡️."
global.botscript = 'NAHI HAI TERE LIYE 🫣💔' //script link
global.packname = "Sticker By"
global.author = "𝚩𝚫𝚩𝐘🐣\n\n\nA whatsapp bot developed by\nPratap🧸💌\n\n\n\n\n\n\n\n       --------______-------\n\n\n\n\n\n\n\nContact No. : NOT FOR YOU 😜 BABY "
global.creator = "918010431346@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
