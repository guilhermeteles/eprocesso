import { useState } from 'react';

const Dashboard = ({ selectedItems, setSelectedItems }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [draggedOverItem, setDraggedOverItem] = useState(null);

  const cardsData = [
    { id: 1, title: "Widget 1", content: "This is some content for Widget 1." },
    { id: 2, title: "Widget 2", content: "This is some content for Widget 2." },
    { id: 3, title: "Widget 3", content: "This is some content for Widget 3." },
    { id: 4, title: "Widget 4", content: "This is some content for Widget 4." },
    { id: 5, title: "Widget 5", content: "This is some content for Widget 5." },
    { id: 6, title: "Widget 6", content: "This is some content for Widget 6." },
    { id: 7, title: "Widget 7", content: "This is some content for Widget 7." },
    { id: 8, title: "Widget 8", content: "This is some content for Widget 8." },
    { id: 11, title: "Widget 9", content: "This is some content for Widget 1." },
    { id: 12, title: "Widget 10", content: "This is some content for Widget 2." },
    { id: 13, title: "Widget 11", content: "This is some content for Widget 3." },
    { id: 14, title: "Widget 12", content: "This is some content for Widget 4." },
    { id: 15, title: "Widget 13", content: "This is some content for Widget 5." },
    { id: 16, title: "Widget 14", content: "This is some content for Widget 6." },
    { id: 17, title: "Widget 15", content: "This is some content for Widget 7." },
    { id: 18, title: "Widget 16", content: "This is some content for Widget 8." },
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
    <div className="min-h-screen bg-gray-100 p-6">


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {selectedItems.map((itemId, index) => {
  // Log the selectedItems and current itemId being processed
  console.log("Selected Items:", selectedItems);
  console.log("Processing Item ID:", itemId);

  const card = cardsData.find(card => card.id === itemId);
  
  // Log the card found (or not found)
  if (card) {
    console.log("Found Card:", card);
  } else {
    console.log("Card not found for Item ID:", itemId);
  }

  return card ? (
    <div
      key={card.id}
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => handleDragOver(e, index)}
      onDragLeave={handleDragLeave}
      onDrop={(e) => handleDrop(e, index)}
      className={`draggable-card bg-white rounded-lg shadow-lg transition-all ${
        draggedItem === index ? 'opacity-50' : ''
      } ${draggedOverItem === index ? 'border-2 border-blue-500' : ''}`}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">{card.title}</h2>
          <div className="cursor-move p-2 rounded-lg hover:bg-gray-100 flex items-center">
            <i className="text-gray-500 fa-solid fa-grip-vertical"></i>
          </div>
        </div>
        <p className="text-gray-600">{card.content}</p>
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
