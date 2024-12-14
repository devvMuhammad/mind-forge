export function isValidObjectURL(url: string) {
  try {
    const parsedURL = new URL(url);
    return parsedURL.protocol === "blob:";
  } catch (e) {
    return false;
  }
}
