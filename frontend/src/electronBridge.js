// electronBridge.js
import { ipcRenderer } from "electron";

ipcRenderer.on("update-rpc", (event, data) => {
  console.log(data);
});

export default { ipcRenderer };
