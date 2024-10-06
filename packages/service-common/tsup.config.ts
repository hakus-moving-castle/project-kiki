import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		constants: "src/constants.ts",
	},
	outDir: "dist",
	format: ["cjs", "esm"],
	dts: true,
	minify: true,
	clean: true,
});
