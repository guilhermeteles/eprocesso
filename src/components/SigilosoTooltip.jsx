// SigilosoTooltip.js
import { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import usePrevious from './usePrevious'; // Ensure this path is correct
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SigilosoTooltip = ({ showFixedTooltip, onClose, initialPosition }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const prevShowFixedTooltip = usePrevious(showFixedTooltip); // Track previous state
  const [copied, setCopied] = useState(false);

  const handleCopy = (text, event) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setClickPosition({ x: event.clientX, y: event.clientY });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };
  
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
        let newX = e.clientX - dragStart.x;
        let newY = e.clientY - dragStart.y;

        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Get tooltip dimensions
        const tooltipWidth = 350; // As defined in className
        const tooltipHeight = 296; // Adjust based on content

        // Prevent tooltip from moving off the left/right edges
        newX = Math.max(0, Math.min(newX, viewportWidth - tooltipWidth));

        // Prevent tooltip from moving off the top/bottom edges
        newY = Math.max(0, Math.min(newY, viewportHeight - tooltipHeight));

        setPosition({
          x: newX,
          y: newY,
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

  useLayoutEffect(() => {
    // Set position before the browser paints
    if (showFixedTooltip && !prevShowFixedTooltip) {
      setPosition({
        x: initialPosition.x,
        y: initialPosition.y,
      });
    }
  }, [showFixedTooltip, prevShowFixedTooltip, initialPosition]);

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
      className="absolute -left-2 top-full mt-3 bg-gray-800 text-white p-4 rounded-md shadow-lg flex flex-col gap-2 w-[350px] z-50"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-[16px] leading-[22px]">Informações de Sigilo</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose(); // Close only when `X` button is clicked
          }}
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Close Tooltip"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>

      <div className="flex gap-2">
        <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2 grow" onClick={(e) => handleCopy('Básico', e)}>
          <p className="font-bold text-[12px]">Nível do Sigilo Interno</p>
          <p className="text-[16px] leading-[22px]" >Básico</p>
        </div>
        <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2 grow" onClick={(e) => handleCopy('Básico', e)}>
          <p className="font-bold text-[12px]">Nível do Sigilo Externo</p>
          <p className="text-[16px] leading-[22px]">Básico</p>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2" onClick={(e) => handleCopy('Controle Interno', e)}>
        <p className="font-bold text-[12px]">Motivo do Sigilo</p>
        <p className="text-[16px] leading-[22px]">Controle Interno</p>
      </div>

      <div className="flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2">
        <p className="font-bold text-[12px]">Norma Regulamentadora</p>
        <p className="text-[16px] leading-[22px]">
  <a
    href="https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10180.htm"
    target="_blank"
    rel="noopener noreferrer"
    className=" underline"
  >
    Lei nº 10.180/2011 (Art. 26, §3º)
  </a>
  ,&nbsp;
  <a
    href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12527.htm"
    target="_blank"
    rel="noopener noreferrer"
    className=" underline"
  >
    Lei nº 12.527/2011 (Art. 22)
  </a>
  .
</p>

      </div>
      {/* Copied Message */}
      {copied && (
          <div
            className=" bg-green-600 text-white rounded-full px-3 py-1 flex items-center gap-1"
            style={{
              top: clickPosition.y + 0,
              left: clickPosition.x - 290,
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
            Copiado
          </div>
        )}
    </div>,
    portalRoot
  );
};

// PropTypes for validation
SigilosoTooltip.propTypes = {
  showFixedTooltip: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialPosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default SigilosoTooltip;
