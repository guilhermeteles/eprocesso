import { useState } from 'react';
import { IconButton } from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayMenu from './OverlayMenu';
import SigilosoTooltip from './SigilosoTooltip';
import { faFile, faUser, faLock, faShareAlt, faLink, faTrashAlt, faBoxesPacking, faCheck, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
  const [copied, setCopied] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [clickPosition2, setClickPosition2] = useState({ x: 0, y: 0 });
  const [isFilled, setIsFilled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showFixedTooltip, setShowFixedTooltip] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleCopy = (text, event) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setClickPosition({ x: event.clientX, y: event.clientY });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  const toggleStar = (e) => { // Fixed toggleStar to accept event
    setIsFilled((prev) => !prev);
    setShowMessage(true);
    setClickPosition2({ x: e.clientX, y: e.clientY });
    setTimeout(() => setShowMessage(false), 2000);
  };

  const toggleOverlayMenu = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  // Tooltip Toggle with Position Reset
  const handleTooltipToggle = () => {
    setShowFixedTooltip((prev) => !prev);
    setIsHovering(false); // Hide hover tooltip if switching to fixed tooltip
  };

  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.1)] relative'>
      <div className='bg-[#1351B4] w-100 px-8 py-1 pb-2 flex gap-6 text-sm items-center'>
        <div className='flex gap-2'>
          {/* Star Toggle */}
          <div className='relative'>
            <div
              className='bg-[#1A4480] border border-[#1A4480] p-1.5 flex rounded-full text-white items-center cursor-pointer w-fit'
              onClick={toggleStar}
            >
              <FontAwesomeIcon
                icon={isFilled ? faStarSolid : faStarRegular}
                className={isFilled ? 'text-yellow-400' : 'text-white'}
              />
            </div>
            {showMessage && (
              <div
                className="text-nowrap z-50 absolute top-[3px] -left-20 transform -translate-x-1/2 bg-[#1A4480] text-white rounded-full px-4 py-2 text-xs flex items-center align-start gap-1"
                style={{
                  top: clickPosition2.y + 0,
                  left: clickPosition2.x - 250,
                }}
              >
                <FontAwesomeIcon icon={faStarSolid} />
                {isFilled ? 'Processo favorito' : 'Processo não favorito'}
              </div>
            )}
          </div>

          {/* First Item */}
          <div className='flex items-center text-white font-semibold relative'>
            <FontAwesomeIcon icon={faFile} className="me-2" />
            <span onClick={(e) => handleCopy('10090.000003/0419-05', e)} className="cursor-pointer hover:underline">10090.000003/0419-05</span>
          </div>
        </div>

        {/* Second Item */}
        <div className='flex items-center text-white relative'>
          <FontAwesomeIcon icon={faUser} className="me-2" />
          <span onClick={(e) => handleCopy('05136946504', e)} className="cursor-pointer font-semibold mr-2 hover:underline">05136946504</span>
          <span onClick={(e) => handleCopy('UOLIRHEZOWL UVORXRL WV XZIEZOSL', e)} className="cursor-pointer hover:underline">UOLIRHEZOWL UVORXRL WV XZIEZOSL</span>
        </div>

        {/* "Processo Sigiloso" Section with Tooltip */}
        <div
          className="flex items-center text-white relative cursor-pointer hover:underline relative"
          onClick={handleTooltipToggle}
          onMouseEnter={() => !showFixedTooltip && setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="me-2" />
          </div>
          Processo Sigiloso

          {/* Hover Tooltip */}
          {isHovering && !showFixedTooltip && (
            <div className="absolute -left-2 top-full mt-3 bg-gray-800 text-white p-2 rounded-md shadow-lg flex flex-col gap-2 w-[350px]">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Informações de Sigilo</span>

              </div>
              <div className='flex gap-2'>
                <div className='flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2 grow'>
                  <p className='font-bold text-xs whitespace-nowrap'>Nível do Sigilo Interno</p>
                  <p className='text-md'>Básico</p>
                </div>
                <div className='flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2 grow'>
                  <p className='font-bold text-xs whitespace-nowrap'>Nível do Sigilo Externo</p>
                  <p className='text-md'>Básico</p>
                </div>
              </div>
              
              <div className='flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2'>
                <p className='font-bold text-xs whitespace-nowrap'>Motivo do Sigilo</p>
                <p className='text-md'>Controle Interno</p>
              </div>
              <div className='flex flex-col gap-0.5 bg-gray-600 rounded-sm p-2'>
                <p className='font-bold text-xs whitespace-nowrap'>Norma Regulamentadora</p>
                <p className='text-md'>Lei nº 10.180/2011 (Art. 26, §3º), Lei nº 12.527/2011 (Art. 22).</p>
              </div>
            </div>
          )}
        </div>
  
          {/* Draggable Fixed Tooltip */}
          <SigilosoTooltip 
            showFixedTooltip={showFixedTooltip}
            onClose={() => setShowFixedTooltip(false)}
          />
        

        {/* Other Action Buttons */}
        <div className='bg-[#1A4480] py-2 flex rounded-full text-white items-center px-4 gap-3'>
          <FontAwesomeIcon icon={faShareAlt} className='text-orange-500' />
          <FontAwesomeIcon icon={faLink} />
          <FontAwesomeIcon icon={faTrashAlt} />
          <FontAwesomeIcon icon={faBoxesPacking} />
        </div>

        {/* Copied Message */}
        {copied && (
          <div
            className="absolute bg-green-600 text-white rounded-full px-3 py-1 flex items-center gap-1"
            style={{
              top: clickPosition.y + 0,
              left: clickPosition.x - 290,
            }}
          >
            <FontAwesomeIcon icon={faCheck} />
            Copiado
          </div>
        )}
      </div>
      <nav className="flex gap-6 bg-white px-8">
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-400 text-xs my-1 font-medium">Consultas</label>
          <div className="flex gap-1">
            <IconButton
              icon="fa-solid fa-link"
              name="Home"
              textColor='#1A4480'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-file-contract"
              name="Home"
              textColor='#1A4480'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-calendar-days"
              name="Profile"
              textColor='#1A4480'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-info-circle"
              name="Settings"
              textColor='#1A4480'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-user"
              name="Notifications"
              textColor='#1A4480'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-lock"
              name="Messages"
              textColor='#1A4480'
              color='#C4EEEB'
            />
          </div>
        </div>
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-400 text-xs my-1 font-medium">Processo</label>
          <div className="flex gap-1">
            <IconButton
              icon="fa-solid fa-arrow-right"
              name="Home"
              textColor='#1A4480'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-arrow-rotate-right"
              name="Profile"
              textColor='#1A4480'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-arrow-up"
              name="Settings"
              textColor='#1A4480'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-user-group"
              name="Notifications"
              textColor='#1A4480'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-circle-info"
              name="Notifications"
              textColor='#1A4480'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-calendar-days"
              name="Messages"
              textColor='#1A4480'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-ellipsis-vertical"
              name="Messages"
              textColor='#1A4480'
              color='#D4E5FF'
              onClick={toggleOverlayMenu}
            />
          </div>
        </div>
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-400 text-xs my-1 font-medium">Documentos</label>
          <div className="flex gap-1">
            <IconButton
              icon="fa-solid fa-bookmark"
              name="Home"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-file-arrow-up"
              name="Home"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-file-medical"
              name="Profile"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-file-signature"
              name="Settings"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-trash-can"
              name="Messages"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-circle-info"
              name="Notifications"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-download"
              name="Notifications"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-ellipsis-vertical"
              name="Messages"
              textColor='#1A4480'
              color='#EBE3F9'
              onClick={toggleOverlayMenu}
            />
          </div>
        </div>
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-400 text-xs my-1 font-medium">Notas</label>
          <div className="flex gap-1">
            <IconButton
              icon="fa-solid fa-notes-medical"
              name="Home"
              textColor='#1A4480'
              color='#ffedd5'
            />
            <IconButton
              icon="fa-solid fa-clipboard-list"
              name="Profile"
              textColor='#1A4480'
              color='#ffedd5'
            />

          </div>
        </div>


      </nav>

      <OverlayMenu isOpen={isOverlayOpen} onClose={toggleOverlayMenu} onAddItemToGroup3={() => { }} />
    </div>
  );
};

export default Nav;
