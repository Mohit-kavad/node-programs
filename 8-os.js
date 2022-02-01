const os = require('os');

// info about current user

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem:os.totalmem(),
    freeMem :os.freemem(),
    dir:os.tmpdir(),
    hostName:os.hostname(),
    loadAvg :os.loadavg(),
    uptime : os.uptime(),
}

console.log(currentOS);


