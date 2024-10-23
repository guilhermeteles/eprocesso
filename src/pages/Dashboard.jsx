// src/pages/Dashboard.jsx
import Nav from '../components/Nav';
import Aside from '../components/Aside';
import PanelManager from '../components/OverlayMenuPaineis';

const Dashboard = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">
          {/* Sidebar */}
          <Aside/>
    
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Top Menu */}
            <Nav />
            <PanelManager/>
            
      
            {/* Main Content */}
            <div className="px-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold">Widget 1</h2>
                  <p className="text-gray-600">This is some content for Widget 1.</p>
                </div>
    
                {/* Card 2 */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold">Widget 2</h2>
                  <p className="text-gray-600">This is some content for Widget 2.</p>
                </div>
    
                {/* Card 3 */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold">Widget 3</h2>
                  <p className="text-gray-600">This is some content for Widget 3.</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold">Widget 4</h2>
                  <p className="text-gray-600">This is some content for Widget 2.</p>
                </div>
    
                {/* Card 5 */}
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h2 className="text-xl font-semibold">Widget 5</h2>
                  <p className="text-gray-600">This is some content for Widget 3.</p>
                </div>
    
                {/* Additional cards or widgets */}
              </div>
            </div>
          </div>
        </div>
      );
  };
  
  export default Dashboard;
  