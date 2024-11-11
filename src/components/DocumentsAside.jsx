import { useState } from 'react';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Icons for tree expand/collapse
import { IconButton } from './IconButton'; // Import the IconButton component
import { Link } from 'react-router-dom';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DocumentsAside = () => {
  const [viewMode, setViewMode] = useState('tree'); // 'tree' or 'chronological'
  const [selectedDocuments, setSelectedDocuments] = useState([]); // To store selected documents
  const [expandedParents, setExpandedParents] = useState({}); // Track which parents are expanded

  const documents = [
    {
      id: 1,
      name: 'Petição Inicial de Ação Civil',
      page: '81-85',
      children: [
        {
          id: 2,
          name: 'Citação',
          page: '46-50',
          children: [
            {
              id: 3,
              name: 'Resposta à Citação',
              page: '101-102',
              children: [
                {
                  id: 4,
                  name: 'Contestação',
                  page: '110-114',
                  children: [
                    {
                      id: 5,
                      name: 'Réplicas à Contestação',
                      page: '36-40',
                      children: [
                        { id: 6, name: 'Juntada de Documentos', page: '1-5' },
                        { id: 7, name: 'Pedido de Tutela Provisória', page: '57-61' },
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
      page: '16-20',
      children: [
        {
          id: 9,
          name: 'Laudo Pericial',
          page: '103-104',
          children: [
            {
              id: 10,
              name: 'Manifestação sobre o Laudo',
              page: '67-71',
              children: [
                {
                  id: 11,
                  name: 'Pedido de Produção de Provas',
                  page: '72-76',
                  children: [
                    { id: 12, name: 'Provas Documentais', page: '115-119' },
                    { id: 13, name: 'Provas Testemunhais', page: '77-78' },
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
      page: '6-10',
      children: [
        {
          id: 15,
          name: 'Pedido de Alimentos',
          page: '11-15',
          children: [
            {
              id: 16,
              name: 'Decisão Judicial',
              page: '54-56',
              children: [
                {
                  id: 17,
                  name: 'Recurso de Apelação',
                  page: '21-25',
                  children: [
                    { id: 18, name: 'Contrarrazões', page: '41-45' },
                    { id: 19, name: 'Juntada de Novos Documentos', page: '28-30' },
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
      page: '96-100',
      children: [
        {
          id: 21,
          name: 'Decisão dos Embargos',
          page: '31-35',
          children: [
            {
              id: 22,
              name: 'Recurso Especial',
              page: '50-53',
              children: [
                {
                  id: 23,
                  name: 'Petição de Admissibilidade',
                  page: '125-126',
                  children: [
                    { id: 24, name: 'Parecer do Ministério Público', page: '62-66' },
                    { id: 25, name: 'Juntada de Novos Fatos', page: '120-124' },
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
      page: '3-5',
      children: [
        {
          id: 27,
          name: 'Certidão de Registro de Imóveis',
          page: '86-90',
          children: [
            {
              id: 28,
              name: 'Manifestação do Réu',
              page: '47-50',
              children: [
                {
                  id: 29,
                  name: 'Relatório de Vistoria',
                  page: '105-109',
                  children: [
                    { id: 30, name: 'Pedido de Desocupação', page: '95-99' },
                    { id: 31, name: 'Protesto de Irregularidade', page: '35-40' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  
  


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
  const renderDocuments = (docList) => {
    return docList.map((doc) => (
      <li key={doc.id} className="whitespace-nowrap">
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
            <span className="text-xs text-[#aaa] mr-1">{doc.page}</span>
            {doc.name}&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </div>
  
        {/* Recursively render children if expanded */}
        {expandedParents[doc.id] && doc.children && doc.children.length > 0 && (
          <ul className="ml-4">
            {renderDocuments(doc.children)}
          </ul>
        )}
      </li>
    ));
  };
  


  // Recursive function to render documents with an option for reverse order
  const renderChronologicalDocuments = (docList, reverse = false) => {
    // Sort the list by the numeric starting page
    const sortedDocList = [...docList].sort((a, b) => {
      const startPageA = parseInt(a.page.split('-')[0], 10);
      const startPageB = parseInt(b.page.split('-')[0], 10);
      return reverse ? startPageB - startPageA : startPageA - startPageB;
    });
  
    const listItems = sortedDocList.map((doc) => (
      <li key={doc.id} className="flex items-center whitespace-nowrap">
        <input
          type="checkbox"
          checked={selectedDocuments.includes(doc.id)}
          onChange={() => handleCheckboxChange(doc.id)}
          className="mr-2 self-start mt-[5px]"
        />
        <Link
          to="/pdf-reader"
          state={{ fileName: doc.name }} // Passing file name in state
          className="text-sm text-[#3D4551] hover:underline cursor-pointer"
        >
          <span className="text-xs text-[#aaa]">{doc.page}</span>
          &nbsp;
          {doc.name}&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
      </li>
    ));
  
    // If the current document has children, call the function recursively
    // sortedDocList.forEach((doc) => {
    //   if (doc.children && doc.children.length > 0) {
    //     listItems.push(...renderChronologicalDocuments(doc.children, reverse).props.children);
    //   }
    // });
  
    return <ul className="mt-2">{listItems}</ul>;
  };
  


// Function to get all documents in a one-dimensional array and sort by date
const AllDocumentsArray = (documents) => {
  const flattenDocuments = (docs) => {
    let result = []; // Initialize the result array

    docs.forEach((doc) => {
      result.push(doc); // Add the current document
      if (doc.children && doc.children.length > 0) {
        // Recursively flatten the children
        result = result.concat(flattenDocuments(doc.children));
      }
    });

    return result; // Return the flattened result
  };

  // Flatten the documents
  const flattenedDocs = flattenDocuments(documents);

  // Sort the flattened documents by date (assumes doc.date is a Date object or a string that can be parsed into a date)
  const sortedDocs = flattenedDocs.sort((a, b) => {
    return new Date(a.date) - new Date(b.date); // Change to b.date - a.date for descending order
  });

  return sortedDocs; // Return the sorted flattened documents
};

  // Component rendering the chronological view
  const ChronologicalView = () => {
    const flattenDocuments = AllDocumentsArray(documents); // Get top-level documents

    return (
      <div>
        {renderChronologicalDocuments(flattenDocuments)}
      </div>
    );
  };

  // Component rendering the chronological view
  const AntiChronologicalView = () => {
    const flattenDocuments = AllDocumentsArray(documents).reverse(); // Get top-level documents

    return (
      <div>
        {renderChronologicalDocuments(flattenDocuments)}
      </div>
    );
  };


const [chronos, setChronos] = useState('crescente'); // Set default view mode

  // Function to change view to chronological
  const showChronologicalView = () => {
    setChronos('crescente');
  };

  // Function to change view to anti-chronological
  const showAntiChronologicalView = () => {
    setChronos('decrescente');
  };

  return (
    <aside className="bg-[#fff] flex flex-col h-full">
      <div className='p-4 border-b border-[#EDEFF0]'>
        {/* Header: Toggle and Title */}
        <div className="flex justify-between">
          {/* <h2 className="text-md font-medium text-[#3D4551]">Documentos</h2> */}
          {viewMode === 'tree' && (
            <div className=" flex justify-between text-sm gap-4">

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
            <div className="flex justify-between text-sm gap-4">

              <button
                className="text-xs text-blue-500 underline hover:text-blue-700"
                onClick={showChronologicalView}
              >
                Crescente
              </button>
              <button
                className="text-xs text-blue-500 underline hover:text-blue-700"
                onClick={showAntiChronologicalView}
              >
                Decrescente
              </button>
            </div>
          )}
          {/* Switch-like toggle */}
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon
              icon={faStream}
              className={`cursor-pointer text-md ${viewMode === 'tree' ? 'text-blue-500' : 'text-gray-400'}`}
              onClick={toggleViewMode}
            />

            {/* Toggle Switch */}
            <div className="relative items-center cursor-pointer">
              <input
                type="checkbox"
                checked={viewMode === 'chronological'}
                onChange={toggleViewMode}
                className="sr-only peer"

              />
              <div onClick={toggleViewMode} className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-white dark:border peer-checked:after:translate-x-full peer-checked:after:border after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-[#2672DE] after:border-[#2672DE] after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"></div>
            </div>

            <FontAwesomeIcon
              icon={faCalendar}
              className={`cursor-pointer text-md ${viewMode === 'chronological' ? 'text-blue-500' : 'text-gray-400'}`}
              onClick={toggleViewMode}
            />
          </div>

        </div>


     
      </div>

      {/* Document List */}
      <div className="px-2 py-2 bg-[#fff] scroll-smooth overflow-auto grow">
  {viewMode === 'tree' ? (
    <ul>
      {documents.map((doc) => (
        <li key={doc.id} className="whitespace-nowrap">
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
              <span className="text-xs text-[#aaa] mr-1">{doc.page}</span>
              {doc.name}&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </div>

          {/* Child Documents (If expanded) */}
          {expandedParents[doc.id] && doc.children && doc.children.length > 0 && (
            <ul className="ml-4">
              {renderDocuments(doc.children)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  ) : (
    <div>
      {chronos === 'crescente' ? <ChronologicalView /> : <AntiChronologicalView />}
    </div>
  )}
</div>




      {/* Footer: Selected Documents and Actions */}
      {selectedDocuments.length > 0 && (
        <div className="mt-auto z-50">
          <div className="flex bg-[#2672DE]">
            <span className="px-3 py-2 text-white text-xs grow m-auto font-medium">
              {selectedDocuments.length} item(ns) selecionado(s)

            </span>
            <button
              onClick={clearSelection}
              className="bg-white text-[#3D4551] py-1.5 px-3 text-xs font-semibold my-2 me-2 rounded-full "
            >
              Limpar
            </button>
          </div>
          <div className="flex space-x-2 bg-[#0050D8] flex p-2">
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
