import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import MemeGenerator from './components/MemeGenerator';

function App() {
  const [memesTemplates, setMemesTemplates] = useState([]);
  useEffect(() => {
    fetch('https://api.memegen.link/templates/').then((x) =>
      x.json().then((response) => setMemesTemplates(response.data.memes)),
    );
  }, []);

  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
