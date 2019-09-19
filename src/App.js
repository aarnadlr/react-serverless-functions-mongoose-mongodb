import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getServer() {
      const res = await fetch('/api/server');
      const data = await res.json();
      setData(data);
    }
    getServer();
  }, []);
  return (
    <main>
      <h1>11Create React App + Go API</h1>
      <p>{data ? JSON.stringify(data) : 'Loading data...'}</p>
      <h2>
        Deployed with{' '}
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          ZEIT Now
        </a>
        !
      </h2>
    </main>
  );
}

export default App;
