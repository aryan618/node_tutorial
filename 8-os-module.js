const os = require("os");
// info abotu the user
const user = os.userInfo();
console.log(user);

//info abotu the user uptime
console.log(`the user uptime is ${os.uptime()} seconds`);
// info about the current os

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
