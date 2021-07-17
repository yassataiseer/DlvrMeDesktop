const server = require('./app');
var path= require('path')
const { app, BrowserWindow } = require('electron')

var mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: path.join(__dirname, 'public/img/icona-app.png'),
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: true,
    webPreferences: {
      devTools: false
    }
  });
  mainWindow.loadURL('http://localhost:8080/');

}

app.on('ready', createWindow)