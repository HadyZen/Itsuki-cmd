const axios = require('axios');
const font = require("fontstyles");
module.exports = {
  config: {
    name: "gemini",
    version: "𝟣.𝟢",
    countDown: 10,
    role: 0,
    category: "AI",
    description: "𝖻𝖾𝗋𝗍𝖺𝗇𝗒𝖺 𝗄𝖾𝗉𝖺𝖽𝖺 𝗀𝖾𝗆𝗂𝗇𝗂",
    author: "Rizky Z (hadi)",
    guide: {
      id: "{pn} <𝗍𝖺𝗇𝗒𝖺𝗄𝖺𝗇>"
    }
  },

  onStart: async function ({ message, args, event, usersData }) {
    const tanyakan = args.join(' ');
const { gender, name } = await usersData.get(event.senderID);
const names = name.split(" ")[0];
const nama = font.bold(names);
let kelamin = "";
if (gender == 1) { 
 kelamin += "-𝗰𝗵𝗮𝗻";
} else if (gender == 2) { 
 kelamin += "-𝗸𝘂𝗻";
} 
    if (!tanyakan) {
      return message.reply(nama + kelamin + ', 𝗄𝖺𝗆𝗎 𝖻𝖾𝗅𝗎𝗆 𝗆𝖾𝗆𝖺𝗌𝗎𝗄𝗄𝖺𝗇 𝗉𝖾𝗋𝗍𝖺𝗇𝗒𝖺𝖺𝗇.');
    }

    try {
      message.reaction('❤', event.messageID);
      const gemini = await axios.get(`https://sandipbaruwal.onrender.com/gemini?prompt=${encodeURIComponent(tanyakan)}`);
      const pipi = gemini.data.answer;
      message.reply(`♡ 𝗚𝗲𝗺𝗶𝗻𝗶\n\n${nama}${kelamin}, ${pipi}`);

    } catch (error) {
      message.reply('𝖤𝗋𝗋𝗈𝗋' + error);
    }
  }
};
