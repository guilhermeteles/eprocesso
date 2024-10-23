import Aside from '../components/Aside';
import Nav from '../components/Nav';
import { useLocation, useNavigate } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function
  const { fileName } = location.state || { fileName: 'Default Document Name' }; // Default value if state is not available

  const handleGoHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Aside />
      <div className='w-full flex flex-col align-center'>
        <Nav />
        <div className='overflow-y-auto p-6'>
        <div className="flex justify-between px-6 mt-16">
        <h1 className="mt-4">Documento: {fileName}</h1>
        <button
          onClick={handleGoHome}
          className="mt-4 px-4 pt-1 pb-1.5 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400 transition duration-200 w-fit"
        >
          Fechar <i className="ms-1 fa-solid fa-xmark"></i>
        </button>
        </div>
        </div>


        
        
      </div>
    </div>
  );
};

export default App;
