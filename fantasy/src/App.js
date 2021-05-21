import jujiball from './profile_pics/jujiball.jpg';
import toji from './profile_pics/toji.png';
import gojo from './profile_pics/gojo.jpg';
import nobara from './profile_pics/nobara.jpg';
import megumi from './profile_pics/megumi.png';
import yuji from './profile_pics/yuji.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Culling Game</h1>
        <img src={jujiball} alt="Juju"/>
        <h3>Contestant 1: </h3>
        <img src={toji} alt="Fushiguro"/>
        <h3>Contestant 2: </h3>
        <img src={gojo} alt="Satoru"/>
        <h3>Contestant 3: </h3>
        <img src={nobara} alt="kugisaki"/>
        <h3>Contestant 4: </h3>
        <img src={megumi} alt="son"/>
        <h3>Contestant 5: </h3>
        <img src={yuji} alt="itadori"/>

      </header> 
    </div>
  );
}

export default App;
