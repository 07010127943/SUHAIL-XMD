const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝙳𝙾𝙽𝚆𝙸𝚉 " 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://pin.it/66DtjMW34" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_15_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgODksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAzLFxuICAgICAgICA2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNjY0hnVURTZW5KalJtSk1kVlI5QzRXdTlSdnZET1JJclBmdjdSbUlGM289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyODQyMTc4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTRDNTdFN0IzQUI0QzFDMTFEM0FCNzEyQjM2MjdBREZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NTQ1NzE0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi00R3dsQXFGUzJTU2JUSWNseV9MZEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzExN2ZhMDItYjJiZC00MzNiLTllOTctZWU5MWU5Yjk0ZTg2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDIsXG4gICAgICAxNjQsXG4gICAgICA4NixcbiAgICAgIDE1NixcbiAgICAgIDE2NixcbiAgICAgIDEzNSxcbiAgICAgIDIyMyxcbiAgICAgIDEzMCxcbiAgICAgIDk0LFxuICAgICAgMTY1LFxuICAgICAgMjM0LFxuICAgICAgNjUsXG4gICAgICAxNTYsXG4gICAgICAxLFxuICAgICAgMTM5LFxuICAgICAgMjI1LFxuICAgICAgMTU2LFxuICAgICAgMTY3LFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMjI5LFxuICAgICAgMTAxLFxuICAgICAgNjksXG4gICAgICAyMTksXG4gICAgICAxNjMsXG4gICAgICAyMzEsXG4gICAgICAzOCxcbiAgICAgIDI5LFxuICAgICAgMjI3LFxuICAgICAgNjMsXG4gICAgICAxMTgsXG4gICAgICAxODEsXG4gICAgICAxNzQsXG4gICAgICAxNjYsXG4gICAgICAyNDgsXG4gICAgICAxNDYsXG4gICAgICA5MyxcbiAgICAgIDE3LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFkzWTVWTUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjg0MjE3ODk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzd2FlbGVlXCIsXG4gICAgXCJsaWRcIjogXCIyMDg1NTUzNDA3NTUwNzY6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9zcW1vUXA2S011d1lZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMem1aY2VHMWtkLzh0dVY0Z0NGRUYzSm4zRDgzQmR2cUJLQ09ZOVluTUQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF5Qm93RkZVOW1zVXJqR1pHMVJ4RUZON3g3UGt2bG9ReWFkKzR6a0YrcHJSeUpVLzA2L284aTVKMU45L2hBUkJPWnlIZmxFdEYzREVwWFVBNmN6OUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZRK0dMZFFVWFJUS2daR0orTUp2Rlg0NFRRWW0xQ0xTZEdvWGt2LzNXejArQkNLd24ybUhER3RQV1oyWHFBNTlpWWZJVFQ1ci95bTFPa0R1UjlxcUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjg0MjE3ODk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1NDU3MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQ0FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVDQS5qc29uIjogIntcImtleURhdGFcIjpcIjRYWk9MVlFmeXJrWjJqK01vWEkvNi9iQk1vVVgwc0NPVEhxOWlZNnI0TmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIyOTkxOTM5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "𝙳𝙾𝙽𝚆𝙸𝚉 " , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝙳𝙾𝙽𝚆𝙸𝚉 ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝙳𝙾𝙽𝚆𝙸𝚉 "  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
