import React, { useEffect, useState } from "react";
import { getApiKey, setApiKey } from "../storage";

const ChatPanel = ({ open, onClose }) => {
  const [apiKey, setApiKeyValue] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let cancelled = false;
    getApiKey().then((savedKey) => {
      if (!cancelled && savedKey) setApiKeyValue(savedKey);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSave() {
    const saved = await setApiKey(apiKey.trim());
    setStatus(saved ? "Đã lưu API key." : "Không lưu được API key trong trình này.");
  }

  return (
    <div
      className={`chat-panel ${open ? "open" : ""}`}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <header>
        <span>EduNet Assistant</span>
        <button type="button" onClick={onClose} className="btn btn-close" aria-label="Đóng">
          ✕
        </button>
      </header>

      <div className="card">
        <div className="input-group">
          <div style={{ textAlign: "start", marginBottom: "8px" }}>
            <label htmlFor="apiKey">Nhập API Key của bạn:</label>
          </div>
          <div className="api-key-row">
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(event) => setApiKeyValue(event.target.value)}
              placeholder="sk-ant-api03-xxxxx..."
              autoComplete="off"
            />
            <button type="button" id="saveApiBtn" className="btn btn-primary" onClick={handleSave}>
              Lưu
            </button>
          </div>
          {status ? <p className="form-status">{status}</p> : null}
        </div>
      </div>
      <div className="card-action">
        <div>
          <label>Action:</label>
        </div>
        <div className="group-action">
          <button type="button" id="postAnswerBtn" className="btn btn-action">
            Post answer
          </button>
          <button type="button" id="replyCommentBtn" className="btn btn-action">
            Reply comment
          </button>
          <button type="button" id="gradeGroupBtn" className="btn btn-action">
            Grade group
          </button>
          <button type="button" id="gradePresentationBtn" className="btn btn-action">
            Grade presentation
          </button>
          <button type="button" id="voteCommentBtn" className="btn btn-action">
            Vote comment
          </button>
          <button type="button" id="testApiBtn" className="btn btn-action">
            Test API Key
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="card-action">
        <div>
          <label>Settings:</label>
        </div>
        <div className="group-action">
          <div id="checklist">
            <input type="checkbox" value="1" name="r" id="01" />
            <label htmlFor="01">Bread</label>
            <input type="checkbox" value="2" name="r" id="02" />
            <label htmlFor="02">Cheese</label>
            <input type="checkbox" value="3" name="r" id="03" />
            <label htmlFor="03">Coffee</label>
          </div>
          <button type="button" id="runAllBtn" className="btn btn-action">
            Run all actions
          </button>
          <div className="download-wrap">
            <button type="button" className="button">
              <span>Download</span>
            </button>
          </div>
          <button type="button" id="stopBtn" className="btn btn-action">
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
