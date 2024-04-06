import logo from './logo.svg';
import './App.css';
import Basic2 from './components/Basic2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic2 name="React Hooks" />
      </header>
    </div>
  );
}

export default App;
