import React from "react";
import "./../css/checklist.css";
import "./../css/buttonDown.css";

const ChatPanel = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={`chat-panel ${open ? "open" : ""}`}>
      <header>
        <span>EduNet Assistant</span>
        <button onClick={onClose} className="btn btn-close">
          ✕
        </button>
      </header>

      <div className="card">
        <div className="input-group">
          <div style={{ textAlign: "start", marginBottom: "8px" }}>
            <label for="apiKey">Nhập API Key của bạn:</label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="password"
              id="apiKey"
              placeholder="sk-ant-api03-xxxxx..."
            ></input>
            <div>
              <button id="saveApiBtn" class="btn btn-primary">
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-action">
        <div>
          <label for="apiKey">Action:</label>
        </div>
        <div class="group-action">
          <button id="testApiBtn" class="btn btn-action">
            Post answer
          </button>
          <button id="testApiBtn" class="btn btn-action">
            Reply comment
          </button>
          <button id="testApiBtn" class="btn btn-action">
            Grand group
          </button>
          <button id="testApiBtn" class="btn btn-action">
            Grand presentation
          </button>
          <button id="testApiBtn" class="btn btn-action">
            Vote comment
          </button>
          <button id="testApiBtn" class="btn btn-action">
            Test API Key
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="card-action">
        <div>
          <label for="apiKey">Settings:</label>
        </div>
        <div class="group-action">
          <div id="checklist">
            <input type="checkbox" value={1} name="r" id="01" />
            <label for="01">Bread</label>
            <input type="checkbox" value={2} name="r" id="02" />
            <label for="02">Cheese</label>
            <input type="checkbox" value={3} name="r" id="03" />
            <label for="03">Coffee</label>
          </div>
          <button id="testApiBtn" class="btn btn-action">
            Run all actions
          </button>
          <div>
<button class="button"><span>Download</span></button>
          </div>
          <button id="testApiBtn" class="btn btn-action">
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
