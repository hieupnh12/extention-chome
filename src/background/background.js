chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === "PING") {
    console.log("Received PING from popup");
    sendResponse({ ok: true });
  }
});
