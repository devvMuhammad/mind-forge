export function convertToPKT(date: string | Date): Date {
  // Parse the date if it's a string
  const utcDate = typeof date === "string" ? new Date(date) : date;

  // Add 5 hours (5 * 60 * 60 * 1000 milliseconds) to the UTC date
  const pktTime = new Date(utcDate.getTime() + 5 * 60 * 60 * 1000);

  return pktTime;
}

export function convertToUTC(date: string | Date): Date {
  // Parse the date if it's a string
  const pktDate = typeof date === "string" ? new Date(date) : date;

  // Subtract 5 hours (5 * 60 * 60 * 1000 milliseconds) from the PKT date
  const utcTime = new Date(pktDate.getTime() - 5 * 60 * 60 * 1000);

  return utcTime;
}
