const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=fqoiSJ7A#U5tBxOdfVFjFZXposW6HrDhg0ZSXywUowkFi78tlN90",
MONGODB: process.env.MONGODB || "mongodb+srv://nimafree:nimafree@nimafree.ae8e2.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
