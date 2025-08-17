import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/chat">
        <button>미니 채팅 입장하기</button>
      </Link>
    </div>
  );
}

export default Home;