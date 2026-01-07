import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import TasksPage from './pages/TaskPage/TaskPage'
import ClientsPage from './pages/ClientPage/ClientPage'
import AnalyticsPage from './pages/AnalyticsPage/AnalyticsPage'
import ChatPage from './pages/ChatPage/ChatPage'
import Header from './components/Header/Header'
import './App.css'


function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/clients' element={<ClientsPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/messages' element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
