function hasStorage() {
  return typeof chrome !== "undefined" && Boolean(chrome.storage?.local);
}

export async function getApiKey() {
  if (!hasStorage()) return "";
  const result = await chrome.storage.local.get(["apiKey"]);
  return typeof result.apiKey === "string" ? result.apiKey : "";
}

export async function setApiKey(apiKey) {
  if (!hasStorage()) return false;
  await chrome.storage.local.set({ apiKey });
  return true;
}
