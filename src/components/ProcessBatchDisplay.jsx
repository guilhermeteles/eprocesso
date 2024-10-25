import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ProcessBatchDisplay = ({ batchId, processes, onClose }) => {
  const [filteredProcesses, setFilteredProcesses] = useState([]);


  const getStatusColor = (status) => {
    switch (status) {
      case 'Em andamento':
        return 'bg-[#FEE685]'; // Yellow for pending
      case 'Completo':
        return 'bg-[#D4E5FF]'; // Blue for approved
      case 'Anulado':
        return 'bg-[#F8DFE2]'; // Red for rejected
      default:
        return 'bg-gray-200'; // Default color for other statuses
    }
  };
  
  useEffect(() => {
    // Filter processes based on the batchId
    const filtered = processes.filter(process => process.batchId === batchId);
    setFilteredProcesses(filtered);
  }, [batchId, processes]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking on overlay
    >
      <div
        className="bg-white w-[450px] px-6 pb-6 pt-4 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button onClick={onClose} className="absolute right-[5px] top-[10px] text-[#3D4551] font-bold w-8 h-8"> <i className="fas fa-xmark"></i></button>
        <h2 className="text-lg font-bold mb-4">Lote Fiscal Integrado</h2>
        {filteredProcesses.length === 0 ? (
          <p>No processes found for this batch.</p>
        ) : (
          <ul className="divide-y">
            {filteredProcesses.map(process => (
              <li key={process.id}  className="py-4 flex justify-between ">
                <a href="#" className="hover:underline hover:underline-offset-2 ">{process.title}</a>
                <span className={`px-2 py-1 rounded-sm text-xs text-gray-500 ${getStatusColor(process.status)}`}>{process.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

ProcessBatchDisplay.propTypes = {
  batchId: PropTypes.string.isRequired, // Batch ID to filter processes
  processes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    batchId: PropTypes.string.isRequired,
  })).isRequired,
  onClose: PropTypes.func.isRequired, // Function to close the display
};

export default ProcessBatchDisplay;
