// src/pages/Dashboard.jsx
const Dashboard = ({ selectedItems }) => {
  const cardsData = [
    { id: 1, title: "Widget 1", content: "This is some content for Widget 1." },
    { id: 2, title: "Widget 2", content: "This is some content for Widget 2." },
    { id: 3, title: "Widget 3", content: "This is some content for Widget 3." },
    { id: 4, title: "Widget 4", content: "This is some content for Widget 4." },
    { id: 5, title: "Widget 5", content: "This is some content for Widget 5." },
    { id: 6, title: "Widget 6", content: "This is some content for Widget 1." },
    { id: 7, title: "Widget 7", content: "This is some content for Widget 2." },
    { id: 8, title: "Widget 8", content: "This is some content for Widget 3." },
    { id: 11, title: "Widget 11", content: "This is some content for Widget 1." },
    { id: 12, title: "Widget 12", content: "This is some content for Widget 2." },
    { id: 13, title: "Widget 13", content: "This is some content for Widget 3." },
    { id: 14, title: "Widget 14", content: "This is some content for Widget 4." },
    { id: 15, title: "Widget 15", content: "This is some content for Widget 5." },
    { id: 16, title: "Widget 16", content: "This is some content for Widget 1." },
    { id: 17, title: "Widget 17", content: "This is some content for Widget 2." },
    { id: 18, title: "Widget 18", content: "This is some content for Widget 3." },
  ];
    return (
        <div>
          {/* Sidebar */}
          
    
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Top Menu */}
      
            {/* Main Content */}
            <div className="px-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {selectedItems.map(itemId => {
                  const card = cardsData.find(card => card.id === itemId);
                  return card ? (
                    <div key={card.id} className="bg-white p-4 rounded-lg shadow-lg">
                      <h2 className="text-xl font-semibold">{card.title}</h2>
                      <p className="text-gray-600">{card.content}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div>
          </div>

      );
  };
  
  export default Dashboard;
  