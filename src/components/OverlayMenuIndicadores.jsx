import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { groupsData } from './indicatorsData';

const IndicatorsManager = ({ selectedIndicators, setselectedIndicators }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!selectedIndicators?.length) {
      const initialselectedIndicators = [];
      let itemCount = 0;

      for (const group of groupsData) {
        for (const item of group.items) {
          if (itemCount < 8) {
            initialselectedIndicators.push(item.id);
            itemCount++;
          }
        }
      }

      setselectedIndicators(initialselectedIndicators);
    }
  }, [setselectedIndicators, selectedIndicators]);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const toggleButtonState = (id) => {
    setselectedIndicators(prevItems => {
      const updatedItems = new Set(prevItems);
      if (updatedItems.has(id)) {
        updatedItems.delete(id);
      } else {
        updatedItems.add(id);
      }
      return Array.from(updatedItems);
    });
  };

  return (
    <div className='mt-2'>
      <div
        className="text-xs flex justify-end items-center text-[#919191] cursor-pointer mb-1"
        onClick={toggleModal}
      >
        Gerenciar Indicadores <i className="ms-1 fa-solid fa-cog"></i>
      </div>

      {isModalOpen && (
        <div onClick={toggleModal} className="fixed inset-0 flex flex-col items-end justify-center z-50 bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 shadow-lg h-svh overflow-y-auto w-96">
            <div className='flex justify-between items-center relative'>
              <h2 className="text-sm px-4 py-2 rounded-md bg-[#92D9BB] w-full mb-2 font-semibold text-[#3D4551]">
                Gerenciar Indicadores
              </h2>
              <button onClick={toggleModal} className="absolute right-[0px] top-[2px] text-white font-bold w-8 h-8">
                <i className="fas fa-xmark"></i>
              </button>
            </div>

            <div>
              {groupsData.map((group, groupIndex) => (
                <div key={`${group.color}-${groupIndex}`} className="flex flex-col gap-2">
                  {group.title && (
                    <h2 className="my-4 text-sm px-4 py-2 rounded-md font-semibold text-[#3D4551] mb-2" style={{ backgroundColor: group.color }}>
                      {group.title}
                    </h2>
                  )}
                  {group.items.map(item => (
                    <div key={item.id} className='flex gap-2 items-center mb-1'>
                      <button
                        onClick={() => toggleButtonState(item.id)}
                        style={{
                          border: `2px solid ${group.color}`,
                          color: selectedIndicators.includes(item.id) ? 'white' : '#3D4551',
                          backgroundColor: selectedIndicators.includes(item.id) ? group.color : 'transparent',
                          borderRadius: '0.25rem',
                        }}
                        className="flex items-center justify-center h-8 w-8"
                      >
                        {selectedIndicators.includes(item.id) ? (
                          <i className="fas fa-eye-slash"></i>
                        ) : (
                          <i className="fas fa-eye"></i>
                        )}
                      </button>
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

IndicatorsManager.propTypes = {
  selectedIndicators: PropTypes.arrayOf(PropTypes.number).isRequired,
  setselectedIndicators: PropTypes.func.isRequired,
};

export default IndicatorsManager;