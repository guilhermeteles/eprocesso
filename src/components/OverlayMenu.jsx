import PropTypes from 'prop-types';
import { useState } from 'react';

// Sample data structure for groups and items
const groupsData = [
  {
    title: "Tramitação do Processo",
    color: "#FFE2D1",
    items: [
      { id: 1, title: "Alterar Localização Física", letter: "L" },
      { id: 2, title: "Alterar Realização Atividade", letter: "A" },
      { id: 3, title: "Arquivar", letter: "A" },
      { id: 4, title: "Autodistribuir", letter: "D" },
      { id: 5, title: "Definir Próxima Tarefa", letter: "N" },
      { id: 6, title: "Tornar Físico", letter: "F" },
      { id: 7, title: "Tornar Digital", letter: "D" },
    ],
  },
  {
    title: "Juntada de Documento",
    color: "#FEE685",
    items: [
      { id: 8, title: "Consultar Solicitação de Juntada", letter: "C" },
      { id: 9, title: "Copiar Documento de outro Processo", letter: "D" },
    ],
  },
  {
    title: "Providência",
    color: "#DFEACD",
    items: [
      { id: 10, title: "Consultar", letter: "C" },
      { id: 11, title: "Incluir", letter: "I" },
    ],
  },
  {
    title: "Ciência",
    color: "#C7EFE2",
    items: [
      { id: 12, title: "Consultar Comunicados e Intimações Emitidos", letter: "C" },
      { id: 13, title: "Emitir Comunicado ou Intimação para Ciência", letter: "E" },
    ],
  },
  {
    title: "Gestão em Horas",
    color: "#C3EBFA",
    items: [
      { id: 14, title: "Classificar ACT e Tema do Processo", letter: "C" },
      { id: 15, title: "Consultar Fichas de Quesitos", letter: "F" },
      { id: 16, title: "Consultar Histórico de Horas Estimadas", letter: "H" },
      { id: 17, title: "Responder Ficha de Quesitos", letter: "R" },
    ],
  },
  {
    title: "Julgamento",
    color: "#E0E0FF",
    items: [
      { id: 18, title: "Consultar Histórico de Questionamentos", letter: "C" },
      { id: 19, title: "Incluir / Alterar / Cancelar Questionamento", letter: "I" },
      { id: 20, title: "Incluir / Alterar / Excluir Ementa", letter: "E" },
      { id: 21, title: "Indicar para Pauta", letter: "P" },
      { id: 22, title: "Informar Resultado Monocrático", letter: "M" },
      { id: 23, title: "Informar Resultado de Exame de Admissibilidade", letter: "E" },
      { id: 24, title: "Retificar Resultado Monocrático", letter: "R" },
    ],
  },
  {
    title: "Legado",
    color: "#EDEFF0",
    items: [
      { id: 25, title: "Apurar Grau do Processo", letter: "A" },
      { id: 26, title: "Visualizar Apuração de Grau", letter: "V" },
      { id: 27, title: "Consultar Questionamentos", letter: "C" },
      { id: 28, title: "Indicar Processo para Pauta", letter: "I" },
      { id: 29, title: "Julgar Admissibilidade", letter: "J" },
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
      className="w-8 h-8 rounded flex items-center justify-center shrink-0 text-sm" // Fixed size
    >
      {letter}
    </button>
  );
};

// PropTypes for ToggleButton
ToggleButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired, // Added letter prop
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

  const handleToggle = (id, title, color, letter) => {
    const newToggleState = !toggles[id];
    setToggles((prevToggles) => ({
      ...prevToggles,
      [id]: newToggleState,
    }));

    // Add or remove item to/from Group 3 based on toggle state
    if (newToggleState) {
      onAddItemToGroup3({ color, letter, name: title }); // Pass color and letter along with name
    } else {
      // If toggled off, remove the item from group3Items
      onAddItemToGroup3({ color, letter, name: title }, true); // Pass `true` to indicate removal
    }
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    <div
    onClick={onClose}
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Fixed Search Input */}
        <div className="p-4">
          <input
            type="text"
            placeholder="O que você procura?"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto p-6" style={{ maxHeight: 'calc(100% - 64px)' }}>
          {groupsData.map((group) => (
            <div key={group.title} className="mb-4">
              <h2 className="text-sm px-4 py-2 rounded-md" style={{ backgroundColor: group.color }}>
                {group.title}
              </h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item.id} className="flex items-center py-2">
                    <ToggleButton
                      isToggled={toggles[item.id]}
                      onToggle={() => handleToggle(item.id, item.title, group.color, item.letter)} // Pass color and letter here
                      color={group.color}
                      letter={item.letter} // Pass the letter prop
                    />
                    <span className="ml-2 text-sm">{item.title}</span>
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
