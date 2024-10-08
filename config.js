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
global.caption = process.env.CAPTION || global.caption || "▄︻デD̷O̷N̷W̷I̷Z̷══━一" 


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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_35_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWDVNeGluN1NtTTRNcDBtWlZKM0dwMXNQUS9GalIrVGZxTmw1UXpEa1ZYMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEpGMDVubVVTYVctbmRHc0lJQ3cyUVwiLFxuICBcInBob25lSWRcIjogXCIzNTJiOTM0ZC1iY2RlLTRkMTAtYWExYy02Mjg1NDU3NGNlZDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTI5LFxuICAgICAgMjI3LFxuICAgICAgNTAsXG4gICAgICAyMDcsXG4gICAgICAxNDAsXG4gICAgICAxODMsXG4gICAgICAxMzQsXG4gICAgICA4MSxcbiAgICAgIDcsXG4gICAgICA1MSxcbiAgICAgIDE5MSxcbiAgICAgIDExOCxcbiAgICAgIDQwLFxuICAgICAgMjE2LFxuICAgICAgMTQ0LFxuICAgICAgNjQsXG4gICAgICA1OSxcbiAgICAgIDI1MCxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICA3NCxcbiAgICAgIDE2MixcbiAgICAgIDkwLFxuICAgICAgMTg4LFxuICAgICAgMTgxLFxuICAgICAgMTAzLFxuICAgICAgNSxcbiAgICAgIDE5MyxcbiAgICAgIDE4OSxcbiAgICAgIDE5NixcbiAgICAgIDc4LFxuICAgICAgMTYyLFxuICAgICAgMzQsXG4gICAgICAyMjAsXG4gICAgICAyMTksXG4gICAgICAxMzgsXG4gICAgICA5MixcbiAgICAgIDEzOCxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFaUEREUDc5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTUwOTk4NzA2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNDczMzE2MzQwOTU1ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09QZHJ1VUNFSTZUbHJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNTNKVlR5aURaejJhM21DWHhXZVltTEtQWFVyY3d4SHN5SGxtcmwyb2xDdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlUVFqaURidGFhUWVBY3dZZVoxdCtzam1maTlvNStwbFZ5Y3doK21hK0Z5NGk3RStvMWg2elZHSldJYks0Z05SUzdnMDBUZ3d5U0g4WmllcVNLaXhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwR3ozV3dxeUNUeG1XSDdsQTVNa1dVUzZFNjgzeWZiUHlTcEF3SWxOSlcvVHNzVnBpOXBkVGdDam8vWEdMZXFIdk5zTEcxUU1ONTFkc3RHS3pvSnloQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTUwOTk4NzA2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODQxNjE0NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || " ▄︻デD̷O̷N̷W̷I̷Z̷══━一" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ▄︻デD̷O̷N̷W̷I̷Z̷══━一® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "D͢O͢N͢W͢I͢Z͢ ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝘿𝙊𝙉𝙒𝙄𝙕"  ).toUpperCase(),



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
