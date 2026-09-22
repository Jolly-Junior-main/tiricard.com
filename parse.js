
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./eslint.json", "utf16le").replace(/^\uFEFF/, ""));
data.forEach(file => {
  file.messages.forEach(msg => {
    if (msg.severity === 2) {
      console.log(`${file.filePath}:${msg.line} - ${msg.message}`);
    }
  });
});
