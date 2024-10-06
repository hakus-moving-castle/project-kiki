import { defineConfig } from "tsup";

export default defineConfig({
	entry: {
		common: "src/common/index.ts",
		users: "src/users/index.ts",
	},
	outDir: "dist",
	format: ["cjs", "esm"],
	dts: true,
	minify: true,
	clean: true,
});
