import { useDroppable } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';
import { useInventory } from '../context/InventoryContext';

export default function Inventory() {
  const { state } = useInventory();
  const { setNodeRef, isOver } = useDroppable({ id: 'inventory' });

  return (
    <div
      ref={setNodeRef}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '6vw',
        background: isOver ? '#def' : '#f8f8f87a',
        borderTop: '2px solid #ccc',
        padding: '1rem',
        display: 'flex',
        gap: '1rem',
        overflowX: 'auto',
        zIndex: '100',
        margin: '0 2rem 2rem 2rem',
        borderRadius: '15px',
        alignItems: 'center', // <-- Added to center items vertically
      }}
    >
      <strong>Inventory:</strong>
      {state.inventory.length === 0 && <span>(empty)</span>}
      {state.inventory.map((itemId) => {
        // Find the item object by id
        const itemObj = Object.values(state.items).find(item => item.id === itemId);
        const image = itemObj?.image;
        return (
          <DraggableItem key={itemId} id={itemId} from="inventory" image={image} />
        );
      })}
    </div>
  );
}


