/**
  POLICY = prefix based configuration
 * NO filenames here
 * ONLY category prefixes
 */
export const CONTEXT_POLICY = {
    minimal: [
        "constraints-",
    ],
    normal: [
        "constraints-",
        "regressions-",
    ],
    deep: [
        "constraints-",
        "regressions-",
        "incidents-",
        "rejected_fixes-",
    ],
};
export const DEFAULT_CONTEXT_LEVEL = "normal";
export function isValidContextLevel(level) {
    return level === "minimal" || level === "normal" || level === "deep";
}
