import React, { useState } from "react";
import { useGlobalContext } from "../GlobalContext";
import Login from "./Login";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const { address, setAddress } = useGlobalContext();

  const predefinedResponses = {
    who: "I am an AI chatbot for AIPathshala, a Web3 application. You can ask me any study-related, problem-solving, or reasoning questions, and I am ready to assist you! 😊",
  };

  const checkPredefinedResponse = (text) => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes("who are you") || lowerText.includes("who you are")) {
      return predefinedResponses.who;
    }
    return null;
  };

  const handleSend = async () => {
    setInput("");
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const predefinedResponse = checkPredefinedResponse(input);
    if (predefinedResponse) {
      setMessages((prev) => [...prev, { sender: "bot", text: predefinedResponse }]);
      return;
    }

    setIsTyping(true);
    let fullResponse = "";

    try {
      const response = await fetch("http://127.0.0.1:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "deepscaler",
          prompt: input,
          stream: true,
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      if (!reader) throw new Error("No reader found in response.");

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.trim().split("\n");

        for (const line of lines) {
          if (!line) continue;

          const json = JSON.parse(line);
          fullResponse += json.response || "";
          fullResponse = fullResponse.replace("I'm DeepSeek-R1", "I'm AIPathshala");
          fullResponse = fullResponse.replace("I'm DeepSeek-R1", "I'm AIPathshala");
          fullResponse = fullResponse.replace("created by DeepSeek", "created by AIPathshala");

          const thinkMatch = fullResponse.match(/<think>(.*?)<\/think>/s);
          let thinkText = thinkMatch ? thinkMatch[1].trim() : "";
          let mainText = fullResponse.replace(/<think>.*?<\/think>/s, "").trim();

          setMessages((prev) => {
            const temp = [...prev];
            const last = temp[temp.length - 1];

            if (last && last.sender === "bot") {
              temp[temp.length - 1] = { sender: "bot", text: mainText, think: thinkText };
            } else {
              temp.push({ sender: "bot", text: mainText, think: thinkText });
            }
            return temp;
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setIsTyping(false);
  };

  if (!address) {
    return <Login />;
  }

  return (
    <div className="flex flex-col h-screen p-4 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700">
      <div className="text-center text-white text-lg font-semibold mb-4">
        <p>Welcome to the PathshalaAI chatbot! </p>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-2 mx-auto max-w-7xl w-full">
        {messages.map((msg, index) => (
          <div key={index} className={`flex p-2 rounded-md max-w-7xl ${msg.sender === "user" ? "justify-end" : ""}`}>
            <div
              className={`p-2 rounded-md max-w-[60%] ${
                msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black self-start"
              }`}
            >
              {msg.think && (
                <div className="text-sm bg-red-200 p-2 rounded mb-2 font-mono">
                  <strong><u>Guru is thinking:</u></strong>
                  <pre className="whitespace-pre-wrap">{msg.think}</pre>
                </div>
              )}
              <pre className="whitespace-pre-wrap font-mono">{msg.text}</pre>
            </div>
          </div>
        ))}
        {isTyping && <div className="self-start text-gray-500">Bot is typing...</div>}
      </div>

      <div className="p-5 bg-white sticky bottom-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-md focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
}