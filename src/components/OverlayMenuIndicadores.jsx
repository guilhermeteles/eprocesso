import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Sample data structure for groups and items
const groupsData = [
  {
    title: "Titulo do grupo 1",
    color: "#C7EFE2",
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
    color: "#C7EFE2",
    items: [
      { id: 11, title: "Liberar1" },
      { id: 12, title: "Manter Localização Física1" },
      { id: 13, title: "Movimentar1" },
      { id: 14, title: "Palavras-Chave1" },
      { id: 15, title: "Providência1" },
      { id: 16, title: "Distribuir1" },
      { id: 17, title: "Autodistribuir1" },
      { id: 18, title: "Redistribuir1" },
    ],
  },
];

const IndicatorsManager = ({ selectedIndicators, setselectedIndicators }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize selectedIndicators if empty
  useEffect(() => {
    if (!selectedIndicators?.length) {
      const initialselectedIndicators = [];
      let itemCount = 0;

      for (const group of groupsData) {
        for (const item of group.items) {
          if (itemCount < 4) {
            initialselectedIndicators.push(item.id);
            itemCount++;
          }
        }
      }

      setselectedIndicators(initialselectedIndicators);
    }
  }, [setselectedIndicators, selectedIndicators]);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const toggleButtonState = (id) => {
    setselectedIndicators(prevItems => {
      const updatedItems = new Set(prevItems);
      if (updatedItems.has(id)) {
        updatedItems.delete(id);
      } else {
        updatedItems.add(id);
      }
      return Array.from(updatedItems);
    });
  };

  return (
    <div className='mt-2'>
      <div
        className="text-xs flex justify-end items-center text-[#919191] cursor-pointer"
        onClick={toggleModal}
      >
        Gerenciar Indicadores <i className="ms-1 fa-solid fa-cog"></i>
      </div>

      {isModalOpen && (
        <div onClick={toggleModal} className="fixed inset-0 flex flex-col items-end justify-center z-50 bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white pt-6 px-6 shadow-lg h-svh overflow-y-auto">
            <div className='flex justify-between items-center'>
              <h2 className="text-sm px-4 py-2 rounded-md bg-[#92D9BB] w-full mb-2">
                Titulo
              </h2>
              <button onClick={toggleModal} className="mt-4 text-blue-500">x</button>
            </div>

            <div>
              {groupsData.map((group, groupIndex) => (
                <div key={`${group.color}-${groupIndex}`} className="flex flex-col gap-2">
                  {group.title && (
                    <h2 className="mt-4 text-sm px-4 py-2 rounded-md" style={{ backgroundColor: group.color }}>
                      {group.title}
                    </h2>
                  )}
                  {group.items.map(item => (
                    <div key={item.id} className='flex gap-2 items-center'>
                      <button
                        onClick={() => toggleButtonState(item.id)}
                        style={{
                          border: `2px solid ${group.color}`,
                          color: selectedIndicators.includes(item.id) ? 'white' : '#3D4551',
                          backgroundColor: selectedIndicators.includes(item.id) ? group.color : 'transparent',
                          borderRadius: '0.25rem',
                        }}
                        className="flex items-center justify-center h-8 w-8"
                      >
                        {selectedIndicators.includes(item.id) ? (
                          <i className="fas fa-eye-slash"></i>
                        ) : (
                          <i className="fas fa-eye"></i>
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

// Define PropTypes for the component
IndicatorsManager.propTypes = {
  selectedIndicators: PropTypes.arrayOf(PropTypes.number).isRequired,
  setselectedIndicators: PropTypes.func.isRequired,
};

export default IndicatorsManager;
