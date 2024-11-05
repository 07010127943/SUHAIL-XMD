const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "nigeria/lagos";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || " https://pin.it/LfnOJRdSJ.jpg" || "https://pin.it/LfnOJRdSJ.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ༺ɢɛռɛʀǟȶɛɖ ɮʏ D͢O͢N͢W͢I͢Z͢ ༻" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349131021928";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://pin.it/LfnOJRdSJ.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_53_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMixcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTczLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSVQwKzcvbVpScGZCSk1NK2ZVekJsODZnUHhDOGc5ZGM1Q0txQTlFME9nVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ1RDTjdLbVNTME9TVlNVRlZ5NkZjd1wiLFxuICBcInBob25lSWRcIjogXCJiNGE3MDQ1ZC1lNjA2LTQxMmQtYWY4Ni0wZTYzOTg0MGQ2OTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAxMjcsXG4gICAgICA5MixcbiAgICAgIDI1MCxcbiAgICAgIDEzMyxcbiAgICAgIDIyMSxcbiAgICAgIDE1MyxcbiAgICAgIDE0OCxcbiAgICAgIDE1NCxcbiAgICAgIDM1LFxuICAgICAgMjMwLFxuICAgICAgNTAsXG4gICAgICAyMjIsXG4gICAgICA3MSxcbiAgICAgIDE2OCxcbiAgICAgIDI0MixcbiAgICAgIDM2LFxuICAgICAgMzcsXG4gICAgICA3NyxcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOCxcbiAgICAgIDg0LFxuICAgICAgMTE0LFxuICAgICAgMTE3LFxuICAgICAgODMsXG4gICAgICA5OCxcbiAgICAgIDE1NyxcbiAgICAgIDE5NCxcbiAgICAgIDE4NyxcbiAgICAgIDIxNixcbiAgICAgIDc5LFxuICAgICAgNzUsXG4gICAgICAzLFxuICAgICAgMjE2LFxuICAgICAgMjQ4LFxuICAgICAgMjI3LFxuICAgICAgNjQsXG4gICAgICAxNzcsXG4gICAgICAxNzcsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZNkQ5OTZaU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMTAyMTkyODozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0ODAzMDczNTU2NDg2OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tLRzdid0xFUFRpcUxrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQUhmV29Ma2hQQ1dvNlNwQ3dhK09QVTF2aS9NZmZPUDd3WjFoRlRpQ3FDaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhVDYvcVlFQnVzV0ZJdWRISmRMTFFSaEM2ZGVJbmhoSWVyZnJ5Y05hbFlBanBmRExNTkpYdm13ZEZVemt0dlROZDE3ZE12UjUwQzFaRmdpR2VWVzVCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsOGhUNmVDYUF6aHJneURRMTVySUV1SUw0M2ZPTkxaUHRhS1lyWktHa1dueGp2SW1YN2FoY1hqb1phN2xURjd1cWdsZ0FYR1Q5a2pLNE9BcjVPZS9Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMDIxOTI4OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODE4NDI0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "༺ɢɛռɛʀǟȶɛɖ ɮʏ D͢O͢N͢W͢I͢Z͢ ༻" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "WIZ-MD",
  ownername:process.env.OWNER_NAME|| " ༺D͢O͢N͢W͢I͢Z͢ ༻",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  " ༺D͢O͢N͢W͢I͢Z͢ ༻"  ).toUpperCase(),



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
