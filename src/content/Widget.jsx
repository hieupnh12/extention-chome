import React, { useState } from "react";
import FloatingButton from "./FloatingButton";
import ChatPanel from "./ChatPanel";

const Widget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FloatingButton open={open} onClick={() => setOpen(!open)} />
      <ChatPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Widget;
