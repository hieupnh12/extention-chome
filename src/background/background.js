chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "PING") {
    console.log("Received PING from popup");
  }
});
