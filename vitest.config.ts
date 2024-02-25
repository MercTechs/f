import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ["src/*.ts", "src/internal/*.ts"],
      exclude: ["src/index.ts", "src/_*.ts"],
    },
  },
});
