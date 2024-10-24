import { useState } from 'react';

const Dashboard = ({ selectedItems, setSelectedItems }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);
  

  const cardsData = [
    { id: 1, icon:'gavel', title: "Reuniões de Julgamento", 
      content: `
      <div class="flex flex-col gap-2">
      <div class="bg-[#FBFCFD] p-4 rounded-md">
        <div class="flex justify-between">
          <div class="text-xs bg-[#FFF3F2] px-2 py-1 rounded-sm">Pauta em suplementação</div>
          <div class="text-sm">11/08/2024</div>
        </div>
        <div class="mt-2">
          <div class="font-bold">Reunião com o cliente</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      <div class="bg-[#FBFCFD] p-4 rounded-md">
        <div class="flex justify-between">
          <div class="text-xs bg-[#E3F5E1] px-2 py-1 rounded-sm">Agendada</div>
          <div class="text-sm">11/08/2024</div>
        </div>
        <div class="mt-2">
          <div class="font-bold">Reunião com o cliente</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      <div class="bg-[#FBFCFD] p-4 rounded-md">
        <div class="flex justify-between">
          <div class="text-xs bg-[#FFF5C2] px-2 py-1 rounded-sm">Em agendamento</div>
          <div class="text-sm">11/08/2024</div>
        </div>
        <div class="mt-2">
          <div class="font-bold">Reunião com o cliente</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      </div>
      ` },
    { id: 2, icon:'tasks', title: "Pendências do Processo",
      content: `
      <div class="flex flex-col gap-2">
      <div class="bg-[#FBFCFD] p-4 rounded-md">
        <div class="text-xs bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Ciência pendente</div>
        <div class="mt-2">
          <div class="font-bold">Nome da penência de ciência</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      <div class="bg-[#FBFCFD] p-4 rounded-md">
        <div class="text-xs bg-[#FFF5C2] px-2 py-1 rounded-sm w-fit">Manifestação pendente</div>
        <div class="mt-2">
          <div class="font-bold">Nome da penência de manifestação</div>
          <div class="text-sm">Apresentação da tela de visualização do projeto.</div>
        </div>
      </div>
      </div>
      ` },
    { id: 3, icon:'edit', title: "Notas",
      content: `
      <div class="flex flex-col gap-2">
        <div class="bg-[#FFF5C2] p-4 rounded-md">
          <div class="flex justify-between">
            <div class="text-xs font-bold">Nome do Autor da Nota</div>
            <div class="text-xs">20/02/2023</div>
          </div>
          <div class="text-sm mt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</div>
        </div>
        <div class="bg-[#FFF5C2] p-4 rounded-md">
          <div class="flex justify-between">
            <div class="text-xs font-bold">Nome do Autor da Nota</div>
            <div class="text-xs">20/02/2023</div>
          </div>
          <div class="text-sm mt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</div>
        </div>
        <div class="bg-[#FFF5C2] p-4 rounded-md">
          <div class="flex justify-between">
            <div class="text-xs font-bold">Nome do Autor da Nota</div>
            <div class="text-xs">20/02/2023</div>
          </div>
          <div class="text-sm mt-2">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</div>
        </div>
      </div>
      ` },
    { id: 4, icon:'clock', title: "Temporalidade do processo",
      content: `
      <div class="flex flex-col gap-2">
        <div class="bg-[#F8DFE2] h-12 rounded-md flex justify-between items-center px-4">
          <div class="font-semibold">Usuário</div>
          <div class="font-black">20 dias</div>
        </div>
        <div class="bg-[#FEE685] h-12 rounded-md flex justify-between items-center px-4">
          <div class="font-semibold">Atividade</div>
          <div class="font-black">40 dias</div>
        </div>
        <div class="bg-[#D4E5FF] h-12 rounded-md flex justify-between items-center px-4">
          <div class="font-semibold">Equipe</div>
          <div class="font-black">45 dias</div>
        </div>
      </div>
      ` },
    { id: 5, icon:'info-circle', title: "Descrição do Processo",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 6, icon:'file-invoice-dollar', title: "Sobre a Inscrição na Dívida Ativa da União",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 7, icon:'paper-plane', title: "Sobre o Controle / Fluxo do Processo",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 8, icon:'clipboard-check', title: "Sobre o Estado do Processo",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 9, icon:'eye', title: "Sobre o Interessado",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 10, icon:'balance-scale-right', title: "Sobre o Julgamento",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 11, icon:'list-alt', title: "Sobre o Pedido Existente no Processo",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 12, icon:'user-tie', title: "Sobre o Responsável",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 13, icon:'check-double', title: "Sobre o Trabalho com o Processo",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
    { id: 14, icon:'search-dollar', title: "Sobre os Valores",
      content: `
      <div class="flex flex-col gap-2">
        <div class="text-xs">Prioridade do Processo</div>
        <div class="text-sm font-semibold">Sem prioridade</div>
        <div class="text-xs">Indicador se Existe Providência Aberta</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Providência(s)</div>
        <div class="text-sm font-semibold">DESISTÊNCIA</div>
        <div class="text-xs">Data(s) Prazo(s) de Providência(s)</div>
        <div class="text-sm font-semibold">30/03/2024</div>
        <div class="text-xs">Nome(s) Responsável(is) de Abertura da(s) Providência(s)</div>
        <div class="text-sm font-semibold">FLORISVALDO FELÍCIO DE CARVALHO</div>
        <div class="text-xs">Alerta de Providência com Prazo</div>
        <div class="text-sm font-semibold"><div class=" bg-[#E3F5E1] px-2 py-1 rounded-sm w-fit">Sim</div></div>
        <div class="text-xs">Alerta de Providência com Prazo Expirado</div>
        <div class="text-sm font-semibold"><div class="bg-[#FFF3F2] px-2 py-1 rounded-sm w-fit">Não</div></div>
        <div class="text-xs">Nome(s) Destinatário(s) da(s) Providência(s)</div>
        <div class="text-sm font-semibold">DRF/SALVADOR/BA-FLORISVALDO FELICIO DE CARVALHO</div>
      </div>
      ` },
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
