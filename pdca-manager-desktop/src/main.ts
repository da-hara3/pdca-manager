/// <reference path="../typings/index.d.ts"/>

// In the main process.
const { app, BrowserWindow } = require('electron')

app.on('window-all-closed', () => {
    app.quit()
})

app.on('ready', () => {
    let win = new BrowserWindow({ width: 800, height: 600 })
    // load a local HTML file
    win.loadURL(`file:///index.html`)
})
