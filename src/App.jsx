import Title from './Title';
import './App.css'
import Footer from "./Footer";

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Title />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
