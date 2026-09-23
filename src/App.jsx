import Title from './Title';
import Footer from "./Footer";

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="flex min-h-screen flex-col bg-[#4DC9FF] text-[#262626]">
      <Title />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
