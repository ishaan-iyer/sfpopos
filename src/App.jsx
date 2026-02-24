import Title from './Title';
import './App.css'
import Footer from "./Footer";

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
