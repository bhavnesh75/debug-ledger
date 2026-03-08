import fs from "fs";
import path from "path";
/**
 * Absolute path to debug_ledger folder
 * (server.ts થી run થાય ત્યારે correct resolve થાય)
 */
const LEDGER_DIR = path.resolve(process.cwd(), "debug_ledger");
/**
 * B1 — List all ledger files
 * ONLY discovery logic (no parsing, no filtering)
 */
export function listLedgerFiles() {
    // check folder exists
    if (!fs.existsSync(LEDGER_DIR)) {
        return [];
    }
    const files = fs.readdirSync(LEDGER_DIR);
    // only markdown files
    const ledgerFiles = files
        .filter((file) => file.endsWith(".md") && file !== "README.md")
        .map((file) => ({
        name: file,
        path: path.join(LEDGER_DIR, file),
    }));
    return ledgerFiles;
}
