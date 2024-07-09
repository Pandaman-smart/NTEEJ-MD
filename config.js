//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0VVdlNRVFBhWmRmR2M4Z3EvcHhuVlFVaGFiQUtlclYxbVhoTFN6a1MxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1dmZm5KaGZBdTJvaVZ6VGV3azNPV2VjTTZCWXlUT3haS3VibXdyWlNrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRXJ3bTg1ckMvWGRDaC9ndmNBZDYyUGRad01VUFZKb1JZODJPWTFucFY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZcms1N1JxZzNvM0w2RFk4RHJ3aDEwdFpUc05YWDhnUlJqbjNrVnV0QmdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFUWtackdORG9KRjR5VVllSWRNNWZYQSt3bFRmZ1VvdkFlYmNYMGhMbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZzdUhsWjZRN2Q2bXFCTzRCWkNiR2xWVXNzK1JxTU8ybzJxRDFyRGFuaXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1WYnZYUWFMbWRzbWxydkxnSGFMNmpZQ25QSkJzeHpwdTRlRmxLUDUydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1SMnpVc2w2VTZ4bXBZRUZTZXVBdFpjUURmeXJGelFxOHkzTkRMYjdoOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBmeW9yYXBMMnZPSlgyL0szajhpZlpSS1RxSVgxSHdqVG5pSjBHU1p5SnhNVUY5dWxjV0oxVU5XOGZ4UFN4aGJQZ05NRzRtbGl0UE5GNVF2ZjhFQ0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJCcG80cFNkNUJUZnQwUzU5eXB5eWxSbTRLRWk3a0JJRWJZek91M0RKb1VJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwX0xHNVh5ZVFlLTQwOG1nSmRZdVJBIiwicGhvbmVJZCI6IjA4ZmM4MjMzLWVhNmMtNDBhNy1hYTFjLTc2ZWFlOWE4MzUyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ZDZCYnFvYTExL2JxRlNuS3M4RXIvNkZrRUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnJ0QXMvaUFjalVYQjFINVMvd3ZmeHM3NVVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpNUllLU1I2IiwibWUiOnsiaWQiOiIyMzI3Mzc3ODYwMzo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9HICBTTUFSVCjplYfkuIrmnIDogarmmI7nmoTkuropIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJNmI5Sm9QRUttdXNiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2YjdqcGxNMlZJYVRyWmxaaFl6ZGNkSXEwRC83MGRaWVlMNEY0bG9yRndvPSIsImFjY291bnRTaWduYXR1cmUiOiJGTktwK0NXOStMUS9KSE5NOTdMTkFaRVVYRmdiSEdLMHRaa1BFSDkvTjlMTnVmTG5rSkRRWXRTZW5qNHlFWVlMV0V1bmRjelQyWVI1Y0FwWEZPN1VnQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia2VycUo0aElDUVhlYUJiSnRweTM0Y2V3WTdhRE5GLzVoeTc5Q0g3OUd5Y1p5aHFWc01uMVdGZE5IZ1FFTTFBZVcwcmdmek5BQ25pQUZkMUx6cTE2Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3Mzc3ODYwMzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmIyKzQ2WlRObFNHazYyWldZV00zWEhTS3RBLys5SFdXR0MrQmVKYUt4Y0sifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA0NzMzOTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVVVIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "263714497545";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NTEEJ-MD`",
  author: process.env.PACK_AUTHER || "NTEEJ-MD",
  packname: process.env.PACK_NAME || "NTEEJ",
  botname: process.env.BOT_NAME || "NTEEJ-MD",
  ownername: process.env.OWNER_NAME || "Nteej",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "263714497545";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
