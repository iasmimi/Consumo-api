import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [duck, setDuck] = useState({ url: 'https://random-d.uk/api/1.jpg' });
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(false);
  const [duckInfo, setDuckInfo] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false);

  const duckFacts = [
    {
      habitat: "Lagos, rios e pântanos",
      alimentacao: "Sementes e pequenos peixes",
      natacao: "Excelentes nadadores desde filhotes"
    },
    {
      habitat: "Áreas alagadas e lagunas",
      alimentacao: "Plantas aquáticas e insetos",
      natacao: "Usam os pés como remos"
    },
    {
      habitat: "Parques urbanos com lagos",
      alimentacao: "Grãos e pequenos crustáceos",
      natacao: "Flutuam facilmente por causa da gordura"
    },
    {
      habitat: "Estuários e manguezais",
      alimentacao: "Peixes pequenos e moluscos",
      natacao: "Mergulham para buscar alimento"
    }
  ];

  const fetchDuck = async () => {
    setLoading(true);
    setImageLoaded(false);
    try {
      const response = await axios.get('https://random-d.uk/api/v2/random');
      setDuck(response.data);
      const randomInfo = duckFacts[Math.floor(Math.random() * duckFacts.length)];
      setDuckInfo(randomInfo);
      setCount(prev => prev + 1);
      new Audio('https://www.myinstants.com/media/sounds/quack.mp3').play().catch(() => {});
    } catch {
      const randomImage = Math.floor(Math.random() * 108) + 1;
      setDuck({
        url: `https://random-d.uk/api/${randomImage}.jpg`
      });
      const randomInfo = duckFacts[Math.floor(Math.random() * duckFacts.length)];
      setDuckInfo(randomInfo);
    }
  };

  useEffect(() => {
    fetchDuck();
    const randomInfo = duckFacts[Math.floor(Math.random() * duckFacts.length)];
    setDuckInfo(randomInfo);
  }, []);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className="app">
      <header>
        <div className="title-container">
          <h1>🦆 Pato Fofo</h1>
          <p>Descubra fatos interessantes sobre diferentes patos!</p>
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
              onLoad={() => {
                setImageLoaded(true);
                setLoading(false);
              }}
              onError={(e) => {
                e.target.src = 'https://random-d.uk/api/1.jpg';
                setImageLoaded(true);
                setLoading(false);
              }}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
            {loading && <div className="loader"></div>}
          </div>
          
          <div className="info-box">
            <h3>Informações sobre o pato:</h3>
            <ul className="duck-info-list">
              <li><strong>Habitat:</strong> {duckInfo.habitat}</li>
              <li><strong>Alimentação:</strong> {duckInfo.alimentacao}</li>
              <li><strong>Natação:</strong> {duckInfo.natacao}</li>
            </ul>
          </div>
          
          <div className="button-group">
            <button 
              onClick={fetchDuck} 
              className="new-duck-btn"
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Novo Pato'}
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