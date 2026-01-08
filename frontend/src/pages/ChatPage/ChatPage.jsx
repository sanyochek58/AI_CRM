import { useState } from "react";
import UserList from "../../components/UserList/UserList";
import WindowChat from "../../components/WindowChat/WindowChat";
import "./ChatPage.css";
// Демо данные пользователей
const mockUsers = [
  {
    id: 1,
    name: "Иван Петров",
    email: "ivan@example.com",
    avatar: "https://via.placeholder.com/40"
  },
  {
    id: 2,
    name: "Мария Сидорова",
    email: "maria@example.com",
    avatar: "https://via.placeholder.com/40"
  },
  {
    id: 3,
    name: "Алексей Иванов",
    email: "alexey@example.com",
    avatar: "https://via.placeholder.com/40"
  },
  {
    id: 4,
    name: "Елена Козлова",
    email: "elena@example.com",
    avatar: "https://via.placeholder.com/40"
  }
];

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <section className="chat-page-block">
      <div className="chat-page-inner">
        <div className="chat-page-left-column">
          <h2 className="chat-page-title">Чаты с клиентами</h2>
          <UserList
            users={mockUsers}
            onUserSelect={handleUserSelect}
            selectedUserId={selectedUser?.id}
          />
        </div>

        <div className="chat-page-right-column">
          {selectedUser ? (
            <WindowChat selectedUser={selectedUser} />
          ) : (
            <p className="no-user-selected">Выберите пользователя для начала чата.</p>
          )}
        </div>
      </div>
    </section>
  );
}