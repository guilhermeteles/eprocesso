import { useState } from 'react';
import Dashboard from '../components/DashboardComponent'; // Adjust the path if necessary
import PanelManager from '../components/OverlayMenuPaineis';
import Aside from '../components/Aside';
import Nav from '../components/Nav';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Aside/>
      <div className='w-full flex flex-col align-center'>
        <Nav />
        <PanelManager selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        <Dashboard selectedItems={selectedItems} />
        
      </div>
      
    </div>
  );
};

export default App;
