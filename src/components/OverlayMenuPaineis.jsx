import { useState } from 'react';

// Sample data structure for groups and items
const groupsData = [
  {
    title: "Tramitação",
    color: "#FFE2D1",
    items: [
      { id: 1, title: "Liberar", letter: "L" },
      { id: 2, title: "Manter Localização Física", letter: "M" },
      { id: 3, title: "Movimentar", letter: "D" },
      { id: 4, title: "Palavras-Chave", letter: "K" },
      { id: 5, title: "Providência", letter: "P" },
      { id: 6, title: "Distribuir", letter: "S" },
      { id: 7, title: "Autodistribuir", letter: "A" },
      { id: 8, title: "Redistribuir", letter: "R" },
    ],
  },
  // ... other groups
];

const PanelManager = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <div>
      {/* Clickable div to manage panels */}
      <div 
        className="px-6 text-xs flex justify-end items-center text-[#919191] mt-6 mb-4 cursor-pointer"
        onClick={toggleModal} // Add onClick handler
      >
        Gerenciar Painéis<i className="ms-1 fa-solid fa-cog"></i>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div onClick={toggleModal} className="fixed inset-0 flex flex-col items-end justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className='flex items-center'>
                <h2 className="text-lg font-semibold mb-4">Gerenciar Painéis</h2>
                <button onClick={toggleModal} className="mt-4 text-blue-500">Close</button>
            </div>
            
            <div>
              {groupsData.map(group => (
                <div key={group.title} style={{ marginBottom: '20px' }}>
                  <h3 style={{ color: group.color }}>{group.title}</h3>
                  <div className="flex flex-col space-x-2">
                    {group.items.map(item => (
                      <button 
                        key={item.id}
                        style={{ border: `2px solid ${group.color}`, color: '#3D4551', borderRadius: '0.25rem' }}
                        className="flex items-center justify-center h-8 w-8"
                      >
                        {item.letter}
                      </button>
                    ))}
                  </div>
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
