// SigilosoTooltip.js
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import usePrevious from './usePrevious'; // Import the custom hook

const SigilosoTooltip = ({ showFixedTooltip, onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const prevShowFixedTooltip = usePrevious(showFixedTooltip); // Track previous state

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    // Cleanup listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    // Reset position only when tooltip is initially shown
    if (showFixedTooltip && !prevShowFixedTooltip) {
      setPosition({ x: 0, y: 0 });
    }
  }, [showFixedTooltip, prevShowFixedTooltip]);

  if (!showFixedTooltip) return null;

  // Create a portal root if it doesn't exist
  const portalRoot = document.getElementById('tooltip-root') || (() => {
    const root = document.createElement('div');
    root.id = 'tooltip-root';
    document.body.appendChild(root);
    return root;
  })();

  return ReactDOM.createPortal(
    <div
      className="fixed bg-gray-800 text-white p-3 rounded shadow-lg flex flex-col gap-2 z-50 w-[350px]"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold">Informações de Sigilo</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose(); // Close only when `X` button is clicked
          }}
          className="text-white hover:text-gray-300 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2 grow">
          <p className="font-bold text-xs whitespace-nowrap">Nível do Sigilo Interno</p>
          <p className="text-md">Básico</p>
        </div>
        <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2 grow">
          <p className="font-bold text-xs whitespace-nowrap">Nível do Sigilo Externo</p>
          <p className="text-md">Básico</p>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2">
        <p className="font-bold text-xs whitespace-nowrap">Motivo do Sigilo</p>
        <p className="text-md">Controle Interno</p>
      </div>

      <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2">
        <p className="font-bold text-xs whitespace-nowrap">Norma Regulamentadora</p>
        <p className="text-md">Lei nº 10.180/2011 (Art. 26, §3º), Lei nº 12.527/2011 (Art. 22).</p>
      </div>
    </div>,
    portalRoot
  );
};

// PropTypes for validation
SigilosoTooltip.propTypes = {
  showFixedTooltip: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SigilosoTooltip;
