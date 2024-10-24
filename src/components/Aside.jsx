import { useState, useRef } from 'react';
import IconBadge from '../components/IconBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { DocumentsAside } from './DocumentsAside';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import IndicatorsManager from './OverlayMenuIndicadores';
import { getIndicatorById } from './indicatorsData';

const Aside = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [width, setWidth] = useState(350);
  const asideRef = useRef(null);
  const processoNumber = '10010.000037/0915-24';
  const [copied, setCopied] = useState(false);
  const [selectedIndicators, setSelectedIndicators] = useState([]);

  const MIN_WIDTH = 330;
  const MAX_WIDTH = 800;

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const startResizing = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', resizeAside);
    document.addEventListener('mouseup', stopResizing);
  };

  const resizeAside = (e) => {
    const newWidth = e.clientX - asideRef.current.getBoundingClientRect().left;
    if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
      setWidth(newWidth);
    }
  };

  const stopResizing = () => {
    document.removeEventListener('mousemove', resizeAside);
    document.removeEventListener('mouseup', stopResizing);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(processoNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <aside 
      ref={asideRef} 
      style={{ width }} 
      className="bg-white shadow-lg py-4 px-5 flex flex-col h-screen relative" 
    >
      <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-auto">
        Lote: 
        <a className="ms-1 font-semibold hover:underline" href="/">Nome do lote</a>
      </span>
      
      <h2 className="font-semibold mt-4 uppercase text-xs">Processo</h2>
      
      <div className="flex items-center justify-between mr-auto">
        <div className="flex items-center">
          <button onClick={toggleFavorite} className="mr-2">
            <FontAwesomeIcon 
              icon={isFavorited ? faStarSolid : faStarRegular} 
              color={isFavorited ? 'gold' : '#2672DE'}
              className="cursor-pointer"
            />
          </button>
          <span className="text-gray-700 text-md">{processoNumber}</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={copyToClipboard}
            className={`p-1 ml-0.5 -mt-0.5 ${copied ? 'text-green-600 py-2' : 'text-[#2672DE]'} `}
          >
            {copied ? (
              <FontAwesomeIcon icon={faCheck} />
            ) : (
              <FontAwesomeIcon icon={faCopy} />
            )}
          </button>
        </div>
      </div>

      <IndicatorsManager 
        selectedIndicators={selectedIndicators} 
        setselectedIndicators={setSelectedIndicators} 
      />
      
      <div className="flex flex-wrap gap-2 py-2 mb-4">
        {selectedIndicators.length > 0 ? (
          selectedIndicators.map((id) => {
            const indicator = getIndicatorById(id);
            if (!indicator) return null;
            
            return (
              <IconBadge
                key={indicator.id}
                text={indicator.status}
                icon={<FontAwesomeIcon icon={indicator.icon} />}
                color={indicator.color}
              />
            );
          })
        ) : (
          <span className="text-gray-500 text-sm">Nenhum indicador selecionado</span>
        )}
      </div>

      <DocumentsAside />

      <div className="mt-4 relative flex">
        <FontAwesomeIcon 
          icon={faUserAlt} 
          className="text-[#1351B4] me-2 mt-1" 
        />
        <div>
          <p>Joana Nogueira Martins</p>
          <p className="text-xs font-light">123.456.789-01</p>
        </div>
      </div>

      <div 
        className="absolute right-[6.5px] top-1/2 transform -translate-y-1/2 cursor-ew-resize" 
        onMouseDown={startResizing}
      >
        <FontAwesomeIcon icon={faGripLinesVertical} className="text-[#D9D9D9]" />
      </div>

      <div 
        onMouseDown={startResizing} 
        className="absolute right-0 top-0 h-full w-1 cursor-ew-resize" 
        style={{ backgroundColor: 'rgba(255,255,255,1)' }}
      />
    </aside>
  );
};

export default Aside;