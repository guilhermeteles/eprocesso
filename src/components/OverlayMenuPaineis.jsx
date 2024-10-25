import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


// Sample data structure for groups and items
const groupsData = [
  {
    color: "#BBC8F5",
    items: [
      { id: 1, title: "Reuniões de julgamento" },
      { id: 2, title: "Pendências do Processo" },
      { id: 3, title: "Notas" },
      { id: 4, title: "Temporalidade do processo" },
    ],
  },
  {
    title: "Painéis de Palavras-chaves",
    color: "#BBC8F5",
    items: [
      { id: 5, title: "Descrição do Processo" },
      { id: 6, title: "Sobre a Inscrição na Dívida Ativa da União" },
      { id: 7, title: "Sobre o Controle / Fluxo do Processo" },
      { id: 8, title: "Sobre o Estado do Processo" },
      { id: 9, title: "Sobre o Interessado" },
      { id: 10, title: "Sobre o Julgamento" },
      { id: 11, title: "Sobre o Pedido Existente no Processo" },
      { id: 12, title: "Sobre o Responsável" },
      { id: 13, title: "Sobre o Trabalho com o Processo" },
      { id: 14, title: "Sobre os Valores" },
    ],
  },
];

const PanelManager = ({ selectedItems, setSelectedItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize selectedItems if empty
  useEffect(() => {
    if (!selectedItems?.length) {
      const initialSelectedItems = [];
      let itemCount = 0;

      for (const group of groupsData) {
        for (const item of group.items) {
          if (itemCount < 8) {
            initialSelectedItems.push(item.id);
            itemCount++;
          }
        }
      }

      setSelectedItems(initialSelectedItems);
    }
  }, [setSelectedItems, selectedItems]);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const toggleButtonState = (id) => {
    setSelectedItems(prevItems => {
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
    <div className='mt-20 flex justify-end'>
      <div
        className="text-xs flex w-fit items-center text-[#919191] cursor-pointer"
        onClick={toggleModal}
      >
        Gerenciar Painéis <i className="ms-1 fa-solid fa-cog"></i>
      </div>

      {isModalOpen && (
        <div onClick={toggleModal} className="fixed inset-0 flex flex-col items-end justify-center z-50 bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 shadow-lg h-svh overflow-y-auto w-96">
          

            <div className='flex justify-between items-center relative'>
              <h2 className="mb-4 text-md px-4 py-2 rounded-md border-2 border-[#BBC8F5] w-full mb-2 font-semibold text-[#3D4551] bg-[#F5F6F7]">
                Gerenciar Painéis
              </h2>
              <button onClick={toggleModal} className="absolute right-[3px] top-[5px] text-[#3D4551] font-bold w-8 h-8"> <i className="fas fa-xmark"></i></button>
            </div>

            <div>
              {groupsData.map((group, groupIndex) => (
                <div key={`${group.color}-${groupIndex}`} className="flex flex-col gap-2">
                  {group.title && (
                    <h2 className="my-4 text-md px-4 py-2 rounded-md bg-[#F5F6F7] border border-2 font-semibold" style={{ borderColor: group.color }}>
                      {group.title}
                    </h2>
                  )}
                  {group.items.map(item => (
                    <div key={item.id} className='flex gap-2 items-center mb-1'>
                      <button
                        onClick={() => toggleButtonState(item.id)}
                        style={{
                          border: `2px solid ${group.color}`,
                          color: selectedItems.includes(item.id) ? 'white' : '#3D4551',
                          backgroundColor: selectedItems.includes(item.id) ? group.color : 'transparent',
                          borderRadius: '0.25rem',
                        }}
                        className="flex items-center justify-center h-8 w-8"
                      >
                        {selectedItems.includes(item.id) ? (
                          <i className="fas fa-check"></i>
                        ) : (
                          <i className="fas fa-minus"></i>
                        )}
                      </button>
                      <span
                        style={{
                          textDecoration: selectedItems.includes(item.id) ? 'none' : 'none',//'line-through',
                          opacity: selectedItems.includes(item.id) ? 1 : 0.7, // Optional: Slightly fade out non-selected items
                        }}
                      >
                        {item.title}
                      </span>
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
PanelManager.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  setSelectedItems: PropTypes.func.isRequired,
};

export default PanelManager;
