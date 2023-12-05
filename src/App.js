import './App.css';
import etsy from './components/etsy';
import Listing from './components/Listing';

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Listing items={etsy}/>
      </div>
    </div>
  );
}

export default App;