import * as path from 'path'
import { app, BrowserWindow } from 'electron'
import * as reload from 'electron-reloader'

const createWindow = async () => {
    try {
        const mainWindow: any = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                preload: path.join(__dirname, '../build/preload.js'),
                nodeIntegration: true
            }
        })

        if (app.isPackaged) {
            mainWindow.loadURL(path.join(__dirname, '../dist/index.html'))
        } else {
            mainWindow.loadURL('http://localhost:3000/index.html');

            mainWindow.webContents.openDevTools();

            require('electron-reload')(__dirname);

        }
    } catch (err) {
        console.log(__dirname)
    }
}

app.whenReady().then(async () => {

    await createWindow()

    app.on('activate', async () => {
        if (BrowserWindow.getAllWindows().length === 0) await createWindow()
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
})

