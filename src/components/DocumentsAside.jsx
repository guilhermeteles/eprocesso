import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faClock, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Icons for tree expand/collapse
import { IconButton } from './IconButton'; // Import the IconButton component
import { Link } from 'react-router-dom';

export const DocumentsAside = () => {
  const [viewMode, setViewMode] = useState('tree'); // 'tree' or 'chronological'
  const [selectedDocuments, setSelectedDocuments] = useState([]); // To store selected documents
  const [expandedParents, setExpandedParents] = useState({}); // Track which parents are expanded

  const documents = [
    {
      id: 1,
      name: 'Parent Document 1',
      date: '2024-10-13',
      children: [
        { id: 4, name: 'Child Document 1.1', date: '2024-10-15' },
        { id: 5, name: 'Child Document 1.2', date: '2024-10-18' },
      ],
    },
    {
      id: 2,
      name: 'Parent Document 2',
      date: '2024-10-14',
      children: [{ id: 6, name: 'Child Document 2.1', date: '2024-10-23' }],
    },
    {
      id: 3,
      name: 'Parent Document 3',
      date: '2024-10-15',
      children: [],
    },
    {
      id: 7,
      name: 'Parent Document 4',
      date: '2024-10-16',
      children: [
        { id: 10, name: 'Child Document 1.1', date: '2024-10-15' },
        { id: 11, name: 'Child Document 1.2', date: '2024-10-21' },
      ],
    },
    {
      id: 8,
      name: 'Parent Document 5',
      date: '2024-10-17',
      children: [{ id: 12, name: 'Child Document 2.1', date: '2024-10-14' }],
    },
    {
      id: 9,
      name: 'Parent Document 6',
      date: '2024-10-11',
      children: [],
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

  // Expand all parent documents
  const expandAll = () => {
    const allExpanded = {};
    documents.forEach((doc) => {
      allExpanded[doc.id] = true;
    });
    setExpandedParents(allExpanded);
  };

  // Contract all parent documents
  const contractAll = () => {
    setExpandedParents({});
  };

  // Clear selected documents
  const clearSelection = () => {
    setSelectedDocuments([]);
  };

  return (
    <aside className="p-4 bg-gray-100 rounded-md overflow-hidden flex flex-col">
      {/* Header: Toggle and Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Documentos</h2>

        {/* Switch-like toggle */}
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon 
          icon={faList} 
          className={`cursor-pointer text-xl ${viewMode === 'tree' ? 'text-blue-500' : 'text-gray-400'}`} 
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
          <div onClick={toggleViewMode}  className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
        </div>

        <FontAwesomeIcon 
          icon={faClock} 
          className={`cursor-pointer text-xl ${viewMode === 'chronological' ? 'text-blue-500' : 'text-gray-400'}`} 
          onClick={toggleViewMode} 
        />
      </div>

      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="O que você procura?"
          className="text-sm w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F9FA]"
        />

        {/* Expand All / Contract All (Visible in Tree View) */}
        {viewMode === 'tree' && (
          <div className="mt-4 flex justify-between text-sm">
            <button
              className="text-xs text-blue-500 underline hover:text-blue-700"
              onClick={expandAll}
            >
              Expandir Tudo
            </button>
            <button
              className="text-xs text-blue-500 underline hover:text-blue-700"
              onClick={contractAll}
            >
              Contrair Tudo
            </button>
          </div>
        )}
      </div>


{/* Document List */}
<div className="p-4 bg-[#FBFCFD] rounded-md scroll-smooth overflow-y-auto h-svh grow">
  {viewMode === 'tree' ? (
    <ul>
      {documents.map((parentDoc) => (
        <li key={parentDoc.id} className="mb-2">
          <div className="flex items-center">
            <button
              onClick={() => toggleExpand(parentDoc.id)}
              className="mr-1.5"
            >
              <FontAwesomeIcon
                icon={
                  expandedParents[parentDoc.id]
                    ? faChevronDown
                    : faChevronRight
                }
                className="text-gray-700 h-2.5 w-2.5 mb-0.5"
              />
            </button>
            <input
              type="checkbox"
              checked={selectedDocuments.includes(parentDoc.id)}
              onChange={() => handleCheckboxChange(parentDoc.id)}
              className="mr-2"
            />
            <Link
              to="/pdf-reader"
              state={{ fileName: parentDoc.name }} // Passing file name in state
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              {parentDoc.name}
            </Link>
          </div>

          {/* Child Documents (If expanded) */}
          {expandedParents[parentDoc.id] && (
            <ul className="ml-6 mt-2">
              {parentDoc.children.map((childDoc) => (
                <li key={childDoc.id} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    checked={selectedDocuments.includes(childDoc.id)}
                    onChange={() => handleCheckboxChange(childDoc.id)}
                    className="mr-2"
                  />
                  <Link
                    to="/pdf-reader"
                    state={{ fileName: childDoc.name }} // Passing file name in state
                    className="text-sm text-blue-600 hover:underline cursor-pointer"
                  >
                    {childDoc.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
            className="text-sm text-blue-600 hover:underline cursor-pointer"
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
                <span className="p-2 py-2 text-white text-xs grow m-auto">
                {selectedDocuments.length} item(ns) selecionado(s)
                  
                </span>
                <button
                      onClick={clearSelection}
                      className="bg-red-500 text-white p-1 text-sm my-2 me-2 rounded-sm text-xs"
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
