import { useState } from 'react';

const Dashboard = ({ selectedItems, setSelectedItems }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);

  const cardsData = [
    { id: 1, icon:'gavel', title: "Reuniões de Julgamento", 
      content: `
      <div class="flex flex-col gap-2">
      <div class="bg-[#FBFCFD] p-3">
        <div class="flex justify-between">
          <div class="text-xs bg-[#FFF3F2] px-2 py-1">Pauta em suplementação</div>
          <div class="text-md">11/08/2024</div>
        </div>
        <div class="mt-2">
          <div class="font-bold">Reunião com o cliente</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      <div class="bg-[#FBFCFD] p-3">
        <div class="flex justify-between">
          <div class="text-xs bg-[#E3F5E1] px-2 py-1">Agendada</div>
          <div class="text-md">11/08/2024</div>
        </div>
        <div class="mt-2">
          <div class="font-bold">Reunião com o cliente</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      <div class="bg-[#FBFCFD] p-3">
        <div class="flex justify-between">
          <div class="text-xs bg-[#FFF5C2] px-2 py-1">Em agendamento</div>
          <div class="text-md">11/08/2024</div>
        </div>
        <div class="mt-2">
          <div class="font-bold">Reunião com o cliente</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      </div>
      ` },
    { id: 2, icon:'tasks', title: "Pendências do Processo", content: "This is some content for Widget 2." },
    { id: 3, icon:'edit', title: "Notas", content: "This is some content for Widget 3." },
    { id: 4, icon:'clock', title: "Temporalidade do processo", content: "This is some content for Widget 4." },
    { id: 5, icon:'info-circle', title: "Descrição do Processo", content: "This is some content for Widget 6." },
    { id: 6, icon:'file-invoice-dollar', title: "Sobre a Inscrição na Dívida Ativa da União", content: "This is some content for Widget 7." },
    { id: 7, icon:'paper-plane', title: "Sobre o Controle / Fluxo do Processo", content: "This is some content for Widget 8." },
    { id: 8, icon:'clipboard-check', title: "Sobre o Estado do Processo", content: "This is some content for Widget 1." },
    { id: 9, icon:'eye', title: "Sobre o Interessado", content: "This is some content for Widget 2." },
    { id: 10, icon:'balance-scale-right', title: "Sobre o Julgamento", content: "This is some content for Widget 3." },
    { id: 11, icon:'list-alt', title: "Sobre o Pedido Existente no Processo", content: "This is some content for Widget 4." },
    { id: 12, icon:'user-tie', title: "Sobre o Responsável", content: "This is some content for Widget 5." },
    { id: 13, icon:'check-double', title: "Sobre o Trabalho com o Processo", content: "This is some content for Widget 6." },
    { id: 14, icon:'search-dollar', title: "Sobre os Valores", content: "This is some content for Widget 7." },
  ];
  
  
  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
    e.target.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === index) return;
    setDraggedOverItem(index);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (!e.relatedTarget?.closest('.draggable-card')) {
      setDraggedOverItem(null);
    }
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedItem === dropIndex) return;

    const newItems = [...selectedItems];
    const draggedItemContent = newItems[draggedItem];
    
    // Remove item from old position
    newItems.splice(draggedItem, 1);
    // Add item to new position
    newItems.splice(dropIndex, 0, draggedItemContent);

    setSelectedItems(newItems);
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  return (
    <div className="mt-4">
      <div className="masonry-layout">
        {selectedItems.map((itemId, index) => {
          const card = cardsData.find(card => card.id === itemId);

          return card ? (
            <div
              key={card.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              className={`draggable-card bg-white rounded-lg shadow-sm transition-all mb-6 ${
                draggedItem === index ? 'opacity-50' : ''
              } ${draggedOverItem === index ? 'border-2 border-blue-500' : ''}`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                  <div className='flex'>
                  <i className={`fas fa-${card.icon} me-2 mt-1.5`}></i>
                  <h2 className="text-lg leading-6 font-semibold">{card.title}</h2>
                  </div>
                  
                  
                  <div className="cursor-move p-2 rounded-lg hover:bg-gray-100 flex items-center">
                    <i className="text-gray-500 fa-solid fa-grip-vertical"></i>
                  </div>
                </div>
                <p className="text-gray-600"><div dangerouslySetInnerHTML={{ __html: card.content }} /></p>
              </div>
            </div>
          ) : (
            <div key={itemId} className="bg-gray-200 p-4 rounded-lg">
              <p>Card not found for ID: {itemId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
