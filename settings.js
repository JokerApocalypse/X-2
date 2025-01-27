//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "7166670184:AAHlhoVfM8JvrzXerIyFnwW6nC2KXwyX2IE" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "X-TECH" //your bot name
global.OWNER_NAME = "@xtechcorporation1" //your name with sign @
global.OWNER = ["https://t.me/+WEsVdEN2B9w4ZjA9", "https://youtube.com/@dgxeon?si=Ogk_T5DMcDjTQjNF"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["6199818585"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://i.imgur.com/BdRa36C.jpeg' //your bot pp

global.owner = global.owner = ['6199818585'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})