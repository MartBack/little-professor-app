// Preload script - bridge between main process and renderer
import { contextBridge } from 'electron';

// Expose protected methods that allow the renderer process to use
// the APIs safely
contextBridge.exposeInMainWorld('electronAPI', {
  // Add APIs here as needed
  platform: process.platform
});

