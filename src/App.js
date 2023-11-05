import './App.css';
import Home from './pages/Home';
import data from './data.json';

const getRandomItems = (list) => {
  const random = Math.floor(Math.random() * (list.length + 1));
  return list[random]
}

function App() {
  const randomData = [];
  for (let i = 0; i < 5; i++) {
    randomData.push(getRandomItems(data))
  }
  
  return (
    <div className="w-screen flex justify-center">
      <Home data={randomData} />
    </div>
  );
}

export default App;
