import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MiniChatRoom from './components/MiniChatRoom';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
      fetch('https://yoonjin.onrender.com/hello') // 서버 주소, 로컬에서는 보통 http://localhost:8080/hello
        .then((res) => res.text()) // 문자열 받기
        .then((data) => setMessage(data))
        .catch((err) => console.error(err));
    }, []);

  return (
    <>

        <p>{message}</p> {/* 서버에서 받은 문자열 출력 */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<MiniChatRoom />} />
          </Routes>
        </Router>

    </>
  )
}

export default App
