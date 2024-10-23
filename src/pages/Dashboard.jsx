import { useState } from 'react';
import Dashboard from '../components/DashboardComponent'; // Adjust the path if necessary
import PanelManager from '../components/OverlayMenuPaineis';
import Aside from '../components/Aside';
import Nav from '../components/Nav';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden h-svh">
      <Aside/>
      <div className='w-full flex flex-col align-center'>
        <Nav />
        <div className='overflow-y-auto p-6'>
          <PanelManager selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
          <Dashboard selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </div>
        
      </div>
      
    </div>
  );
};

export default App;
