import { useState } from 'react';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Icons for tree expand/collapse
import { IconButton } from './IconButton'; // Import the IconButton component
import { Link, useNavigate } from 'react-router-dom';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faStream } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp19 } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown19 } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

export const DocumentsAside = () => {
  const [viewMode, setViewMode] = useState('tree'); // 'tree' or 'chronological'
  const [selectedDocuments, setSelectedDocuments] = useState([]); // To store selected documents
  const [expandedParents, setExpandedParents] = useState({}); // Track which parents are expanded
  const [pageNumber, setPageNumber] = useState(''); // State for the page number input
  const navigate = useNavigate();

  const documents = [
    {
      id: 1, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Petição Inicial de Ação Civil',
      page: '81-85',
      children: [
        {
          id: 2, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Citação',
          page: '46-50',
          children: [
            {
              id: 3, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Resposta à Citação',
              page: '101-102',
              children: [
                {
                  id: 4, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Contestação',
                  page: '110-114',
                  children: [
                    {
                      id: 5, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                      name: 'Réplicas à Contestação',
                      page: '36-40',
                      children: [
                        { id: 6, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Juntada de Documentos', page: '1-5' },
                        { id: 7, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Pedido de Tutela Provisória', page: '57-61' },
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
      id: 8, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Ação de Indenização',
      page: '16-20',
      children: [
        {
          id: 9, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Laudo Pericial',
          page: '103-104',
          children: [
            {
              id: 10, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Manifestação sobre o Laudo',
              page: '67-71',
              children: [
                {
                  id: 11, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Pedido de Produção de Provas',
                  page: '72-76',
                  children: [
                    { id: 12, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Provas Documentais', page: '115-119' },
                    { id: 13, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Provas Testemunhais', page: '77-78' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 14, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Ação de Alimentos',
      page: '6-10',
      children: [
        {
          id: 15, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Pedido de Alimentos',
          page: '11-15',
          children: [
            {
              id: 16, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Decisão Judicial',
              page: '54-56',
              children: [
                {
                  id: 17, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Recurso de Apelação',
                  page: '21-25',
                  children: [
                    { id: 18, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Contrarrazões', page: '41-45' },
                    { id: 19, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Juntada de Novos Documentos', page: '28-30' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 20, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Embargos de Declaração',
      page: '96-100',
      children: [
        {
          id: 21, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Decisão dos Embargos',
          page: '31-35',
          children: [
            {
              id: 22, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Recurso Especial',
              page: '50-53',
              children: [
                {
                  id: 23, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Petição de Admissibilidade',
                  page: '125-126',
                  children: [
                    { id: 24, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Parecer do Ministério Público', page: '62-66' },
                    { id: 25, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Juntada de Novos Fatos', page: '120-124' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 26, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
      name: 'Ação de Usucapião',
      page: '3-5',
      children: [
        {
          id: 27, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
          name: 'Certidão de Registro de Imóveis',
          page: '86-90',
          children: [
            {
              id: 28, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
              name: 'Manifestação do Réu',
              page: '47-50',
              children: [
                {
                  id: 29, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).',
                  name: 'Relatório de Vistoria',
                  page: '105-109',
                  children: [
                    { id: 30, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Pedido de Desocupação', page: '95-99' },
                    { id: 31, situacao: 'MINUTA', tamanho: '1,739 MB', pendjuntada: '0 Assinatura(s) Realizada(s) 2 Assinatura(s) pendente(s).', name: 'Protesto de Irregularidade', page: '35-40' },
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

  // Handle page number input change
  const handlePageInputChange = (e) => {
    setPageNumber(e.target.value);
  };

  // Search for the document containing the page and select it
  const handleSearchPage = () => {
    if (!pageNumber) return; // If no input, do nothing
  
    const searchPage = Number(pageNumber);
  
    const findDocument = (docs) => {
      for (const doc of docs) {
        const [start, end] = doc.page.split('-').map(Number);
        if (searchPage >= start && searchPage <= end) {
          return doc; // Return the matching document
        }
        if (doc.children && doc.children.length > 0) {
          const childResult = findDocument(doc.children);
          if (childResult) {
            return childResult; // Return the matching child document
          }
        }
      }
      return null;
    };
  
    const foundDoc = findDocument(documents);
  
    if (foundDoc) {
      // Navigate to the document's PDF viewer
      navigate('/pdf-reader', { state: { fileName: foundDoc.name, docId: foundDoc.id } });
  
      // Select the checkbox of the found document after navigation
      setTimeout(() => {
        setSelectedDocuments((prevSelected) =>
          prevSelected.includes(foundDoc.id)
            ? prevSelected
            : [...prevSelected, foundDoc.id]
        );
      }, 100); // Delay to ensure navigation happens first
    } else {
      alert('Page not found in any document');
    }
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

  const getDocumentDetails = (id) => {
    return documents.find((doc) => doc.id === id);
  };
  return (
    <aside className="bg-[#1351B4] flex flex-col h-full">
      <div className='p-[5px] '>
        {/* Header: Toggle and Title */}
        <div className="flex justify-between text-white">
          {/* Switch-like toggle */}
          <div className="flex items-center space-x-1 ml-2">
            <FontAwesomeIcon
              icon={faStream}
              className={`cursor-pointer text-md ${viewMode === 'tree' ? 'text-white' : 'opacity-35'}`}
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
              className={`pb-0.5 cursor-pointer text-md ${viewMode === 'chronological' ? 'text-white' : 'opacity-35'}`}
              onClick={toggleViewMode}
            />
          </div>
          {/* <h2 className="text-md font-medium text-[#3D4551]">Documentos</h2> */}
          {viewMode === 'tree' && (
            <div className=" flex justify-between text-sm gap-4 bg-[#1A4480] p-1.5 rounded-md">

              <button
                className="text-xs underline hover:text-gray-100 border-r-1 border-white"
                onClick={contractAll}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className='w-3 -mr-1 ml-1'
                />
              </button>
              <button
                className="text-xs underline hover:text-gray-100"
                onClick={expandAll}
              >
                <FontAwesomeIcon
                  icon={faBarsStaggered}
                  className='w-3 -mr-1 ml-1'
                />
              </button>
              <div className='flex gap-1'>

              <input className='px-2 w-16 rounded text-gray-700' placeholder='Pg. #'type="number"
                  value={pageNumber}
                  onChange={handlePageInputChange}></input><button className='rounded bg-[#1351B4] px-2' onClick={handleSearchPage}>Ir</button>
              </div>
            </div>
          )}
          {viewMode === 'chronological' && (
            <div className="flex justify-between text-sm gap-2 bg-[#1A4480] p-1.5 rounded-md">

              <button
                className="text-md underline hover:text-gray-100 w-5"
                onClick={showChronologicalView}
              >
               
                <FontAwesomeIcon
                  icon={faArrowUp19}
                />
              </button>
              
              <button
                className="text-md underline hover:text-gray-100 w-5"
                onClick={showAntiChronologicalView}
              >
            
                <FontAwesomeIcon
                  icon={faArrowDown19}
                />
              </button>
              <div className='flex gap-1'>

              <input className='px-2 w-14 rounded text-gray-700' placeholder='Pg. #'></input><button className='rounded bg-[#1351B4] px-2'>Ir</button>
              </div>
            </div>
          )}
          

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
                    {doc.name}
                  </Link>&nbsp;&nbsp;&nbsp;&nbsp;
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

          {/* Green strip for single document selection */}
          {selectedDocuments.length === 1 && (
            <div className="bg-gray-800 p-4 text-white font-medium">
              {(() => {
                const documentDetails = getDocumentDetails(selectedDocuments[0]);
                return documentDetails ? (
                  <>
                    <div className='flex flex-col gap-2 text-white'>
                      <div className='flex justify-between gap-2'>
                        <div className='flex flex-col bg-gray-600 py-2 px-4 rounded rounded-md grow'>
                          <span className='font-bold text-xs'>
                            Folhas
                          </span>
                          <span className='text-sm text-nowrap'>
                            {documentDetails.page}
                          </span>
                        </div>
                        <div className='flex flex-col bg-gray-600 py-2 px-4 rounded rounded-md grow'>
                          <span className='font-bold text-xs'>
                            Situação
                          </span>
                          <span className='text-sm text-nowrap'>
                            {documentDetails.situacao}
                          </span>
                        </div>
                        <div className='flex flex-col bg-gray-600 py-2 px-4 rounded rounded-md grow'>
                          <span className='font-bold text-xs'>
                            Tamanho
                          </span>
                          <span className='text-sm text-nowrap'>
                            {documentDetails.tamanho}
                          </span>
                        </div>
                      </div>

                      <div className='flex flex-col bg-gray-600 py-2 px-4 rounded rounded-md'>
                        <span className='font-bold text-xs'>
                          Pendência de Juntada
                        </span>
                        {documentDetails.pendjuntada.split("Realizada(s)").map((text, index) => (
                          <span key={index} className="block text-sm">
                            {index === 0 ? `${text}realizada(s).` : text.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                  </>
                ) : (
                  <span className="px-3 py-2">Document details not found.</span>
                );
              })()}
            </div>
          )}

          <div className="flex bg-[#2672DE] px-2 text-white font-medium text-sm items-center justify-between">
            <span className="px-3 py-2 font-semibold">
              {selectedDocuments.length} item(ns) selecionado(s)
            </span>
            <button
              onClick={clearSelection}
              className="bg-white text-[#3D4551] py-1.5 px-3 text-xs font-semibold my-2 me-2 rounded-full "
            >
              Limpar
            </button>
          </div>

          <div className="flex space-x-2 bg-[#0050D8] flex p-4">
            <IconButton
              icon="fa-solid fa-bookmark"
              name="Home"
              textColor='#1A4480'
              color='#EBE3F9'
            />
            <IconButton
              icon="fa-solid fa-file-arrow-up"
              name="Home"
              textColor='#1A4480'
              color='#E0E0FF'
            />
            <IconButton
              icon="fa-solid fa-file-medical"
              name="Profile"
              textColor='#1A4480'
              color='#E0E0FF'
            />
            <IconButton
              icon="fa-solid fa-file-signature"
              name="Settings"
              textColor='#1A4480'
              color='#E0E0FF'
            />
            <IconButton
              icon="fa-solid fa-trash-can"
              name="Messages"
              textColor='#1A4480'
              color='#E0E0FF'
            />
            <IconButton
              icon="fa-solid fa-circle-info"
              name="Notifications"
              textColor='#1A4480'
              color='#E0E0FF'
            />
            <IconButton
              icon="fa-solid fa-download"
              name="Notifications"
              textColor='#1A4480'
              color='#E0E0FF'
            />


          </div>
        </div>
      )}

    </aside>
  );
};

export default DocumentsAside;
