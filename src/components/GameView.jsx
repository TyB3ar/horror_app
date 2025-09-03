import PageLayout from './PageLayout';
import PageContainer from './PageContainer';
import { roomLayouts } from '../config/roomLayouts';
import '../styles/gameView.css';
import { useState, useLayoutEffect } from 'react';

function GameView({ currentRoom, viewBackground, viewPathData, viewColorMap}) {
  const layout = roomLayouts[currentRoom] || { containerPositions: {} };  
  const [paths, setPaths] = useState(viewPathData);
  const [showFill, setShowFill] = useState(false);
  
  

  useLayoutEffect(() => {
    setPaths(viewPathData);
  }, [viewPathData]);

  const handleOnClick = async(event) => {
    // await setAlertMessage("");
    const clickedPath = event.target;
    const clickedId = clickedPath.id;

    const activeColor = clickedPath.getAttribute('fill');
    if (!activeColor) {
      // setAlertMessage({message: "There is nothing of interest here", variant: "info"});
      return;
    }

    setPaths((prev) =>
      prev.map((p) =>
        p.id === clickedId && !p.className.includes("pathVisited")
          ? { ...p, className: `${p.className} pathVisited` }
          : p
      )
    );
    
    viewColorMap[activeColor]()
  }


  return (
    <PageLayout
      backgroundImage={viewBackground}
      paths={paths}
      showFill={showFill}
      onPathClick={handleOnClick}
      containerPositions={layout.containerPositions}
    >
      {Object.keys(layout.containerPositions).map((containerId) => (
        <PageContainer
          key={containerId}
          page={currentRoom}
          container={containerId}
          showFill={showFill}
        />
      ))}
      <button
        style={{ position: 'absolute', top: 10, right: 10, zIndex: 200 }}
        onClick={() => setShowFill(!showFill)}
      >
        {showFill ? "Hide Fill" : "Show Fill"}
      </button>
    </PageLayout>
  );


}
  

export default GameView;