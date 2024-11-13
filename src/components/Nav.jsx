import { IconButton } from './IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayMenu from './OverlayMenu';
import { useState } from 'react';
import { faFile, faUser, faLock, faShareAlt, faLink, faTrashAlt, faBoxesPacking, faCheck, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [clickPosition2, setClickPosition2] = useState({ x: 0, y: 0 });

  const toggleOverlayMenu = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  const handleCopy = (text, event) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Set the position of the copied message relative to the click coordinates
        setClickPosition({ x: event.clientX, y: event.clientY });
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
      });
  };
  const [isFilled, setIsFilled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const toggleStar = () => {
    setIsFilled((prev) => !prev);
    setShowMessage(true);
    setClickPosition2({ x: event.clientX, y: event.clientY });
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  };

  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.1)] relative'>
      <div className='bg-[#1351B4] w-100 px-8 py-1 pb-2 flex gap-6 text-sm items-center'>
        <div className='flex gap-2'>
        {/* Action Buttons */}
        <div className='relative'>
          {/* Star Icon */}
          <div
            className='bg-[#1A4480] border border-[#1A4480] p-1.5 flex rounded-full text-white items-center cursor-pointer w-fit'
            onClick={toggleStar}
          >
            <FontAwesomeIcon
              icon={isFilled ? faStarSolid : faStarRegular}
              className={isFilled ? 'text-yellow-400' : 'text-white'}
            />
          </div>

          {/* Favorited Message */}
          {showMessage && (
            <div
              className="text-nowrap z-50 absolute top-[3px] -left-20 transform -translate-x-1/2 bg-[#1A4480] text-white rounded-full px-4 py-2 text-xs flex items-center align-start gap-1"
              // style={{ whiteSpace: 'nowrap' }}
              style={{
              top: clickPosition2.y + 0, // Adjust the vertical position above the click
              left: clickPosition2.x - 250, // Adjust the horizontal position slightly to the right
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

        {/* Third and Fourth Items */}
        <div className="flex items-center text-white relative cursor-pointer hover:underline" onClick={(e) => handleCopy('Básico', e)}>
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="me-2" />
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-[#1351B4] top-[7px] right-[8.5px]">E</span>
          </div>
          Básico
        </div>
        <div className="flex items-center text-white relative cursor-pointer hover:underline" onClick={(e) => handleCopy('Básico', e)}>
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="me-2" />
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-[#1351B4] top-[7px] right-[8.5px]">I</span>
          </div>
          Básico
        </div>

        {/* Action Buttons */}
        <div className='bg-[#1A4480] py-2 flex rounded rounded-full text-white items-center px-4 gap-3'>
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
              top: clickPosition.y + 0, // Adjust the vertical position above the click
              left: clickPosition.x - 290, // Adjust the horizontal position slightly to the right
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
