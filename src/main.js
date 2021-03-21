const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')

const createWindow = () => {
  const newWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })

  const loadUrl = isDev ? 'http://localhost:3000' : ''
  newWindow.loadURL(loadUrl)
  newWindow.webContents.openDevTools()
}

app.on('ready', () => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
