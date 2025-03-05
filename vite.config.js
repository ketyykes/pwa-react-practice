import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// const pwaConfig = {
// 	registerType: "autoUpdate",
// 	includeAssets: ["**/*"], // 意指 auto update 時，需要包含的資產
// 	devOptions: {
// 		enabled: true,
// 	},
// 	workbox: {
// 		globPatterns: ["**/*"], // 意指儲存到瀏覽器 cache 的資產
// 		runtimeCaching: [
// 			{
// 				urlPattern: ({ url }) => {
// 					return url.pathname.startsWith("/api/");
// 				},
// 				handler: "CacheFirst", // 意指優先使用 cache 的資產
// 				options: {
// 					cacheName: "my-cache",
// 					cacheableResponse: {
// 						statuses: [0, 200],
// 					},
// 				},
// 			},
// 		],
// 	},
// 	manifest: {
// 		name: "表單記錄",
// 		short_name: "表單記錄",
// 		description: "表單記錄",
// 		start_url: "/",
// 		display: "standalone",
// 		background_color: "#ffffff",
// 		theme_color: "#4285f4",
// 		orientation: "portrait",
// 		icons: [
// 			{
// 				src: "/icon-192x192.png",
// 				sizes: "192x192",
// 				type: "image/png",
// 				purpose: "any",
// 			},
// 			{
// 				src: "/icon-512x512.png",
// 				sizes: "512x512",
// 				type: "image/png",
// 				purpose: "any",
// 			},
// 			{
// 				src: "/maskable_icon.png",
// 				sizes: "512x512",
// 				type: "image/png",
// 				purpose: "maskable",
// 			},
// 		],
// 	},
// };

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// , VitePWA(pwaConfig)
	],
});
