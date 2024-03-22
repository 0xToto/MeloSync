const {
  app,
  BrowserWindow,
  ipcMain,
  Notification,
  nativeImage,
} = require("electron");
const path = require("path");
const DiscordRPC = require("discord-rpc");

const clientId = "1133140322541633586";

let mainWindow;
let progressInterval;

function notification(title, body, silent) {
  const notifications = new Notification({
    silent,
    icon: path.join(__dirname, "./src/assets/melosync.png"),
    title,
    body,
    subtitle: "MeloSync - Beta",
    hasReply: true,
    replyPlaceholder: "Répondre...",
    closeButtonText: "Fermer",
    // toastXml: `
    // <toast>
    //   <visual>
    //     <binding template="ToastGeneric">
    //       <text>MeloSync - Beta</text>
    //       <text>${title}</text>
    //       <text>${body}</text>
    //     </binding>
    //   </visual>
    //   <actions>
    //     <input id="message" type="text" placeHolderContent="Répondre..." />
    //     <action
    //       activationType="background"
    //       arguments="reply"
    //       content="Répondre"
    //       imageUri="https://i.imgur.com/8bq0gXb.png"
    //       hint-inputId="message"
    //       scenario="incomingCall"
    //     />
    //     <action
    //       activationType="background"
    //       arguments="dismiss"
    //       content="Fermer"
    //       imageUri="https://i.imgur.com/8bq0gXb.png"
    //       hint-inputId="message"
    //       scenario="incomingCall"
    //     />
    //   </actions>
    // </toast>
    // `,
    sound: "sms-sound.wav",
  });

  notifications.show();
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    icon: path.join(__dirname, "./src/assets/melosync.png"),
    title: "MeloSync - Beta",
  });

  // mainWindow.loadFile("./index.html");
  mainWindow.loadURL("http://localhost:3000/");

  const INCREMENT = 0.03;
  const INTERVAL_DELAY = 100; // ms

  let c = 0;
  progressInterval = setInterval(() => {
    // update progress bar to next value
    // values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
    mainWindow.setProgressBar(c);
    // win.setProgressBar(c);

    // increment or reset progress bar
    if (c < 2) c += INCREMENT;
    else c = 5;

    if (c === 5) {
      clearInterval(progressInterval);
      mainWindow.setProgressBar(-1);
    }
  }, INTERVAL_DELAY);

  // Notifications

  ipcMain.on("notification", (event, arg) => {
    console.info("Notification reçue !");
    console.info(arg);
    notification(arg.title, arg.body, arg.silent);
  });
}

app.whenReady().then(() => {
  createWindow();
  notification("Démarrage en cours", "Veuillez patienter...", false);

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("before-quit", () => {
  clearInterval(progressInterval);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// Register Discord RPC

DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: "ipc" });
const startTimestamp = new Date();

async function setActivity(data) {
  if (!rpc || !mainWindow) {
    return;
  }

  rpc.setActivity(data);
}

rpc.on("ready", () => {
  setActivity({
    details: "Initialisation",
    state: "Mode privé",
    startTimestamp,
  });
});

rpc.login({ clientId }).catch(console.error);

// Code pour mettre à jour le RPC Discord en utilisant fetch

async function updateRPC() {
  const response = await fetch(`http://localhost:443/user/rpc/get/parfait`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  console.info("Mise à jour du RPC en cours..");
  if (data) {
    setActivity({
      details: data[0].discordDetails,
      state: data[0].discordState,
      startTimestamp: parseInt(data[0].discordStartTimestamp, 10),
      // partySize: 1,
      // partyMax: 5,
      joinSecret: "MTI4NzM0OjFpMmhuZToxMjMxMjM=sfsefs",
      largeImageKey: "melosync_music",
      largeImageText: "MeloSync - Beta",
      smallImageKey: "melosync_music",
      smallImageText: "MeloSync - Beta",
    });

    console.info("RPC mis à jour avec succès !");
  }
}

setInterval(updateRPC, 5000); // Mettre à jour toutes les 5 secondes (ajustez selon vos besoins)
