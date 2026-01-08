import "./UserList.css";

export default function UserList({users, onUserSelect, selectedUserId}) {
    return (
        <>
            <div className="user-list-block">
                <div className="user-list-inner">
                    <div className="search-block">
                        <input type="text" placeholder="Поиск по имени..."></input>
                    </div>
                    <div className="users-block">
                        {users.map((user) => (
                            <div 
                                key={user.id} 
                                className={`user-item ${selectedUserId === user.id ? 'active' : ''}`}
                                onClick={() => onUserSelect(user)}
                            >
                                <div className="user-avatar">
                                    {user.avatar ? (
                                        <img src={user.avatar} alt={`${user.name} avatar`} />
                                    ) : (
                                        <div className="user-avatar-placeholder">
                                            {user.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    )}
                                </div>
                                <div className="user-info">
                                    <p className="user-name">{user.name}</p>
                                    <p className="user-email">{user.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}