import { useState, useRef } from 'react';
import { DocumentsAside } from './DocumentsAside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';


const Aside = () => {

  const [width, setWidth] = useState(350);
  const asideRef = useRef(null);
  const MIN_WIDTH = 330;
  const MAX_WIDTH = 800;

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



  return (
    <aside 
      ref={asideRef} 
      style={{ width }} 
      className="bg-white shadow-lg py-4 px-5 flex flex-col h-screen relative" 
    >
      

      <DocumentsAside />

      

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