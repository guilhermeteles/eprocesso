import { useLocation, useNavigate } from 'react-router-dom';
import Aside from '../components/Aside';
import Nav from '../components/Nav';
import NavDocuments from '../components/NavDocuments';
import Img1 from '/assets/images/tjdft_07038064020178070000_03082017_pages-to-jpg-0001.jpg';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileName } = location.state || 'Exemplo';

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex bg-gray-100">
      <Aside />
      <div className='w-full flex flex-col align-center px-6 relative'>
        <Nav />
        <div className="w-full bg-[#F7F9FA] border mt-20 rounded-t-lg overflow-y-auto h-[calc(100vh-80px)]">
        
          <div className="right-1 w-full">
            <div className="flex justify-end w-full items-center ">
              
              <button 
                onClick={handleGoHome} 
                className="top-28 right-[68px] z-50 absolute bg-[#E41D3D20] px-2 pt-0.5 pb-1 border border-[2px] border-[#E41D3D] text-[#E41D3D] rounded-md hover:bg-[#E41D3D33] transition duration-200"
              >
                Fechar <i className="ms-1 fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <div className="p-4 relative">
          <div className="top-8 left-7 absolute bg-[rgba(255,255,255,.7)] flex items-center px-3 pt-0.5 pb-1 border border-[2px] border-[#ddd] rounded-md">
                <h1 className="me-2">Documento:</h1>
                <span className="font-bold">{fileName}</span>
              </div>
            <img src={Img1} alt="Description of the image" />
          </div>
        </div>
        <NavDocuments />
      </div>
    </div>
  );
};

export default App;
