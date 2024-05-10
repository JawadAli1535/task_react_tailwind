import { useState } from 'react';
import UserProfile from './components/userProfile';
import Posts from './components/posts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[70%] h-auto flex items-center flex-col justify-center mx-auto border my-28">
      <UserProfile />
      <Posts />
    </div>
  );
}

export default App;
