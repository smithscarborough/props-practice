
import './App.css';
import Effects from './components/Effects';
import Rig from './components/Rig';

function App() {
  const guitarRigs = [
    {
      ID: '0',
      artist: 'Kenny Wayne Shepherd',
      guitar: 'Fender Stratocaster',
      amplifier: 'Fender Vibro-King',
      effects: {
        overdrive: 'AnalogMan King of Tone',
        reverb: 'Electro-Harmonix Holy Grail',
      },
    },
    {
      ID: '1',
      artist: 'Christone "Kingfish" Ingram',
      guitar: '2018 Fender Player Series Stratocaster',
      amplifier: 'Peavey Delta Blues 210',
      effects: {
        delay: 'Way Huge Aqua-Puss Analog Delay',
        overdrive: 'MXR Sugar Drive',
      },
    },
    {
      ID: '2',
      artist: 'Brian May',
      guitar: '1964 Red Special (custom)',
      amplifier: 'Vox AC30',
      delay: 'TC Electronic G-Major 2',
      effects: {
        trebleBooster: 'Fryer Treble Booster',
      },
    },
    {
      ID: '3',
      artist: 'Stevie Ray Vaughan',
      guitar: 'Mid-Sixties Fender Stratocaster',
      amplifier: 'mid-60s Fender Super Reverb',
      effects: {
        overdrive: 'Ibanez TS9',
        wah: 'Vox V846',
      },
    },
  ]


  return (
    <div className="App">
      <header className="App-header">
        <h1>Guitar Rig Rundowns</h1>
        {
          guitarRigs.map((rig) => {
            return <Rig key={rig.ID} {...rig} />
          })
        }
      </header>
    </div>
  );
}

export default App;
