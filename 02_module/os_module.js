const os = require("os");

console.log(os);

// check version
console.log("version is :", os.version()); // version is : Windows 11 Home Single Language

// check free memory
console.log(os.freemem()); /// 1020272640

// check total memory
console.log(os.totalmem()); /// 8299257856

// home directory
console.log(os.homedir()); /// C:\Users\prince

// platform
console.log(os.platform()); /// win32

// hostname
console.log(os.hostname()); /// Kurama

// release
console.log(os.release()); /// 10.0.22631


console.log(os.uptime());
console.log(os.networkInterfaces());