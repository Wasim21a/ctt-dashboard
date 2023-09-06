import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PChart from './Components/PChart';
import Layout from './Components/Layout';
import FinalPanelView from './Components/FinalPanelView';
import Particle from './Components/Particle';

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" exact element={<Layout />}>
              <Route path="/" exact element={<FinalPanelView />} />
              <Route path="/about" element={<PChart />} />
              <Route path="/contact" element={<Particle />} />
            </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
