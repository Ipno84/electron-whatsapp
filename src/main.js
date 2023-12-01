const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

const userAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36';

const createWhatsappWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const whatsappWindow = new BrowserWindow({
    width,
    height,
    show: false,
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  whatsappWindow.loadURL('https://web.whatsapp.com/', { userAgent });

  whatsappWindow.maximize();
  whatsappWindow.show();

  whatsappWindow.on('close', () => {
    whatsappWindow = null;
  });
};

app.whenReady().then(() => {
  createWhatsappWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWhatsappWindow();
  });
});
