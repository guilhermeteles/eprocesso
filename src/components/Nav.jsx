import { OutlinedIconButton } from './IconButton'; // Import the IconButton component
import { faLock, faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {

  return (
    <>
      <nav className="flex gap-4 bg-white mx-8 px-4">
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-700 text-xs my-1 font-medium">Consultas</label>
          <div className="flex gap-1">
            <OutlinedIconButton 
              icon="fa-solid fa-file-contract" 
              name="Home" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-calendar-days" 
              name="Profile" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-info-circle" 
              name="Settings" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-user" 
              name="Notifications" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-lock" 
              name="Messages" 
              textColor='#1351B4'
            />
          </div>
        </div>
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-700 text-xs my-1 font-medium">Processo</label>
          <div className="flex gap-1">
            <OutlinedIconButton 
              icon="fa-solid fa-arrow-right" 
              name="Home" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-arrow-rotate-right" 
              name="Profile" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-arrow-up" 
              name="Settings" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-user-group" 
              name="Notifications" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-circle-info" 
              name="Notifications" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-calendar-days" 
              name="Messages" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-ellipsis-vertical" 
              name="Messages" 
              textColor='#1351B4'
            />
          </div>
        </div>
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-700 text-xs my-1 font-medium">Documentos</label>
          <div className="flex gap-1">
          <OutlinedIconButton 
              icon="fa-solid fa-bookmark" 
              name="Home" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-file-arrow-up" 
              name="Home" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-file-medical" 
              name="Profile" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-file-signature" 
              name="Settings" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-trash-can" 
              name="Messages"  
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-circle-info" 
              name="Notifications" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-download" 
              name="Notifications" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
            icon="fa-solid fa-ellipsis-vertical" 
            name="Messages"  
            textColor='#1351B4'
          />
          </div>
        </div>
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-700 text-xs my-1 font-medium">Notas</label>
          <div className="flex gap-1">
            <OutlinedIconButton 
              icon="fa-solid fa-file-contract" 
              name="Home" 
              textColor='#1351B4'
            />
            <OutlinedIconButton 
              icon="fa-solid fa-calendar-days" 
              name="Profile" 
              textColor='#1351B4'
            />
            
          </div>
        </div>
       

      </nav>
      <div className='bg-[#1351B4] w-100 mx-8 px-4 py-2 flex gap-4 text-sm'>
      <div className='bg-[#1A4480] py-2 flex rounded rounded-full text-white items-center px-4 gap-3'>
            <FontAwesomeIcon
              icon={faLock}
              className='text-orange-500'
            />
            <FontAwesomeIcon
              icon={faLock}
            />
            <FontAwesomeIcon
              icon={faLock}
            />
            <FontAwesomeIcon
              icon={faLock}
            />
        </div>
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
        
      </div>
    </>
  );
};

export default Nav;
