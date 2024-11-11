import Dashboard from '../components/DashboardComponent'; // Adjust the path if necessary
import Aside from '../components/Aside';
import Nav from '../components/Nav';

const App = () => {

  return (
    <div className="min-h-screen flex bg-[#F7F9FA] overflow-hidden h-svh">
      <Aside/>
      <div className='w-full flex flex-col align-center container'>
        <Nav />
        
          <Dashboard/>
      
        
      </div>
      
    </div>
  );
};

export default App;
