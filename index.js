const express = require("express");
const app = express();
const port = process.env.port || 3000;
const os = require("node:os");

let systemInfo = {
    cpuCount: os.cpus().length,
    cpuDetails: os.cpus(),
    osType: os.type(),
    osArch: os.arch(),
    osPlatform: os.platform(),
    osRelease: os.release(),
    hostname: os.hostname(),
    uptime: os.uptime(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    loadAvg: os.loadavg(),
    homeDir: os.homedir(),
    tmpDir: os.tmpdir(),
    endianness: os.endianness(),
    userInfo: os.userInfo(),
    networkInterfaces: os.networkInterfaces()
};

app.get("/", (req, res) => {
  res.send(systemInfo);
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
