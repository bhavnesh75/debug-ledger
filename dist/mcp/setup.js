#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export function setupIfNeeded() {
    const projectDir = process.cwd();
    const ledgerDir = path.join(projectDir, "debug_ledger");
    if (fs.existsSync(ledgerDir))
        return;
    // npm package ની debug_ledger/ folder copy કરો
    const sourceDir = path.join(__dirname, "../../debug_ledger");
    fs.mkdirSync(ledgerDir, { recursive: true });
    const files = fs.readdirSync(sourceDir);
    files.forEach((file) => {
        if (file.endsWith(".md")) {
            fs.copyFileSync(path.join(sourceDir, file), path.join(ledgerDir, file));
        }
    });
    console.log("debug_ledger/ created with all files");
}
