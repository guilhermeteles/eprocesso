import PropTypes from 'prop-types';
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
  {
    title: "Alegações",
    color: "#FEE685",
    items: [
      { id: 9, title: "Consultar Alegações", letter: "A" },
      { id: 10, title: "Definir Últimas Alegações do Processo", letter: "D" },
    ],
  },
  {
    title: "Processo",
    color: "#DFEACD",
    items: [
      { id: 11, title: "Alterar Realização da Atividade", letter: "B" },
      { id: 12, title: "Arquivar Processo", letter: "P" },
      { id: 13, title: "Consultar Procurações", letter: "K" },
      { id: 14, title: "Informar/Alterar Grupo-Tipo-Subtipo do Processo", letter: "T" },
    ],
  },
  {
    title: "Gestão de Tarefas",
    color: "#C7EFE2",
    items: [
      { id: 15, title: "Definir Próxima Tarefa", letter: "N" },
      { id: 16, title: "Consultar/Incluir Interessados no Processo", letter: "F" },
    ],
  },
  {
    title: "Grau de Complexidade",
    color: "#C3EBFA",
    items: [
      { id: 17, title: "Classificar ACT e Tema do Processo", letter: "C" },
      { id: 18, title: "Consultar Fichas de Quesitos", letter: "Q" },
      { id: 19, title: "Responder Ficha de Quesitos", letter: "R" },
      { id: 20, title: "Exibir Histórico de Hora Estimada", letter: "S" },
      { id: 21, title: "Apurar Grau do Processo", letter: "G" },
      { id: 22, title: "Visualizar Apuração de Grau", letter: "V" },
    ],
  },
  {
    title: "Histórico",
    color: "#E0E0FF",
    items: [
      { id: 23, title: "Consultar Histórico de Questionamentos", letter: "H" },
      { id: 24, title: "Consultar Questionamentos (Antigo)", letter: "J" },
    ],
  },
  {
    title: "Julgamento",
    color: "#F6DFF8",
    items: [
      { id: 25, title: "Incluir / Alterar / Cancelar Questionamento", letter: "C" },
      { id: 26, title: "Incluir / Alterar / Excluir Ementa", letter: "E" },
      { id: 27, title: "Indicar para Pauta", letter: "M" },
      { id: 28, title: "Informar Resultado do Exame de Admissibilidade", letter: "Y" },
      { id: 29, title: "Informar Resultado Monocrático", letter: "O" },
      { id: 30, title: "Retificar Registro de Último Resultado Monocrático", letter: "R" },
      { id: 31, title: "Retirar Indicação para Pauta", letter: "T" },
      { id: 32, title: "Retirar Relator", letter: "X" },
      { id: 33, title: "Julgar Admissibilidade (Antigo)", letter: "W" },
    ],
  },
  {
    title: "Documentos",
    color: "#FFDDEA",
    items: [
      { id: 34, title: "Juntar/Vincular", letter: "J" },
      { id: 35, title: "Consultar Juntada/Vínculo", letter: "K" },
      { id: 36, title: "Juntar por Anexação", letter: "A" },
      { id: 37, title: "Vincular", letter: "V" },
      { id: 38, title: "Todos os Documentos", letter: "T" },
      { id: 39, title: "Imprimir", letter: "I" },
      { id: 40, title: "Obter Cópia", letter: "C" },
      { id: 41, title: "Priorizar Geração da Versão Pesquisável", letter: "P" },
    ],
  },
  {
    title: "Legado",
    color: "#EDEFF0",
    items: [
      { id: 42, title: "Apurar Grau do Processo", letter: "A" },
      { id: 43, title: "Visualizar Apuração de Grau", letter: "V" },
      { id: 44, title: "Consultar Questionamentos", letter: "C" },
      { id: 45, title: "Indicar Processo para Pauta", letter: "I" },
      { id: 46, title: "Julgar Admissibilidade", letter: "J" },
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
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
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
