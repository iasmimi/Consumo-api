import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [duck, setDuck] = useState({ url: 'https://random-d.uk/api/1.jpg' });
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentFact, setCurrentFact] = useState('');

  const duckFacts = [
    "Habitat: Patos vivem em lagos, rios e pântanos.",
    "Alimentação: Adoram sementes e pequenos peixes.",
    "Curiosidade: Suas penas são impermeáveis!",
    "Comportamento: Vivem em bandos divertidos.",
    "Natação: São excelentes nadadores desde filhotes."
  ];

  const fetchDuck = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://random-d.uk/api/v2/random');
      setDuck(response.data);
      setCurrentFact(duckFacts[Math.floor(Math.random() * duckFacts.length)]);
      setCount(prev => prev + 1);
      new Audio('https://www.myinstants.com/media/sounds/quack.mp3').play().catch(() => {});
    }catch {
        // Fallback com imagem aleatória entre 1-108 (que sabemos que existem)
        const randomImage = Math.floor(Math.random() * 108) + 1;
        setDuck({
          url: `https://random-d.uk/api/${randomImage}.jpg`
        });
        setCurrentFact(duckFacts[Math.floor(Math.random() * duckFacts.length)]);
      }
  };

  useEffect(() => {
    fetchDuck();
    setCurrentFact(duckFacts[Math.floor(Math.random() * duckFacts.length)]);
  }, []);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className="app">
      <header>
        <div className="title-container">
          <h1>🦆 Pato Fofo</h1>
          <div className="counter">Patos vistos: {count}</div>
        </div>
      </header>
      
      <main>
        <div className="duck-card">
          <div className="image-container">
            <img 
              src={duck.url} 
              alt="Pato aleatório" 
              className="duck-image"
              onError={(e) => {
                e.target.src = 'https://random-d.uk/api/1.jpg';
              }}
            />
            {loading && <div className="loader"></div>}
          </div>
          
          <div className="info-box">
            <p className="duck-fact">{currentFact}</p>
          </div>
          
          <div className="button-group">
            <button onClick={fetchDuck} className="new-duck-btn">
              Novo Pato
            </button>
            <button onClick={handleLike} className="like-btn">
              ❤️ {likes}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;