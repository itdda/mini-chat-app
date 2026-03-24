import React, { useState, useEffect, useRef } from 'react';
import './MiniChatRoom.css';

function MiniChatRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080/ws-chat'); // 순수 웹소켓 URL

    ws.current.onmessage = (event) => {
      setMessages(prev => [...prev, { sender: 'other', content: event.data }]);
    };

    ws.current.onopen = () => console.log('웹소켓 연결됨');
    ws.current.onclose = () => console.log('웹소켓 종료');

    return () => ws.current.close();
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "me", content: input };

    // 1. 내가 보낸 메시지 추가
    setMessages((prev) => [...prev, userMessage]);

    // 2. 자동 응답 조건
    let botReply = "";

    if (input.includes("안녕")) {
      botReply = "안녕하세요 😊";
    } else if (input.includes("뭐해")) {
      botReply = "채팅 기다리고 있었어요!";
    } else {
      botReply = "무슨 말인지 잘 모르겠어요 😢";
    }

    // 3. 약간의 딜레이 주면 더 자연스러움
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", content: botReply },
      ]);
    }, 500);

    // 4. 입력창 초기화
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <h2>미니 채팅 룸</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender === 'me' ? 'my-message' : 'other-message'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={handleKeyPress} />
        <button onClick={handleSend}>전송</button>
      </div>
    </div>
  );
}

export default MiniChatRoom;
