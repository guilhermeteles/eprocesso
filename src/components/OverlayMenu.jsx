import PropTypes from 'prop-types';
import { useState } from 'react';
import { faMagnifyingGlass, faTimes, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Sample data structure for groups and items
const groupsData = [
  {
    title: "Tramitação do Processo",
    color: "#F9E7CF",
    items: [
      { id: 1, title: "Alterar Localização Física", letter: "L" },
      { id: 2, title: "Alterar Realização Atividade", letter: "R" },
      { id: 3, title: "Arquivar", letter: "A" },
      { id: 4, title: "Desarquivar", letter: "D" },
      { id: 5, title: "Definir Próxima Tarefa", letter: "P" },
      { id: 6, title: "Tornar Físico", letter: "F" },
      { id: 7, title: "Tornar Digital", letter: "T" },
    ],
  },
  {
    title: "Providência",
    color: "#FEE685",
    items: [
      { id: 8, title: "Consultar", letter: "C" },
      { id: 9, title: "Incluir", letter: "I" },
    ],
  },
  {
    title: "Gestão em Horas",
    color: "#D9F7DC",
    items: [
      { id: 10, title: "Classificar ACT e Tema do Processo", letter: "C" },
      { id: 11, title: "Consultar Fichas de Quesitos", letter: "F" },
      { id: 12, title: "Consultar Histórico de Horas Estimadas", letter: "H" },
      { id: 13, title: "Responder Ficha de Quesitos", letter: "R" },
    ],
  },
  {
    title: "Julgamento",
    color: "#DFEACD",
    items: [
      { id: 14, title: "Consultar Histórico de Questionamentos", letter: "C" },
      { id: 15, title: "Incluir ou Alterar ou Cancelar Questionamento", letter: "I" },
      { id: 16, title: "Incluir ou Alterar ou Excluir Ementa", letter: "E" },
      { id: 17, title: "Indicar para a Pauta de Julgamento", letter: "P" },
      { id: 18, title: "Informar Resultado Monocrático", letter: "M" },
      { id: 19, title: "Informar Resultado de Exame de Admissibilidade", letter: "A" },
      { id: 20, title: "Retificar Resultado Monocrático", letter: "R" },
      { id: 21, title: "Retirar Indicação para a Pauta de Julgamento", letter: "T" },
      { id: 22, title: "Retirar Relator", letter: "L" },
    ],
  },
  {
    title: "Juntada de Processo e Vínculo",
    color: "#FFE2D1",
    items: [
      { id: 23, title: "Consultar Solicitação de Juntada", letter: "C" },
      { id: 24, title: "Desapensar", letter: "D" },
      { id: 25, title: "Juntar por Anexação", letter: "A" },
      { id: 26, title: "Juntar por Apensação", letter: "P" },
      { id: 27, title: "Vincular", letter: "V" },
    ],
  },
  {
    title: "Alegações",
    color: "#FAD4D4",
    items: [
      { id: 28, title: "Consultar Alegações", letter: "C" },
      { id: 29, title: "Definir Últimas Alegações do Processo", letter: "D" },
    ],
  },
  {
    title: "Procuração",
    color: "#C3EBFA",
    items: [
      { id: 30, title: "Procurações Vinculadas ao Processo", letter: "P" },
    ],
  },
  {
    title: "Tipo e Subtipo do Processo",
    color: "#D8E5F1",
    items: [
      { id: 31, title: "Informar ou Alterar o Grupo, Tipo e Subtipo", letter: "I" },
    ],
  },
  {
    title: "Legado",
    color: "#E0E0FF",
    items: [
      { id: 32, title: "Apurar Grau de Complexidade", letter: "A" },
      { id: 33, title: "Visualizar Apuração de Grau de Complexidade", letter: "V" },
      { id: 34, title: "Consultar Questionamentos", letter: "C" },
      { id: 35, title: "Indicar Processo para Pauta de Julgamento", letter: "I" },
      { id: 36, title: "Julgar Admissibilidade", letter: "J" },
    ],
  },
];


const ToggleButton = ({ isToggled, onToggle, color, letter }) => {
  const filledStyle = {
    backgroundColor: color,
    color: '#3D4551',
  };
  const outlinedStyle = {
    border: `2px solid ${color}`,
    color: '#3D4551',
  };

  return (
    <button
      onClick={onToggle}
      style={isToggled ? filledStyle : outlinedStyle}
      className="w-8 h-8 rounded flex items-center justify-center shrink-0 text-sm"
    >
      {isToggled ? letter : <FontAwesomeIcon icon={faMinus} />} {/* Conditional rendering */}
    </button>
  );
};

ToggleButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired,
};

const OverlayMenu = ({ isOpen, onClose, onAddItemToGroup3 }) => {
  const [toggles, setToggles] = useState(
    groupsData.reduce((acc, group) => {
      group.items.forEach((item) => {
        acc[item.id] = false; // Initialize all toggle states to false
      });
      return acc;
    }, {})
  );

  const [searchTerm, setSearchTerm] = useState(''); // Search term state

  const handleToggle = (id, title, color, letter) => {
    const newToggleState = !toggles[id];
    setToggles((prevToggles) => ({
      ...prevToggles,
      [id]: newToggleState,
    }));

    if (newToggleState) {
      onAddItemToGroup3({ color, letter, name: title });
    } else {
      onAddItemToGroup3({ color, letter, name: title }, true);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state as user types
  };

  const handleClearSearch = () => {
    setSearchTerm(''); // Clear the search input
  };

  const filteredGroups = groupsData.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity z-50 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex  pl-7 pr-5 pt-6 justify-between items-center'>
        <h2 className="text-lg rounded-md w-full font-semibold text-[#3D4551]">
                Menu Processos
              </h2>
              <button onClick={onClose} className="hover:text-[#3D4551] text-gray-[#D1D5DB] font-bold w-8 h-8">
                <i className="fas fa-xmark"></i>
              </button>
        </div>
        
        {/* Search Area */}
        <div className="p-6 border-b-1 border-b">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="O que você procura?"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-1 text-sm w-full px-3 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F9FA]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {searchTerm ? (
                <FontAwesomeIcon
                  icon={faTimes} // "X" mark when search term is not empty
                  className="cursor-pointer text-md"
                  onClick={handleClearSearch} // Clear search term when clicked
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMagnifyingGlass} // Magnifying glass when search term is empty
                  className="cursor-pointer text-md"
                />
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto p-6" style={{ maxHeight: 'calc(100% - 64px)' }}>
          {filteredGroups
            .filter(group => group.items.length > 0) // Only show groups with items
            .map((group) => (
              <div key={group.title} className="mb-4">
                <h2 className="text-sm px-4 py-2 rounded-md" style={{ backgroundColor: group.color }}>
                  {group.title}
                </h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id} className="flex items-center py-2 ">
                      {/* <ToggleButton
                        isToggled={toggles[item.id]}
                        onToggle={() => handleToggle(item.id, item.title, group.color, item.letter)}
                        color={group.color}
                        letter={item.letter}

                      /> */}
                      <a className="text-sm hover:bg-gray-100 w-full p-2 rounded" href="#">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

OverlayMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddItemToGroup3: PropTypes.func.isRequired,
};

export default OverlayMenu;
