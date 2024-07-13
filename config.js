//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUk1REZqK2VCWkRtUjZjSDFkdlVqbTg0dUpOTzYyelFNWHZUM1dEVG4xbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEhaUzF4SThHYjlGUjVGOXdvUWVpYlJ1NDVmVUxRRTFXNlF0VUxqUXhSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRmgyOERUNE80ZWEzblVuR213UnltcXYwMFgvNVZJN3dCdUxyc2puczAwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2MEsyRUh1OG9pUkhyKysxK1Q3MStsRTN0ckpYNUF3L05CVUxpb25scDJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCTERkaktSU3BsZEx0YUNZOWhDMTVHcm8randCeVZvZzF1blJjZkFnMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI3ZFplNk5Gdll4YVgyWU01bk9rbFpXWUJTR2QyRldVaUJ0U3czM0hFRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dGR2VkdTcrWER0cmdWWEY4YVlsTVVtMytNUzhUS0twNzF6K0Q4biswVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGVzTDJPWHhlWjgxMG4xQi9vcFhqU2pEL3I2VDFWbWl5V0I2ditoS21uST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBINWlhSWllbWxNb3hvbmVjZ2NtMXdRcHhZb2dqTHZudVlERmQya1luR2xPT3dKbU9JNnJOZWFkNndLRUw5WldyL0Q4YXJjRVZIaWd2bjhrclBndkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMsImFkdlNlY3JldEtleSI6IlVQdDc3SVc1WlpaWnBKb1NBdXJCeDJNQ0hJREFMeW5lTnVqZUpyci9iUXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjBxc1NqUG9MU3VXbGpfZkZCWEludVEiLCJwaG9uZUlkIjoiNjI4MTliNWQtYjBjNy00OGUwLWEzYTctMGNjZDcxNmE3MTdiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ5T29BWVFiVlAwV0huZGFKY3BDdGdibVhpTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZkgvbitnU0tBeVBSZC9Ycmtvd2tqYjJGMDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1FXNUZBRkMiLCJtZSI6eyJpZCI6IjIzMjczNzc4NjAzOjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9HICBTTUFSVCjplYfkuIrmnIDogarmmI7nmoTkuropIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNS1cvNjRQRUl6UXk3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2YjdqcGxNMlZJYVRyWmxaaFl6ZGNkSXEwRC83MGRaWVlMNEY0bG9yRndvPSIsImFjY291bnRTaWduYXR1cmUiOiJKOGd5NDZnR1pUTVdCRllkUlJhVlptTkJLZWI1bDN3Y2hVNTlySHVYOS91WnZIUXhyNncyaExLSms2Y0l5czBmd0JPNjJtbHhLcG1sNjFIWjExRW5oQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibTRFejRleDVGVWp0QjFqUTYrRWZ5ZXQ5MklCczQ1ZE1xeVk1a21PdGJ0eklvN3poQzM0bHhoVE5PcngwMVA5U1BCSGsyUVVJUitWR2doeEl1NnA2QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3Mzc3ODYwMzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiMis0NlpUTmxTR2s2MlpXWVdNM1hIU0t0QS8rOUhXV0dDK0JlSmFLeGNLIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTAzNzA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtYWSJ9"
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
