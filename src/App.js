import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App(props = {}) { // function component + class component -> react hooks
  const [name, setName] = useState('example')
  const [number, setNumber] = useState(0)

  // class component -> state kho hieu
  // undefined / null

  useEffect(() => {
    setInterval(() => {
      setName(name)
    }, 1000)
  }, [name])

  useEffect(() => {
    setNumber(number + 1)
  }, [])

  return (
    <>
      <div className="App">
        <header className="App-header">
          { name }
          <br />
          { number }
          <input />
          <br />
          { props.name }
        </header>
      </div>
    </>
  );
}

function App2() {
  return <></>
}

export { App, App2 };

/*



*/




