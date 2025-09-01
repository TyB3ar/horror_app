import { RoomSVG } from '../config/RoomSVG'; 
import React from 'react'; 

export default function PageLayout({
  backgroundImage,
  paths,
  showFill,
  onPathClick,
  containerPositions = {},
  children
}) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <RoomSVG
        backgroundImage={backgroundImage}
        paths={paths}
        showFill={showFill}
        onPathClick={onPathClick}
      />
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
