import { OutlinedIconButton, IconButton } from './IconButton'; // Import the IconButton component
import { faLock, faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OverlayMenu from './OverlayMenu'
import { useState } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons/faBoxArchive';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faFileZipper } from '@fortawesome/free-regular-svg-icons';
import { faBoxesPacking } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const Nav = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlayMenu = () => {
    setIsOverlayOpen((prev) => !prev);
  };

  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.1)]'>
      <div className='bg-[#1351B4] w-100 px-8 py-1 pb-2 flex gap-6 text-sm'>
        
        <div className='flex items-center text-white font-semibold '>
          <FontAwesomeIcon
            icon={faFile}
            className="me-2"
          />
          10090.000003/0419-05
        </div>
        <div className='flex items-center text-white'>
          <FontAwesomeIcon
            icon={faUser}
            className="me-2"
          />

          <span className='font-semibold mr-2'>
            05136946504
          </span>
          UOLIRHEZOWL UVORXRL WV XZIEZOSL
        </div>
        <div className="flex items-center text-white relative">
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="me-2" />
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-[#1351B4] top-[7px] right-[8.5px]">
              E
            </span>
          </div>
          Básico
        </div>
        <div className="flex items-center text-white relative">
          <div className="relative">
            <FontAwesomeIcon icon={faLock} className="me-2" />
            <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-[#1351B4] top-[7px] right-[8.5px]">
              I
            </span>
          </div>
          Básico
        </div>
        <div className='bg-[#1A4480] py-2 flex rounded rounded-full text-white items-center px-4 gap-3'>
          <FontAwesomeIcon
            icon={faShareAlt}
            className='text-orange-500'
          />
          <FontAwesomeIcon
            icon={faLink}
          />
    <FontAwesomeIcon
            icon={faTrashAlt}
          />
    
          <FontAwesomeIcon
            icon={faBoxesPacking}
          />
        </div>
      </div>
      <nav className="flex gap-6 bg-white px-8">
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-400 text-xs my-1 font-medium">Consultas</label>
          <div className="flex gap-1">
            <IconButton
              icon="fa-solid fa-link"
              name="Home"
              textColor='#1351B4'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-file-contract"
              name="Home"
              textColor='#1351B4'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-calendar-days"
              name="Profile"
              textColor='#1351B4'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-info-circle"
              name="Settings"
              textColor='#1351B4'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-user"
              name="Notifications"
              textColor='#1351B4'
              color='#C4EEEB'
            />
            <IconButton
              icon="fa-solid fa-lock"
              name="Messages"
              textColor='#1351B4'
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
              textColor='#1351B4'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-arrow-rotate-right"
              name="Profile"
              textColor='#1351B4'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-arrow-up"
              name="Settings"
              textColor='#1351B4'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-user-group"
              name="Notifications"
              textColor='#1351B4'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-circle-info"
              name="Notifications"
              textColor='#1351B4'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-calendar-days"
              name="Messages"
              textColor='#1351B4'
              color='#D4E5FF'
            />
            <IconButton
              icon="fa-solid fa-ellipsis-vertical"
              name="Messages"
              textColor='#1351B4'
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
              textColor='#1351B4'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-file-arrow-up"
              name="Home"
              textColor='#1351B4'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-file-medical"
              name="Profile"
              textColor='#1351B4'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-file-signature"
              name="Settings"
              textColor='#1351B4'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-trash-can"
              name="Messages"
              textColor='#1351B4'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-circle-info"
              name="Notifications"
              textColor='#1351B4'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-download"
              name="Notifications"
              textColor='#1351B4'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-ellipsis-vertical"
              name="Messages"
              textColor='#1351B4'
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
              textColor='#1351B4'
              color='#FFDDEA'
            />
            <IconButton
              icon="fa-solid fa-clipboard-list"
              name="Profile"
              textColor='#1351B4'
              color='#FFDDEA'
            />

          </div>
        </div>


      </nav>
      
      <OverlayMenu isOpen={isOverlayOpen} onClose={toggleOverlayMenu} onAddItemToGroup3={() => { }} />
    </div>
  );
};

export default Nav;
