if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pwa-react-practice/sw.js', { scope: '/pwa-react-practice/' })})}