import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../dist", import.meta.url));

await Promise.all([
  rm(outputDirectory + "/404.html", { force: true }),
  rm(outputDirectory + "/404", { force: true, recursive: true }),
  rm(outputDirectory + "/_not-found", { force: true, recursive: true }),
]);
