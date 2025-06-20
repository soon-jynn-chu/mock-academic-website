import type { NextConfig } from "next";

const path = "/mock-academic-website";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	output: "export",
	basePath: path,
	assetPrefix: path + "/",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
