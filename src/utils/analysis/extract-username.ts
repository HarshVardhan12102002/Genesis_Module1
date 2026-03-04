export function extractUsername(input: string) {
  const trimmed = input.trim();

  if (!trimmed) {
    return "";
  }

  if (!trimmed.includes("github.com")) {
    return trimmed.replace(/^@/, "");
  }

  try {
    const url = new URL(trimmed);
    const segments = url.pathname.split("/").filter(Boolean);

    return segments[0] ?? "";
  } catch {
    return "";
  }
}
