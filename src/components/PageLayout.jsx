import { RoomSVG } from '../config/RoomSVG'; 
import React from 'react'; 
import { useState } from 'react'; 

export default function PageLayout({
  backgroundImage,
  paths,
  showFill,
  onPathClick,
  containerPositions = {},
  children
}) {
  // setting state for svgSize, reference from RoomSVG 
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <RoomSVG
        backgroundImage={backgroundImage}
        paths={paths}
        showFill={showFill}
        onPathClick={onPathClick}
        onSizeChange={setSvgSize}
      />
      {React.Children.map(children, (child) => {
        const containerId = child.props.container;
        const position = containerPositions[containerId];
        if (!position) return null; 

        const left = (position.x / 2048) * svgSize.width; 
        const top = (position.y / 1343) * svgSize.height; 

        return (
          <div
            style={{
              position: 'absolute',
              top: `${top}px`,
              left: `${left}px`,
              zIndex: 100,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}



/*
import React from "react"; 

export default function PageLayout({ backgroundImage, paths, showFill, onPathClick, children, containerPositions = {}, children }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {React.Children.map(children, (child) => {
        const containerId = child.props.container;
        const position = containerPositions[containerId] || { top: 0, left: 0 };
        return (
          <div
            style={{
              position: 'absolute',
              top: position.top,
              left: position.left,
              zIndex: 100,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
*/ 
