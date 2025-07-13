const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

// メインウィンドウの参照を保持
let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const winWidth = 400, winHeight = 250;
  const x = Math.round((width - winWidth) / 2);
  const y = 300;

  // メインウィンドウを作成
  mainWindow = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: x,
    y: y,
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