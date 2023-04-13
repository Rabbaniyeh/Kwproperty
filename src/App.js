import './App.css';
import KWNavbar from './components/navbar/navbar';
import { KWHero } from './components/hero/hero';
import KWVideo from './components/video/video';
import KWServices from './components/services/services';
import KWPropertySection from './components/propertysection/propertysection';
import KWFooter from './components/footer/footer';
import KWNumberSection from './components/numbersection/numbersection';

function App() {
  return (
    <div className="App">
        <KWNavbar/>
        <KWHero/>
        <KWVideo/>
        <KWNumberSection/>
        <KWServices/>
        <KWPropertySection/>
        <KWFooter/>
    </div>
  );
}

export default App;
