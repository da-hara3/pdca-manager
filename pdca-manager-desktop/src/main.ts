// In the main process.
const { app, BrowserWindow } = require('electron')

app.on('window-all-closed', () => {
    app.quit()
})

let mainWindow;
app.on('ready', () => {
  // アプリケーションメニューの構成
  // Menu.setApplicationMenu(mainMenu);
  // メイン画面起動
  mainWindow = new BrowserWindow({width: 600, height: 400});
  console.log(__dirname);
  mainWindow.loadURL('file://' + __dirname + '/main/index.html');
  console.log("起動確認");

  // デバッグ用
  mainWindow.webContents.openDevTools();

  // 終了時のオプション
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
})
