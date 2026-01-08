import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import avatarImg from "../../assets/react.svg";
import LogoImg from "../../assets/logo.png";

export default function Header() {
  const name = "username";
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="left-header-item">
          <div className="logo-header">
            <img
              src={LogoImg}
              alt="AI CRM Logo"
            />
          </div>
          <p className="welcome">Welcome to</p>
          <p className="title">AI CRM</p>
        </div>

        <div className="right-header-item">
          <div className="header-widgets">
            <Link 
              to="/messages" 
              className={`widget-item chat-block ${location.pathname === '/messages' ? 'active' : ''}`}
            >
              <div className="chat-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png"
                  alt="chat icon"
                />
              </div>
              <div className="chat-title">
                <p>Message</p>
              </div>
            </Link>

            <Link 
              to="/analytics" 
              className={`widget-item analitycs-block ${location.pathname === '/analytics' ? 'active' : ''}`}
            >
              <div className="analitycs-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992700.png"
                  alt="analitycs icon"
                />
              </div>
              <div className="analitycs-title">
                <p>Analytics</p>
              </div>
            </Link>

            <Link 
              to="/clients" 
              className={`widget-item clients-block ${location.pathname === '/clients' ? 'active' : ''}`}
            >
              <div className="clients-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="clients icon"
                />
              </div>
              <div className="clients-title">
                <p>Clients</p>
              </div>
            </Link>

            <Link 
              to="/tasks" 
              className={`widget-item tasks-block ${location.pathname === '/tasks' ? 'active' : ''}`}
            >
              <div className="tasks-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                  alt="tasks icon"
                />
              </div>
              <div className="tasks-title">
                <p>Tasks</p>
              </div>
            </Link>
          </div>

          <div className="user-block">
            <img className="user-avatar" src={avatarImg} alt="User avatar" />
            <div className="user-name">{name}</div>
          </div>
        </div>
      </div>
    </header>
  );
}