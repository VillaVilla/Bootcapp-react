import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import { sp } from "@pnp/sp/presets/all";

function App() {
  const [items, setItems] = useState<any[]>([]);

  const getListItems = useCallback(async () => {
    try {
      const items: any[] = await sp.web.lists.getByTitle('Personas').select('Title').items.get();
      setItems(items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getListItems();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map((x, index) => <li key={`key-${index}`}>{x.Title}</li>)}
        </ul>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
