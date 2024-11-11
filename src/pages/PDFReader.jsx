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
      <div className='w-full h-svh flex flex-col align-center px-6 relative'>
        <Nav />
        <div className='bg-white mx-8 grow relative overflow-hidden flex'>
          <button
            onClick={handleGoHome}
            className="top-2 right-6 z-50 absolute bg-[#E41D3D20] px-4 pt-0.5 pb-1 border border-[2px] border-[#E41D3D] text-[#E41D3D] rounded-full hover:bg-[#E41D3D33] transition duration-200"
          >
            Fechar <i className="ms-1 fa-solid fa-xmark"></i>
          </button>
          <div className='bg-black w-full grow overflow-auto'>
            <img src={Img1} alt="Description of the image" />
          </div>
        </div>
        <NavDocuments />
      </div>
    </div>
  );
};

export default App;
