import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { registerSW } from 'virtual:pwa-register';
import App from './App.jsx'


registerSW({
  immediate: true, // 啟動後立即註冊
  onRegistered(r) {
    console.log('服務員已註冊', r);
  },
  onRegisterError(error) {
    console.error('註冊服務員時發生錯誤', error);
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
