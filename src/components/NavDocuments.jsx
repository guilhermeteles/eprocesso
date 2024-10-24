import { useState } from 'react';
import OverlayMenu from './OverlayMenu'; // Ensure the path is correct
import { IconButton } from './IconButton'; // Import the IconButton component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PageNumber from './PageNumber'

const NavDocuments = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [setGroup3Items] = useState([]); // State to manage Group 3 items

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const addItemToGroup3 = (item, remove = false) => {
    if (remove) {
      // Remove item from Group 3
      setGroup3Items((prevItems) => prevItems.filter(i => i.name !== item.name)); // Adjust condition based on your logic
    } else {
      // Add the new item to Group 3
      setGroup3Items((prevItems) => [...prevItems, item]); // Add the new item to Group 3
    }
  };

  return (
    <>
      <nav className="pt-3 pb-2 ps-5 pe-3 absolute bottom-0 self-center bg-[#0050D8] shadow-md w-fit gap-0 sm:gap-4 flex sm:flex-row flex-col rounded-t-lg">
        
        {/* Group 0 */}
        <div className="flex flex-col text-white mb-1">
          {/* <label className="text-xs my-1">Páginas</label> */}
          <div className='flex items-center'>
          <div id="page-number" className=" inline-block py-1 px-3 font-medium transition duration-300 ease-in-out rounded-sm hover:text-[#3D4551] cursor-pointer"><PageNumber/></div>
          </div>
          

          </div>
        
        {/* Group 1 */}
        <div className="flex flex-col">
          {/* <label className="text-white text-xs my-1">Global</label> */}
          <div className="flex space-x-1">
          <IconButton 
            icon="fa-solid fa-file-signature" 
            name="Home" 
            color="#1A4480"
          />

            <IconButton 
              icon="fa-solid fa-lock" 
              name="Messages" 
              color="#1A4480" 
            />
          </div>
        </div>

        {/* Group 1 */}
        <div className="flex flex-col">
          {/* <label className="text-white text-xs my-1">Global</label> */}
          <div className="flex space-x-1">
          <IconButton 
            icon="fa-solid fa-plus" 
            name="Home" 
            color="#2D2E2F"
          />

            <IconButton 
              icon="fa-solid fa-minus" 
              name="Messages" 
              color="#2D2E2F" 
            />
          </div>
        </div>

        {/* Group 2 */}
        <div className="flex flex-col">
          {/* <label className="text-white text-xs my-1">Processo</label> */}
          <div className="flex space-x-1">
            <IconButton 
              icon="fa-solid fa-vector-square" 
              name="Analytics" 
              color="#2672DE" 
            />
            <IconButton 
              icon="fa-solid fa-expand-arrows-alt" 
              name="Reports" 
              color="#2672DE" 
            />
            <IconButton 
              icon="fa-solid fa-link" 
              name="Tasks" 
              color="#2672DE" 
            />
            <IconButton 
              icon="fa-solid fa-download" 
              name="Feedback" 
              color="#2672DE" 
            />
          </div>
        </div>

        {/* Group 3 - Overlay Menu Trigger */}
        <div className="flex flex-col">
          {/* <label className="text-white text-xs my-1">Favoritos</label> */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="O que você procura?"
              className="text-sm w-full px-3 py-2 pr-10 h-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#fff]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            
              <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              className={`cursor-pointer text-md`} 
            />
          </div>
        </div>
        </div>
      </nav>

      <OverlayMenu 
        isOpen={isMenuOpen} 
        onClose={closeMenu} 
        onAddItemToGroup3={addItemToGroup3} // Pass function to add/remove items
      />
    </>
  );
};

export default NavDocuments;
