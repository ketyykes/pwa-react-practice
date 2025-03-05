import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pwaConfig = {
	registerType: "autoUpdate",
	includeAssets: ["favicon.ico", "robots.txt", "registerSW.js"],
	devOptions: {
		enabled: true,
		type: "module",
		navigateFallback: "index.html",
	},
	workbox: {
		globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg}"], // 使用更具體的模式
		runtimeCaching: [
			{
				urlPattern: ({ url }) => {
					return url.pathname.startsWith("/api/");
				},
				handler: "CacheFirst", // 意指優先使用 cache 的資產
				options: {
					cacheName: "my-cache",
					cacheableResponse: {
						statuses: [0, 200],
					},
				},
			},
			{
				urlPattern: ({ request }) => request.mode === "navigate",
				handler: "NetworkFirst",
				options: {
					cacheName: "pages-cache",
					cacheableResponse: {
						statuses: [200],
					},
				},
			},
			{
				urlPattern: /\.(?:js|css|woff2?|ttf|otf)$/i,
				handler: "StaleWhileRevalidate",
				options: {
					cacheName: "static-resources",
				},
			},
			{
				urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
				handler: "CacheFirst",
				options: {
					cacheName: "images",
					expiration: {
						maxEntries: 60,
						maxAgeSeconds: 30 * 24 * 60 * 60, // 30 天
					},
				},
			},
		],
	},
	manifest: {
		name: "表單記錄",
		short_name: "表單記錄",
		description: "表單記錄",
		start_url: "/pwa-react-practice/", // 修改為與 base 一致
		scope: "/pwa-react-practice/", // 明確設定 scope
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#4285f4",
		orientation: "portrait",
		icons: [
			{
				src: "/pwa-react-practice/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/pwa-react-practice/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/pwa-react-practice/maskable_icon.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	},
};

// https://vite.dev/config/
export default defineConfig({
	base: "/pwa-react-practice/",
	plugins: [react(), VitePWA(pwaConfig)],
});
