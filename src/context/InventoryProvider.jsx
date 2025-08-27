
import { useReducer, useState, useEffect } from 'react';
import { InventoryContext, initialState } from './InventoryContext'; 
import { inventoryReducer } from './inventoryReducer';

export const InventoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  // Modal State 
    const [modalMessage, setModalMessage] = useState(''); 
    const [showModal, setShowModal] = useState(false); 
  
    // Modal Trigger
    const triggerModal = (itemId, actionType) => {
      const itemMap = state?.items;
      if (!itemMap) {
        console.warn('state.items is undefined or null');
        return;
      }

      const item = Object.values(itemMap).find(i => i.id === itemId);
      let verb;
      switch (actionType) {
        case 'add':
          verb = 'added to inventory';
          break;
        case 'drop':
          verb = 'dropped';
          break;
        case 'use':
          verb = 'used';
          break;
        default:
          verb = 'moved';
      }

      const message = item
        ? `${item.name} was ${verb}.`
        : `Item ${itemId} was ${actionType}.`;

      setModalMessage(message);
      setShowModal(true);
      console.log('Triggering modal:', message);
    };
    
    
    // Timer for Modal, disappear after 2 seconds
    useEffect(() => {
      if (showModal) {
        const timer = setTimeout(() => setShowModal(false), 2000);
        return () => clearTimeout(timer); 
      }
    }, [showModal]);
  

  return (
    <InventoryContext.Provider value={{ state, dispatch, modalMessage, showModal, setShowModal, triggerModal }}>
      {children}
    </InventoryContext.Provider>
  );
};

