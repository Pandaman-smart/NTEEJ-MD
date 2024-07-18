//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0dlT1FZOW1qQmVnMWlBR1dpS09scExmNDQxc2kwK0RjSUEwenhHTmpFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3YwdmxYckJqK2FtQ0wvamNCRkJrNlg1R1ZtWUxZQjh6TkhJUXpwTEtVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UE5URFVKd2F3bUJsYTNZTXBVc3JuczdkWjJYQmZxMVY0MHpqcDRhZlhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQnhINGdZdmg0Zy8zMVhjMUlFK2JybmU1RUVsSHdBVHpIemhiTXN4UndvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPY3dCWWFVQXdUZmlrZFl3bWxyMGZIeGZaSGdHWmpjazUzaGZzQVd5MkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNuZlhpY0liNUp2T0NSMmFaRDJPOFBBNHlDVmFkZE1nWUtObzI0Uk5sd1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktkVTlKVWJoZlBNcXczYlI0ZU82M2t4VWxudWZQdUZsQWJMOVM3akNFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWtUd0NtcUNCUWRTaHZDMDRTdlZpV0pPdE1IdXV0cjJtQzBUejA0NlNnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJxMXAzTG9pQmlLTkplYXN0L01kMG5vUWNjOXBtVHVZMGUvMzBDZFA5eE5RUjFYeHQwYWNSRlJPV2g2dkdpSFg2LzU0TzNrNjFLdStha3R1ZmgrMkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiJrT0RCVzVreno1SU9QT0dqZjF6NnA3c2d6SHN0M2RzMUY4RzlDR2tCOExzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2OVI5cW5rQVJGQ0wzVXVUeTg4Vjh3IiwicGhvbmVJZCI6IjVlZmM4N2VlLWFiNGItNGMzZi04ZjVhLWZmZDhkN2EzNDc0YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsWjlUMklKYUZlRnlHdUt5Q3ZScDFnVkw1Qms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE12dENmcGZ1RTJpRVZoMzBzb1pDMDMrVTEwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQyRFNQQVBTIiwibWUiOnsiaWQiOiIyMzI3Mzc3ODYwMzoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJPRyAgU01BUlQo6ZWH5LiK5pyA6IGq5piO55qE5Lq6KSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTd2M08wREVPbk80YlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidmI3anBsTTJWSWFUclpsWmhZemRjZElxMEQvNzBkWllZTDRGNGxvckZ3bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ0hSSG1rMGsvenNYdDBoa2ZTdFJXYmczYVh6WmpDQXdlNDZ6OTdUdmNSd1UwQkNib2Vzc0ViV0RqVjlwenhhZ1lSNVFFVGJ2NGYzMUdTdTBUZGk4Z1E9PSIsImRldmljZVNpZ25hdHVyZSI6ImZkclNRdVpaRmZ0cnlNaGgrT0M1dTVnbVArS084cDRFdFhXUngyT0UvaDhpM1ZrRGFUaVl0S1gyTjl0MW1sa0haZkJnWXlqcXNSYUp2cEpJWVNqVUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMyNzM3Nzg2MDM6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjIrNDZaVE5sU0drNjJaV1lXTTNYSFNLdEEvKzlIV1dHQytCZUphS3hjSyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTI2Mzk4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQMVkifQ=="
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
  HANDLERS: process.env.PREFIX || "+",
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
