import { useState } from 'react';
import OverlayMenu from './OverlayMenu'; // Ensure the path is correct
import { IconButton, OutlinedIconButton } from './IconButton'; // Import the IconButton component

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [group3Items, setGroup3Items] = useState([]); // State to manage Group 3 items

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <nav className="absolute self-center bg-white px-3 py-3 sm:pt-2 sm:py-0 shadow-md w-fit gap-0 sm:gap-4 flex sm:flex-row flex-col rounded-b-lg z-40">
        {/* Group 1 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-700 text-xs my-1">Navegação do Processo</label>
          <div className="flex space-x-1">
            <IconButton 
              icon="fa-solid fa-file-contract" 
              name="Home" 
              color="#C3EBFA"
              textColor='#1A4480'
            />
            <IconButton 
              icon="fa-solid fa-calendar-days" 
              name="Profile" 
              color="#C3EBFA"
              textColor='#1A4480'
            />
            <IconButton 
              icon="fa-solid fa-info-circle" 
              name="Settings" 
              color="#C3EBFA"
              textColor='#1A4480'
            />
            <IconButton 
              icon="fa-solid fa-user" 
              name="Notifications" 
              color="#C3EBFA"
              textColor='#1A4480'
            />
            <IconButton 
              icon="fa-solid fa-lock" 
              name="Messages" 
              color="#C3EBFA"
              textColor='#1A4480'
            />
          </div>
        </div>

        {/* Group 2 */}
        <div className="flex flex-col mb-2">
          <label className="text-gray-700 text-xs my-1">Ações do Processo</label>
          <div className="flex space-x-1">
            <IconButton 
              icon="fa-solid fa-arrow-right" 
              name="Analytics" 
              color="#2672DE" 
            />
            <IconButton 
              icon="fa-solid fa-arrow-up" 
              name="Reports" 
              color="#2672DE" 
            />
            <IconButton 
              icon="fa-solid fa-people-arrows" 
              name="Tasks" 
              color="#2672DE" 
            />
            <IconButton 
              icon="fa-solid fa-download" 
              name="Feedback" 
              color="#2672DE" 
            />
            <IconButton 
              icon="fa-solid fa-file" 
              name="Help" 
              color="#2672DE" 
            />
          </div>
        </div>
        {/* Group 3 */}
        <div className="flex flex-col">
        <label className="text-gray-700 text-xs my-1">Ações dos Documentos</label>
          <div className="flex space-x-1">
            <IconButton 
              icon="fa-solid fa-file-contract" 
              name="Home" 
              color="#1A4480" 
            />
            <IconButton 
              icon="fa-solid fa-calendar-days" 
              name="Profile" 
              color="#1A4480" 
            />
            <IconButton 
              icon="fa-solid fa-info-circle" 
              name="Settings" 
              color="#1A4480" 
            />
            <IconButton 
              icon="fa-solid fa-user" 
              name="Notifications" 
              color="#1A4480" 
            />
            <IconButton 
              icon="fa-solid fa-lock" 
              name="Messages" 
              color="#1A4480" 
            />
          </div>
        </div>

        {/* Group 4 - Overlay Menu Trigger */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-xs my-1">Favoritos</label>
          <div className="flex space-x-1">
            {group3Items.map((item, index) => (
              <IconButton
                key={index} 
                letter={item.letter} 
                name={item.name} 
                color={item.color} // Customize the color if needed
                textColor="#3D4551"
              />
            ))}
            <OutlinedIconButton 
              icon="fa-solid fa-bars" 
              name="Profile" 
              onClick={toggleMenu}
              textColor='#1A4480'
            />
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

export default Nav;
