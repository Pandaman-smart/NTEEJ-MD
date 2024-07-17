//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpQSEljaEIxQ1pNSEhQZVNhb3dkeWlIUnNHY0N3bXdJK0gvQUV0SmpFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMithWGxENGhMNFVrWi9VbHZEL3o2YTJrTGd4QlZuWFphVlMvWmVScWRDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QmFtVmdjZjgwRlk2Y3RjYVgxYTBQRFNqZHI4RGcyZ2t2RWduSi9PVlVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1K0JLeXJFeWV4Ui80STd4c0RZYytzS0tpWHNYb2dERUd2dXNRdDNWQm1VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEZHZsUExHVW5MUit5bzg4NC9jUHpCZFZKeWxTUE1mRHJXMURGZDY2VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRnbmx1UDhZdUdXVDJ4KzBBK0N5NGZwUENEM3VrbnVIT3dnRlA1NWk1RHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU5INUdvbERRQi8yeWtxUG5YTFVvTTEwbi9kVkF2am1XTXlXQUJ4MG9IYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTdVeDlqVEc5Zmg0dUJZSTkzN1laekErY29DREJzK05raXdmeVZybWl6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE1VS9Mb1dpVlJORGdydGtqdXZMWk1haVozeGtHUEs3RjcxQmxsK1F0dHMzUGpJc2dJR0o3YVVpaUFldlBuT28vclk2K2EyMG1XT0FjL2c3dGNBc0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiJhb1ZMWEVnWGNXQzNKY3h0TnlaSFc1QjUzT1JHNFJtSnpyR0drUzNhVVEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzMjczNzc4NjAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBRTAwNTVEMkQ4OEIzMjMxMTBCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjEyMzQ0MDF9XSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlQ0LXZpS0FCUUhLTG9aSEZsQVVLWEEiLCJwaG9uZUlkIjoiYWZhZjVkYTEtMWRjNy00NWY3LTliZjQtOGNhMjQxZmMwNTM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im53Q0tBYnJVS3NPZzRLMWtOMVNwVU5PcVp4TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSlJwenB2N0w0bm1Yenp6M2l5ckc4VVI3b3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkY3QzUzNzMiLCJtZSI6eyJpZCI6IjIzMjczNzc4NjAzOjE4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9HICBTTUFSVCjplYfkuIrmnIDogarmmI7nmoTkuropIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLU1R4TDBMRU5EbjM3UUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2YjdqcGxNMlZJYVRyWmxaaFl6ZGNkSXEwRC83MGRaWVlMNEY0bG9yRndvPSIsImFjY291bnRTaWduYXR1cmUiOiJWckZtYWZJczFyUVp4Q0luTHVIMFBVTVZldlUvL2NyeVFBSXdJa0ZWUSthUVRhWmhhaVVBZ1RvV3IzaFF0YjF5ZTlYNEZVTXZ4eDdhdTEreW9oNjNpdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMldDYTRIUjlwdGR0ZU1qYTl1ZFpHRFdld2lMSXAwU0dUZGZ0UG1aQXU1eUJvWTNEamdRdTRzRFd5Qk9OZkxEVnQxcko2NXRtSVlEMk5sZTdvdU56QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3Mzc3ODYwMzoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiMis0NlpUTmxTR2s2MlpXWVdNM1hIU0t0QS8rOUhXV0dDK0JlSmFLeGNLIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjM0Mzk3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpMViJ9"
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
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
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
