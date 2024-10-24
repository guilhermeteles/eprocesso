import { useState } from "react";
const PageNumber = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [pageNumber, setPageNumber] = useState(1); // Default page number
  
    const handleBlur = (e) => {
      const newPageNumber = e.target.value || pageNumber;
      setPageNumber(newPageNumber);
      setIsEditing(false);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.target.blur();
      }
    };
  
    return (
      <div className="inline-block   cursor-pointer h-8">
        {isEditing ? (
          <input
            type="text"
            value={pageNumber}
            onChange={(e) => setPageNumber(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-12 text-center text-[#3D4551] rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditing(true)}>
            {pageNumber}/16
          </span>
        )}
      </div>
    );
  };
  
  export default PageNumber;