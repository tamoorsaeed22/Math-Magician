import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import DisplayQuote from './components/FetchQuote';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<DisplayQuote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
