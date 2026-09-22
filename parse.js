
const data = require("./eslint.json");
data.forEach(file => {
  file.messages.forEach(msg => {
    if (msg.severity === 2) {
      console.log(`${file.filePath}:${msg.line} - ${msg.message}`);
    }
  });
});
