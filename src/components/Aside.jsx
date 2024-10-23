import { useState, useRef } from 'react';
import IconBadge from '../components/IconBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClipboard, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'; // Import the magnifying glass icon
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { DocumentsAside } from './DocumentsAside';

const Aside = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [width, setWidth] = useState(288); // Initial width (72 * 4 for tailwind)
  const asideRef = useRef(null); // Ref for the aside element
  const processoNumber = '10010.000037/0915-24'; // Example processo number

  const MIN_WIDTH = 200; // Minimum width
  const MAX_WIDTH = 400; // Maximum width

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(processoNumber).then(() => {
      alert('Processo number copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy: ', error);
    });
  };

  // Mouse down event handler to start resizing
  const startResizing = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', resizeAside);
    document.addEventListener('mouseup', stopResizing);
  };

  // Resizing function
  const resizeAside = (e) => {
    const newWidth = e.clientX - asideRef.current.getBoundingClientRect().left;

    // Ensure the new width is within the min and max limits
    if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
      setWidth(newWidth);
    }
  };

  // Stop resizing on mouse up
  const stopResizing = () => {
    document.removeEventListener('mousemove', resizeAside);
    document.removeEventListener('mouseup', stopResizing);
  };

  return (
    <aside 
      ref={asideRef} 
      style={{ width }} 
      className="bg-white  shadow-lg p-4 flex flex-col h-screen relative" 
    >
      {/* Title for "Processo" */}
      <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-auto">
        Lote 
        <a className="ms-1 underline" href="/">Nome do lote</a>
      </span>
      <h2 className="font-semibold mt-4 mb-1 uppercase text-xs">Processo</h2>
      <div className="flex items-center justify-between mr-auto">
        <div className="flex items-center">
          <button onClick={toggleFavorite} className="mr-2">
            <FontAwesomeIcon 
              icon={faStar} 
              color={isFavorited ? 'gold' : '#3D4551'}
              className="cursor-pointer"
            />
          </button>
          <span className="text-gray-700 text-md">{processoNumber}</span>
        </div>
        <div className="flex items-center">
          <button onClick={copyToClipboard} className="p-1 ml-1.5 text-gray-700 hover:text-blue-500">
            <FontAwesomeIcon icon={faClipboard} />
          </button>
        </div>
      </div>
      <div className="text-xs flex justify-end items-center text-[#919191] mt-4">Gerenciar Indicadores<i className="ms-1 fa-solid fa-cog"></i></div>
      <div className="flex flex-wrap gap-2 py-2 mb-4">
        <IconBadge text="Favorite" icon={<FontAwesomeIcon icon={faStar} />} color="yellow" />
        <IconBadge text="Clipboard" icon={<FontAwesomeIcon icon={faClipboard} />} color="blue" />
        <IconBadge text="Alert" icon={<FontAwesomeIcon icon={faStar} />} color="red" />
        <IconBadge text="Process" icon={<FontAwesomeIcon icon={faClipboard} />} color="green" />
      </div>

      {/* Miolo */}
      <DocumentsAside />

      {/* User */}
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

      {/* Grip lines icon on the right side */}
      <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 cursor-ew-resize" onMouseDown={startResizing}>
        <FontAwesomeIcon icon={faGripLinesVertical} className="text-gray-600" />
      </div>

      {/* Resizer handle */}
      <div 
        onMouseDown={startResizing} 
        className="absolute right-0 top-0 h-full w-1 cursor-ew-resize" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} // Optional: Change the color for visibility
      />
    </aside>
  );
};

export default Aside;
