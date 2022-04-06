export function toUTC(date: string): string {
  try {
    const d = new Date(date);
    return `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDay()} at ${d.getUTCHours()}:${d.getUTCMinutes()} UTC`;
  } catch {
    return date;
  }
}
