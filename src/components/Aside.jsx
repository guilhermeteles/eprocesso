import { useState, useRef } from 'react';
import { DocumentsAside } from './DocumentsAside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';


const Aside = () => {

  const [width, setWidth] = useState(400);
  const asideRef = useRef(null);
  const MIN_WIDTH = 400;
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
      className="z-10 bg-white shadow-lg flex flex-col h-screen relative overflow-auto" 
    >
      

      <DocumentsAside />

      

      <div 
        className="absolute top-1/2 right-[20px] cursor-ew-resize flex items-center justify-center w-2" 
        onMouseDown={startResizing}
      >
        <FontAwesomeIcon icon={faGripLinesVertical} className="text-[#D9D9D9] ml-4" />
      </div>

      
    </aside>
  );
};

export default Aside;