const { app, BrowserWindow } = require('electron');
const path = require('path');

// メインウィンドウの参照を保持
let mainWindow;

function createWindow() {
  // メインウィンドウを作成
  mainWindow = new BrowserWindow({
    width: 400, // 幅を広げる
    height: 350, // 高さを広げる
    x: 1600, // 画面の右側に配置
    y: 800,  // 画面の下側に配置
    frame: false, // ウィンドウフレームを非表示
    transparent: true, // 背景を透明に
    alwaysOnTop: true, // 常に最前面に表示
    resizable: false, // リサイズ不可
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // HTMLファイルを読み込み
  mainWindow.loadFile('index.html');

  // 開発時はDevToolsを開く（本番時はコメントアウト）
  // mainWindow.webContents.openDevTools();
}

// アプリが準備完了したらウィンドウを作成
app.whenReady().then(createWindow);

// すべてのウィンドウが閉じられたらアプリを終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 