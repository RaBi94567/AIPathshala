import React, { useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import Login from "./Login";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { address } = useGlobalContext();

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { sender: "user", text }]);
    setInput("");

    try {
        // getting response from ollama 
      const res = await fetch("http://127.0.0.1:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "deepscaler", prompt: text, stream: false }),
      });
      const data = await res.json();
      const reply = (data.response || "");
      setMessages((m) => [...m, { sender: "bot", text: reply }]);
    } catch (e) {
      console.error(e);
    }
  };

  if (!address) return <Login />;

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="text-center font-bold text-lg mb-2">AIPathshala Chatbot</div>
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`p-2 rounded max-w-xs ${m.sender === "user" ? "bg-blue-500 text-white" : "bg-white border"}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          className="flex-1 border px-3 py-2 rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        <button className="bg-blue-600 text-white px-4 rounded-r" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
