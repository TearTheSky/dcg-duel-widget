const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('minimizeApp', () => {
  ipcRenderer.send('minimize-app');
}); 