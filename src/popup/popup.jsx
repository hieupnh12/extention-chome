import { useEffect, useState } from "react";
import { getApiKey } from "../storage";
import "./popup.css";

const canMessageBackground =
  typeof chrome !== "undefined" && Boolean(chrome.runtime?.sendMessage);

function Popup() {
  const [backgroundReady, setBackgroundReady] = useState(
    canMessageBackground ? null : false
  );
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    let cancelled = false;

    getApiKey().then((apiKey) => {
      if (!cancelled) setHasApiKey(apiKey.length > 0);
    });

    if (!canMessageBackground) return undefined;

    chrome.runtime.sendMessage({ type: "PING" }, (response) => {
      if (cancelled) return;
      if (chrome.runtime.lastError || !response?.ok) {
        setBackgroundReady(false);
        return;
      }
      setBackgroundReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="popup">
      <h1>EduNet Assistant</h1>
      <p className={backgroundReady ? "ok" : "pending"}>
        {backgroundReady === null && "Đang kiểm tra service worker…"}
        {backgroundReady === true && "Service worker đang chạy."}
        {backgroundReady === false && "Service worker không phản hồi."}
      </p>
      <p>{hasApiKey ? "Đã lưu API key." : "Chưa lưu API key."}</p>
      <p className="hint">
        Mở một trang web và bấm nút tròn màu hồng ở góc dưới bên phải để dùng
        trợ lý.
      </p>
    </main>
  );
}

export default Popup;
