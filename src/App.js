import Listing from './components/Listing/Listing';
import etsy from './etsy.json';
import './App.css';

// const items = JSON.parse(etsy);
function App() {
  return (<Listing items={etsy} />);
}

export default App;
