import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Icons for tree expand/collapse
import { IconButton } from './IconButton'; // Import the IconButton component
import { Link } from 'react-router-dom';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const DocumentsAside = () => {
  const [viewMode, setViewMode] = useState('tree'); // 'tree' or 'chronological'
  const [selectedDocuments, setSelectedDocuments] = useState([]); // To store selected documents
  const [expandedParents, setExpandedParents] = useState({}); // Track which parents are expanded

  const documents = [
  {
    id: 1,
    name: 'Petição Inicial de Ação Civil',
    date: '2024-10-13',
    children: [
      {
        id: 2,
        name: 'Citação',
        date: '2024-10-14',
        children: [
          {
            id: 3,
            name: 'Resposta à Citação',
            date: '2024-10-15',
            children: [
              {
                id: 4,
                name: 'Contestação',
                date: '2024-10-16',
                children: [
                  {
                    id: 5,
                    name: 'Réplicas à Contestação',
                    date: '2024-10-17',
                    children: [
                      { id: 6, name: 'Juntada de Documentos', date: '2024-10-18' },
                      { id: 7, name: 'Pedido de Tutela Provisória', date: '2024-10-19' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Ação de Indenização',
    date: '2024-10-20',
    children: [
      {
        id: 9,
        name: 'Laudo Pericial',
        date: '2024-10-21',
        children: [
          {
            id: 10,
            name: 'Manifestação sobre o Laudo',
            date: '2024-10-22',
            children: [
              {
                id: 11,
                name: 'Pedido de Produção de Provas',
                date: '2024-10-23',
                children: [
                  { id: 12, name: 'Provas Documentais', date: '2024-10-24' },
                  { id: 13, name: 'Provas Testemunhais', date: '2024-10-25' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 14,
    name: 'Ação de Alimentos',
    date: '2024-10-26',
    children: [
      {
        id: 15,
        name: 'Pedido de Alimentos',
        date: '2024-10-27',
        children: [
          {
            id: 16,
            name: 'Decisão Judicial',
            date: '2024-10-28',
            children: [
              {
                id: 17,
                name: 'Recurso de Apelação',
                date: '2024-10-29',
                children: [
                  { id: 18, name: 'Contrarrazões', date: '2024-10-30' },
                  { id: 19, name: 'Juntada de Novos Documentos', date: '2024-10-31' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 20,
    name: 'Embargos de Declaração',
    date: '2024-11-01',
    children: [
      {
        id: 21,
        name: 'Decisão dos Embargos',
        date: '2024-11-02',
        children: [
          {
            id: 22,
            name: 'Recurso Especial',
            date: '2024-11-03',
            children: [
              {
                id: 23,
                name: 'Petição de Admissibilidade',
                date: '2024-11-04',
                children: [
                  { id: 24, name: 'Parecer do Ministério Público', date: '2024-11-05' },
                  { id: 25, name: 'Juntada de Novos Fatos', date: '2024-11-06' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 26,
    name: 'Ação de Usucapião',
    date: '2024-11-07',
    children: [
      {
        id: 27,
        name: 'Certidão de Registro de Imóveis',
        date: '2024-11-08',
        children: [
          {
            id: 28,
            name: 'Manifestação do Réu',
            date: '2024-11-09',
            children: [
              {
                id: 29,
                name: 'Relatório de Vistoria',
                date: '2024-11-10',
                children: [
                  { id: 30, name: 'Pedido de Desocupação', date: '2024-11-11' },
                  { id: 31, name: 'Protesto de Irregularidade', date: '2024-11-12' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];



  // Flattening documents into a single array for chronological display
  const getFlattenedDocuments = () => {
    const flattenedDocs = [];

    documents.forEach((parentDoc) => {
      flattenedDocs.push({ ...parentDoc }); // Add parent document

      parentDoc.children.forEach((childDoc) => {
        flattenedDocs.push({ ...childDoc, parentId: parentDoc.id }); // Add child document
      });
    });

    // Sort by date
    return flattenedDocs.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };
  

  // Toggle between tree and chronological views
  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'tree' ? 'chronological' : 'tree'));
  };

  // Handle checkbox change
  const handleCheckboxChange = (documentId) => {
    setSelectedDocuments((prevSelected) =>
      prevSelected.includes(documentId)
        ? prevSelected.filter((id) => id !== documentId)
        : [...prevSelected, documentId]
    );
  };

  // Toggle expanding/collapsing a parent document
  const toggleExpand = (parentId) => {
    setExpandedParents((prevExpanded) => ({
      ...prevExpanded,
      [parentId]: !prevExpanded[parentId],
    }));
  };

  // Expand all parent documents and their children recursively
const expandAll = () => {
  const allExpanded = {};

  // Recursive function to expand a document and its children
  const expandDocument = (doc) => {
    allExpanded[doc.id] = true; // Mark the current document as expanded
    // If the document has children, expand each of them recursively
    if (doc.children && doc.children.length > 0) {
      doc.children.forEach((child) => expandDocument(child));
    }
  };

  // Loop through all top-level documents
  documents.forEach((doc) => expandDocument(doc)); // Expand all documents

  setExpandedParents(allExpanded); // Set the expanded state
};

  // Contract all parent documents
  const contractAll = () => {
    setExpandedParents({});
  };

  // Clear selected documents
  const clearSelection = () => {
    setSelectedDocuments([]);
  };
  
// Recursive function to render documents
const renderDocuments = (docList, depth = 0) => {
  return (
    <ul className="ml-4"> {/* Fixed left margin for indentation */}
      {docList.map((doc) => (
        <li key={doc.id} className="mb-2" style={{ marginLeft: '20px' }}> {/* Fixed indentation for all levels */}
          <div className="flex items-center">
            {/* Conditionally render the chevron icon only if the document has children */}
            {doc.children && doc.children.length > 0 && (
              <button
                onClick={() => toggleExpand(doc.id)}
                className="mr-1.5"
              >
                <FontAwesomeIcon
                  icon={
                    expandedParents[doc.id] ? faChevronDown : faChevronRight
                  }
                  className="text-gray-700 h-2.5 w-2.5 mb-[3.5px]"
                />
              </button>
            )}
            <input
              type="checkbox"
              checked={selectedDocuments.includes(doc.id)}
              onChange={() => handleCheckboxChange(doc.id)}
              className="mr-1.5"
            />
            <Link
              to="/pdf-reader"
              state={{ fileName: doc.name }} // Passing file name in state
              className="text-sm text-[#3D4551] hover:underline cursor-pointer"
            >
              {doc.name}
            </Link>
          </div>

          {/* Child Documents (If expanded) */}
          {expandedParents[doc.id] && doc.children && doc.children.length > 0 && renderDocuments(doc.children, depth + 1)}
        </li>
      ))}
    </ul>
  );
};


  return (
    <aside className="bg-[#F7F9FA] rounded-lg overflow-hidden flex flex-col ">
      <div className='pt-4 px-4 border-b border-[#EDEFF0]'>
      {/* Header: Toggle and Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-medium text-[#3D4551]">Documentos</h2>

        {/* Switch-like toggle */}
      <div className="flex items-center space-x-1 mt-1">
        <FontAwesomeIcon 
          icon={faStream} 
          className={`cursor-pointer text-md ${viewMode === 'tree' ? 'text-blue-500' : 'text-gray-400'}`} 
          onClick={toggleViewMode} 
        />

        {/* Toggle Switch */}
        <div className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={viewMode === 'chronological'}
            onChange={toggleViewMode}
            className="sr-only peer"
            
          />
          <div onClick={toggleViewMode}  className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-white dark:border peer-checked:after:translate-x-full peer-checked:after:border after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-[#2672DE] after:border-[#2672DE] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"></div>
        </div>

        <FontAwesomeIcon 
          icon={faCalendar} 
          className={`cursor-pointer text-md ${viewMode === 'chronological' ? 'text-blue-500' : 'text-gray-400'}`} 
          onClick={toggleViewMode} 
        />
      </div>

      </div>

      {/* Search Input */}
      <div className="mb-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="O que você procura?"
          className="text-sm w-full px-3 py-2 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#fff]"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        
        <FontAwesomeIcon 
        icon={faMagnifyingGlass} 
        className={`cursor-pointer text-md ${viewMode === 'chronological' ? 'text-blue-500' : 'text-gray-400'}`} 
        onClick={toggleViewMode} 
      />
        </div>
        </div>

        {/* Expand All / Contract All (Visible in Tree View) */}
        {viewMode === 'tree' && (
          <div className="mt-6 flex justify-between text-sm">
            
            <button
              className="text-xs text-blue-500 underline hover:text-blue-700"
              onClick={contractAll}
            >
              Contrair Tudo
            </button>
            <button
              className="text-xs text-blue-500 underline hover:text-blue-700"
              onClick={expandAll}
            >
              Expandir Tudo
            </button>
          </div>
        )}
        {viewMode === 'chronological' && (
          <div className="mt-6 flex justify-between text-sm">
            
            <button
              className="text-xs text-blue-500 underline hover:text-blue-700"
              onClick={contractAll}
            >
              Crescente
            </button>
            <button
              className="text-xs text-blue-500 underline hover:text-blue-700"
              onClick={expandAll}
            >
              Decrescente
            </button>
          </div>
        )}
      </div>
      </div>

{/* Document List */}
<div className="p-4 bg-[#FBFCFD] rounded-md scroll-smooth overflow-y-auto h-svh grow overflow-x-hidden">
  {viewMode === 'tree' ? (
    <ul>
    {documents.map((doc) => (
      <li key={doc.id} className="mb-2">
        <div className="flex items-center">
          <button
            onClick={() => toggleExpand(doc.id)}
            className="mr-1.5"
          >
            <FontAwesomeIcon
              icon={
                expandedParents[doc.id] ? faChevronDown : faChevronRight
              }
              className="text-gray-700 h-2.5 w-2.5 mb-[3.5px]"
            />
          </button>
          <input
            type="checkbox"
            checked={selectedDocuments.includes(doc.id)}
            onChange={() => handleCheckboxChange(doc.id)}
            className="mr-1.5"
          />
          <Link
            to="/pdf-reader"
            state={{ fileName: doc.name }} // Passing file name in state
            className="text-sm text-[#3D4551] hover:underline cursor-pointer"
          >
            {doc.name}
          </Link>
        </div>

        {/* Child Documents (If expanded) */}
        {expandedParents[doc.id] && doc.children && doc.children.length > 0 && renderDocuments(doc.children)}
      </li>
    ))}
  </ul>
  ) : (
    <ul className="mt-2">
      {getFlattenedDocuments().map((doc) => (
        <li key={doc.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selectedDocuments.includes(doc.id)}
            onChange={() => handleCheckboxChange(doc.id)}
            className="mr-2 self-start mt-1.5"
          />
          <Link
            to="/pdf-reader"
            state={{ fileName: doc.name }} // Passing file name in state
            className="text-sm text-[#3D4551] hover:underline cursor-pointer"
          >
            {doc.name} &nbsp; <span className="text-xs text-[#919191]">{formatDate(doc.date)}</span>
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>


      {/* Footer: Selected Documents and Actions */}
      {selectedDocuments.length > 0 && (
        <div className="mt-auto">
          <div className="flex bg-[#2672DE]">
                <span className="px-3 py-2 text-white text-xs grow m-auto font-medium">
                {selectedDocuments.length} item(ns) selecionado(s)
                  
                </span>
                <button
                      onClick={clearSelection}
                      className="bg-[#F7F9FA] text-[#3D4551] pt-1 pb-1 px-2 text-xs my-2 me-2 rounded-sm "
                  >
                      Limpar
                  </button>
          </div>
          <div className="flex space-x-2 bg-[#0050D8] flex p-2 rounded-b-lg">
            {/* Group 1 */}
        <div className="flex flex-col">
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
            
          </div>
        </div>
      )}
    </aside>
  );
};

export default DocumentsAside;
