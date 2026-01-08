import { useState } from "react";
import "./WindowChat.css";

export default function WindowChat({ selectedUser }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Здравствуйте! Как дела?",
      sender: "user",
      timestamp: "10:30"
    },
    {
      id: 2,
      text: "Здравствуйте! Все отлично, спасибо!",
      sender: "me",
      timestamp: "10:32"
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: message,
          sender: "me",
          timestamp: new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit"
          })
        }
      ]);
      setMessage("");
    }
  };

  return (
    <div className="window-chat-block">
      <div className="window-chat-header">
        <div className="chat-header-user">
          <div className="chat-header-avatar">
            {selectedUser.avatar ? (
              <img src={selectedUser.avatar} alt={selectedUser.name} />
            ) : (
              <div className="chat-header-avatar-placeholder">
                {selectedUser.name.split(" ").map(n => n[0]).join("")}
              </div>
            )}
          </div>
          <div className="chat-header-info">
            <h3>{selectedUser.name}</h3>
            <p>{selectedUser.email}</p>
          </div>
        </div>
      </div>

      <div className="window-chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-item ${msg.sender === "me" ? "message-me" : "message-user"}`}
          >
            <div className="message-content">
              <p>{msg.text}</p>
              <span className="message-time">{msg.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      <form className="window-chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Введите сообщение..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}