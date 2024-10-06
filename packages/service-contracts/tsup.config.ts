import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		users: "src/users/index.ts",
	},
	outDir: "dist",
	format: ["cjs", "esm"],
	dts: true,
	minify: true,
	clean: true,
});
