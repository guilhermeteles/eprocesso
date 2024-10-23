import { useState } from 'react';

// Sample data structure for groups and items
const groupsData = [
  {
    color: "#BBC8F5",
    items: [
      { id: 1, title: "Liberar" },
      { id: 2, title: "Manter Localização Física" },
      { id: 3, title: "Movimentar" },
      { id: 4, title: "Palavras-Chave" },
      { id: 5, title: "Providência" },
      { id: 6, title: "Distribuir" },
      { id: 7, title: "Autodistribuir" },
      { id: 8, title: "Redistribuir" },
    ],
  },
  {
    title: "Titulo do grupo 2",
    color: "#E1E6F9",
    items: [
      { id: 11, title: "Liberar" },
      { id: 12, title: "Manter Localização Física" },
      { id: 13, title: "Movimentar" },
      { id: 14, title: "Palavras-Chave" },
      { id: 15, title: "Providência" },
      { id: 16, title: "Distribuir" },
      { id: 17, title: "Autodistribuir" },
      { id: 18, title: "Redistribuir" },
    ],
  },
];

const PanelManager = ({ selectedItems, setSelectedItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize buttonStates: first 5 are true (visible), others are false (hidden)
  const [buttonStates, setButtonStates] = useState(
    groupsData.reduce((acc, group) => {
      group.items.forEach((item, index) => {
        acc[item.id] = index < 5; // First 5 items are true (visible)
      });
      return acc;
    }, {})
  );

  // Prepopulate selectedItems with the first 5 item IDs
  useState(() => {
    setSelectedItems(groupsData.flatMap(group => group.items.slice(0, 5).map(item => item.id)));
  }, []);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const toggleButtonState = (id) => {
    setButtonStates(prev => {
      const newState = !prev[id]; // Toggle the button state (true or false)

      setSelectedItems(prevItems => {
        const updatedItems = new Set(prevItems); // Use a Set to ensure uniqueness
        
        if (newState) {
          updatedItems.add(id); // Add the item if selected
        } else {
          updatedItems.delete(id); // Remove the item if unselected
        }

        return Array.from(updatedItems); // Convert back to an array
      });

      return {
        ...prev,
        [id]: newState, // Toggle the state for the specific button
      };
    });
  };

  return (
    <div>
      {/* Clickable div to manage panels */}
      <div
        className="px-6 text-xs flex justify-end items-center text-[#919191] mt-6 mb-4 cursor-pointer"
        onClick={toggleModal}
      >
        Gerenciar Painéis <i className="ms-1 fa-solid fa-cog"></i>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div onClick={toggleModal} className="fixed inset-0 flex flex-col items-end justify-center z-50 bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white pt-6 px-6 shadow-lg h-svh overflow-y-auto">
            <div className='flex justify-between items-center'>
              <h2 className="text-sm px-4 py-2 rounded-md bg-[#BBC8F5] w-full mb-2">
                Titulo
              </h2>
              <button onClick={toggleModal} className="mt-4 text-blue-500">x</button>
            </div>

            <div>
              {groupsData.map(group => (
                <div key={group.color} className="flex flex-col gap-2">
                  {group.title && (
                    <h2 className="mt-4 text-sm px-4 py-2 rounded-md" style={{ backgroundColor: group.color }}>
                      {group.title}
                    </h2>
                  )}
                  {group.items.map(item => (
                    <div key={item.id} className='flex gap-2 items-center'>
                      <button
                        onClick={() => toggleButtonState(item.id)} // Toggle button state on click
                        style={{
                          border: `2px solid ${group.color}`,
                          color: buttonStates[item.id] ? 'white' : '#3D4551',
                          backgroundColor: buttonStates[item.id] ? group.color : 'transparent',
                          borderRadius: '0.25rem',
                        }}
                        className="flex items-center justify-center h-8 w-8"
                      >
                        {buttonStates[item.id] ? (
                          <i className="fas fa-eye-slash"></i> // Eye Slash Icon when filled
                        ) : (
                          <i className="fas fa-eye"></i> // Eye Icon when outlined
                        )}
                      </button>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelManager;
