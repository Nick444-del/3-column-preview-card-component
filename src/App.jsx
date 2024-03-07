// import {luxury} from './images/icon-luxury.svg';
// import {sedans} from './images/icon-sedans.svg';
// import {suv} from './images/icon-suvs.svg';
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="card-slot">
          <div className="card sedans">
            {/* <img src={sedans} alt="" srcset="" /> */}
            <h2>SEDANS</h2>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.</p>
            <button>Learn More</button>
          </div>
          <div className="card suvs">
            {/* <img src={suv} alt="" srcset="" /> */}
            <h2>SUVS</h2>
            <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.</p>
            <button>Learn More</button>
          </div>
          <div className="card luxury">
            {/* <img src={luxury} alt="" srcset="" /> */}
            <h2>LUXURY</h2>
            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
